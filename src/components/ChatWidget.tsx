import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { MessageSquare, X, Send, Dumbbell, Activity, Sun, Moon, User, CheckCircle2 } from "lucide-react";
import { GoogleGenAI } from "@google/genai";
import { cn } from "@/src/lib/utils";
import { Button } from "./UI";

const WHATSAPP_NUMBER = "8072117912";

type ChatStep = "initial" | "service" | "timing" | "details" | "ai_qa";

interface Message {
  role: "user" | "bot";
  content: string;
}

export function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [step, setStep] = useState<ChatStep>("service");
  const [formData, setFormData] = useState({
    service: "",
    timing: "",
    name: "",
    phone: "",
  });
  const [messages, setMessages] = useState<Message[]>([
    { role: "bot", content: "Hi! Welcome to SLAM Erode. How can we help you reach your peak performance today?" }
  ]);
  const [inputMessage, setInputMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, step]);

  const handleAISend = async () => {
    if (!inputMessage.trim()) return;

    const userMsg = inputMessage.trim();
    setMessages(prev => [...prev, { role: "user", content: userMsg }]);
    setInputMessage("");
    setIsLoading(true);

    try {
      const response = await ai.models.generateContent({
        model: "gemini-3-flash-preview",
        contents: userMsg,
        config: {
          systemInstruction: "You are an elite fitness assistant for SLAM Erode Gym. Answer queries about gym workouts, yoga, nutrition, and recovery with a professional, motivating, and expert tone. Keep responses concise and focused on athletic performance.",
        }
      });

      const botMsg = response.text || "I'm sorry, I couldn't process that. Feel free to ask another question about fitness!";
      setMessages(prev => [...prev, { role: "bot", content: botMsg }]);
    } catch (error) {
      console.error("AI Error:", error);
      setMessages(prev => [...prev, { role: "bot", content: "Sorry, I'm having trouble connecting right now. Please try again later or contact us directly." }]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleStepSelection = (field: keyof typeof formData, value: string, nextStep: ChatStep) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    setMessages(prev => [...prev, { role: "user", content: value }]);
    setStep(nextStep);
    
    // Add bit of personality
    setTimeout(() => {
      if (nextStep === "timing") {
        setMessages(prev => [...prev, { role: "bot", content: `Excellent choice. ${value} at SLAM is world-class. When do you prefer your sessions?` }]);
      } else if (nextStep === "details") {
        setMessages(prev => [...prev, { role: "bot", content: "Perfect. We have slots available. Please provide your details to secure your spot." }]);
      }
    }, 400);
  };

  const handleFinalSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message = `*SLAM Erode Inquiry*
*Program:* ${formData.service}
*Timing:* ${formData.timing}
*Name:* ${formData.name}
*Phone:* ${formData.phone}`;
    
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`, "_blank");
    setMessages(prev => [...prev, { role: "bot", content: "Great! Your details have been shared via WhatsApp. We'll be in touch soon!" }]);
    setStep("initial");
  };

  return (
    <div className="fixed bottom-8 right-8 z-[100] flex flex-col items-end">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="mb-4 w-[350px] md:w-[400px] h-[550px] bg-white rounded-md soft-shadow border border-surface-variant flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="bg-primary p-6 text-white flex justify-between items-center shadow-md">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center backdrop-blur-md">
                  <Activity className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-lg leading-none">SLAM AI Assistant</h3>
                  <p className="text-xs text-white/70 mt-1">Online • Expert Support</p>
                </div>
              </div>
              <button 
                onClick={() => setIsOpen(false)}
                className="p-2 hover:bg-white/10 rounded-full transition-colors"
              >
                <X size={20} />
              </button>
            </div>

            {/* Content Area */}
            <div ref={scrollRef} className="flex-grow p-6 overflow-y-auto space-y-6 no-scrollbar bg-surface-container-lowest">
              {messages.map((msg, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: msg.role === "user" ? 20 : -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className={cn(
                    "max-w-[85%] p-4 rounded-sm text-sm font-medium shadow-sm",
                    msg.role === "user" 
                      ? "ml-auto bg-primary text-white" 
                      : "mr-auto bg-white border border-surface-container text-on-surface"
                  )}
                >
                  {msg.content}
                </motion.div>
              ))}

              {/* Interaction Layer */}
              {step === "service" && (
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="grid grid-cols-1 gap-3 pt-4"
                >
                  <button 
                    onClick={() => handleStepSelection("service", "Gym Training", "timing")}
                    className="flex items-center gap-4 p-4 bg-white border-2 border-surface-container rounded-sm hover:border-primary transition-all text-left"
                  >
                    <div className="w-10 h-10 rounded-full bg-primary/5 flex items-center justify-center text-primary">
                      <Dumbbell size={20} />
                    </div>
                    <div>
                      <p className="font-bold">Gym Training</p>
                      <p className="text-xs text-on-surface-variant">Strength & Power</p>
                    </div>
                  </button>
                  <button 
                    onClick={() => handleStepSelection("service", "Yoga Sessions", "timing")}
                    className="flex items-center gap-4 p-4 bg-white border-2 border-surface-container rounded-sm hover:border-primary transition-all text-left"
                  >
                    <div className="w-10 h-10 rounded-full bg-primary/5 flex items-center justify-center text-primary">
                      <Activity size={20} />
                    </div>
                    <div>
                      <p className="font-bold">Yoga Sessions</p>
                      <p className="text-xs text-on-surface-variant">Internal Balance</p>
                    </div>
                  </button>
                  <button 
                    onClick={() => setStep("ai_qa")}
                    className="mt-4 text-xs font-bold text-primary uppercase tracking-widest hover:underline text-center"
                  >
                    Or Ask AI a Question
                  </button>
                </motion.div>
              )}

              {step === "timing" && (
                <motion.div 
                   initial={{ opacity: 0 }}
                   animate={{ opacity: 1 }}
                   className="grid grid-cols-2 gap-3 pt-4"
                >
                   <button 
                    onClick={() => handleStepSelection("timing", "Morning Slot", "details")}
                    className="flex flex-col items-center gap-2 p-4 bg-white border-2 border-surface-container rounded-sm hover:border-primary transition-all"
                  >
                    <Sun className="text-yellow-500" />
                    <span className="font-bold text-xs uppercase tracking-widest">Morning</span>
                  </button>
                  <button 
                    onClick={() => handleStepSelection("timing", "Evening Slot", "details")}
                    className="flex flex-col items-center gap-2 p-4 bg-white border-2 border-surface-container rounded-sm hover:border-primary transition-all"
                  >
                    <Moon className="text-blue-500" />
                    <span className="font-bold text-xs uppercase tracking-widest">Evening</span>
                  </button>
                </motion.div>
              )}

              {step === "details" && (
                <motion.form 
                   initial={{ opacity: 0 }}
                   animate={{ opacity: 1 }}
                   onSubmit={handleFinalSubmit}
                   className="space-y-4 pt-4 bg-white p-5 rounded-sm border border-surface-container"
                >
                   <div className="space-y-1">
                      <label className="text-[10px] font-bold text-on-surface-variant uppercase tracking-widest">Name</label>
                      <input 
                        required
                        type="text" 
                        value={formData.name}
                        onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                        className="w-full bg-surface-container-low border-b-2 border-surface-container outline-none focus:border-primary py-2 px-1 text-sm font-bold" 
                      />
                   </div>
                   <div className="space-y-1">
                      <label className="text-[10px] font-bold text-on-surface-variant uppercase tracking-widest">Phone Number</label>
                      <input 
                        required
                        type="tel" 
                        value={formData.phone}
                        onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
                        className="w-full bg-surface-container-low border-b-2 border-surface-container outline-none focus:border-primary py-2 px-1 text-sm font-bold" 
                      />
                   </div>
                   <Button type="submit" className="w-full" icon={Send} size="sm">Submit to WhatsApp</Button>
                </motion.form>
              )}

              {isLoading && (
                <div className="flex gap-2 items-center text-on-surface-variant">
                  <div className="w-2 h-2 rounded-full bg-primary animate-bounce"></div>
                  <div className="w-2 h-2 rounded-full bg-primary animate-bounce [animation-delay:-0.15s]"></div>
                  <div className="w-2 h-2 rounded-full bg-primary animate-bounce [animation-delay:-0.3s]"></div>
                </div>
              )}
            </div>

            {/* Input Layer (AI Mode) */}
            {step === "ai_qa" && (
              <div className="p-6 border-t border-surface-container bg-white">
                <div className="flex gap-2">
                  <input 
                    type="text"
                    value={inputMessage}
                    onChange={(e) => setInputMessage(e.target.value)}
                    onKeyDown={(e) => e.key === "Enter" && handleAISend()}
                    placeholder="Ask about fitness..."
                    className="flex-grow bg-surface-container-low border-none rounded-full px-5 py-3 text-sm focus:ring-2 focus:ring-primary outline-none transition-all"
                  />
                  <button 
                    onClick={handleAISend}
                    disabled={isLoading || !inputMessage.trim()}
                    className="w-11 h-11 rounded-full bg-primary text-white flex items-center justify-center disabled:opacity-50 transition-all hover:scale-110 active:scale-95"
                  >
                    <Send size={18} />
                  </button>
                </div>
                <button 
                  onClick={() => setStep("service")}
                  className="mt-4 text-[10px] font-bold text-on-surface-variant uppercase tracking-widest hover:text-primary transition-colors block text-center w-full"
                >
                  Back to Registration
                </button>
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Toggle Button */}
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(!isOpen)}
        className="w-16 h-16 rounded-full bg-primary text-white flex items-center justify-center primary-shadow relative group"
      >
        {isOpen ? <X size={28} /> : <MessageSquare size={28} />}
        <span className="absolute -top-12 right-0 bg-white text-on-surface text-[10px] font-bold px-3 py-1.5 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap border border-surface-variant">
          Ask our AI Assistant
        </span>
      </motion.button>
    </div>
  );
}
