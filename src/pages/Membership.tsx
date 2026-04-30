import { motion } from "motion/react";
import { Check, X, MapPin, ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";
import { Button, Badge } from "../components/UI";
import { cn } from "@/src/lib/utils";

export default function Membership() {
  const plans = [
    {
      name: "Basic",
      price: "49",
      description: "Essential access to our facilities.",
      features: [
        { text: "Full Gym Access", included: true },
        { text: "Standard Locker Room", included: true },
        { text: "Group Classes", included: false }
      ],
      popular: false
    },
    {
      name: "Pro",
      price: "99",
      description: "Advanced tools for serious athletes.",
      features: [
        { text: "24/7 Gym Access", included: true },
        { text: "Unlimited Group Classes", included: true },
        { text: "Recovery Zone Access", included: true }
      ],
      popular: true
    },
    {
      name: "Elite",
      price: "199",
      description: "The ultimate performance package.",
      features: [
        { text: "Everything in Pro", included: true },
        { text: "Weekly 1-on-1 Coaching", included: true },
        { text: "Private Locker & Laundry", included: true }
      ],
      popular: false
    }
  ];

  return (
    <div className="flex flex-col gap-24 py-12 px-4 max-w-7xl mx-auto">
      {/* Header Banner */}
      <div className="bg-primary -mx-4 -mt-12 py-2 px-margin flex items-center justify-center text-on-primary font-bold text-xs uppercase tracking-widest text-center">
        Flash Sale: Get 30% OFF all Annual Memberships today!
      </div>

      {/* Hero Section */}
      <section className="relative w-full h-[400px] rounded-md overflow-hidden soft-shadow flex items-center">
        <div className="absolute inset-0 bg-gradient-to-r from-on-surface/90 to-transparent z-10"></div>
        <img 
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuAQYD6NgtjOKYGRtpCSBH9CMREz71539GGTSDbE7iYLIJaWr_NNxsfgkHz2cB3iAnm7wPi2NaNxZM_WlRkHshrq5G2UoimwLHKCXqSJlV1WwNB9ZZ51ccRFhQBsSs7MZS5-r0BMX3j0LqJj6K96kpJXL6x4zHXeJVmVq_v-3G5Z3rE9Qof273hwqCKRq1cpQ6Vi-c70CCJGPVsDAeS3540gIqvuo0yVwuZ7Sd3-gKZWV0xwemn26yiNtJu6220-HNpL-0j1uniwsXux" 
          alt="Athlete" 
          className="absolute inset-0 w-full h-full object-cover z-0"
        />
        <div className="relative z-20 w-full p-12 flex flex-col items-start gap-4">
          <Badge variant="secondary" className="bg-yellow-400 text-black">Elevate Your Performance</Badge>
          <h1 className="text-5xl md:text-6xl font-black text-white leading-tight">
            Train Like an Elite.<br />
            <span className="text-primary">Without Compromise.</span>
          </h1>
          <p className="text-lg text-white/80 max-w-xl font-medium">
            Select your membership tier and lock in your session. Our high-performance environment is designed for maximum efficiency and results.
          </p>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="flex flex-col gap-12">
        <div className="text-center">
          <h2 className="text-4xl font-bold mb-4">Membership Packages</h2>
          <p className="text-on-surface-variant font-medium">Choose the tier that aligns with your athletic goals.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          {plans.map((plan, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className={cn(
                "bg-white rounded-md p-10 border flex flex-col gap-6 relative transition-all duration-300 hover:shadow-2xl",
                plan.popular ? "border-2 border-primary scale-105 z-10 shadow-xl" : "border-surface-container-high"
              )}
            >
              {plan.popular && (
                <div className="absolute top-0 right-0 bg-primary text-white font-bold px-4 py-1.5 rounded-bl-sm uppercase tracking-wider text-[10px]">
                  Most Popular
                </div>
              )}
              
              <div>
                <h3 className="text-2xl font-bold mb-1">{plan.name}</h3>
                <p className="text-sm text-on-surface-variant font-medium">{plan.description}</p>
              </div>
              
              <div className="flex items-baseline gap-1 border-b border-surface-container-high pb-6">
                <span className="text-5xl font-extrabold">${plan.price}</span>
                <span className="text-xs font-bold text-on-surface-variant uppercase tracking-widest">/ month</span>
              </div>
              
              <ul className="flex flex-col gap-4 flex-grow">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-3">
                    {feature.included ? (
                      <Check className="w-5 h-5 text-primary stroke-[3px]" />
                    ) : (
                      <X className="w-5 h-5 text-surface-container-highest" />
                    )}
                    <span className={cn(
                      "text-sm font-semibold",
                      feature.included ? "text-on-surface" : "text-surface-container-highest"
                    )}>
                      {feature.text}
                    </span>
                  </li>
                ))}
              </ul>
              
              <div className="flex flex-col gap-3 mt-4">
                <Button variant={plan.popular ? "primary" : "primary"} className="w-full">Join Now</Button>
                <Button variant="outline" className="w-full">View Plans</Button>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Booking Section */}
      <section className="bg-surface-container-low rounded-md p-10 flex flex-col gap-10 border border-surface-variant shadow-sm mb-12">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          <div>
            <h2 className="text-4xl font-bold mb-1">Book Your Workout in Seconds</h2>
            <p className="text-on-surface-variant font-medium">Select a date and secure your spot in our high-intensity zones.</p>
          </div>
          <div className="flex items-center gap-3 bg-white px-6 py-2 rounded-full border border-surface-variant shadow-sm">
            <MapPin className="w-5 h-5 text-primary" />
            <span className="font-bold text-sm">Downtown HQ</span>
            <ChevronRight className="w-4 h-4 text-on-surface-variant rotate-90" />
          </div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Calendar Mockup */}
          <div className="lg:col-span-1 bg-white rounded-sm p-8 border border-surface-variant shadow-sm flex flex-col gap-6">
            <div className="flex justify-between items-center">
              <h3 className="text-xl font-bold">October 2023</h3>
              <div className="flex gap-2">
                <button className="p-1 hover:bg-surface-container rounded-full transition-colors"><ChevronLeft size={20} /></button>
                <button className="p-1 hover:bg-surface-container rounded-full transition-colors"><ChevronRight size={20} /></button>
              </div>
            </div>
            
            <div className="grid grid-cols-7 gap-2 text-center text-[10px] font-bold text-on-surface-variant uppercase tracking-widest mb-2">
              {['S','M','T','W','T','F','S'].map(d => <div key={d}>{d}</div>)}
            </div>
            
            <div className="grid grid-cols-7 gap-1 text-center font-bold text-sm">
              {Array.from({length: 31}, (_, i) => i + 1).map(day => (
                <div 
                  key={day} 
                  className={cn(
                    "w-9 h-9 flex items-center justify-center rounded-full cursor-pointer transition-all",
                    day === 12 ? "bg-primary text-white shadow-lg scale-110" : "hover:bg-surface-container"
                  )}
                >
                  {day}
                </div>
              ))}
            </div>
          </div>
          
          {/* Slots Section */}
          <div className="lg:col-span-2 bg-white rounded-sm p-8 border border-surface-variant shadow-sm flex flex-col gap-8">
            <h3 className="text-2xl font-bold border-b border-surface-container pb-4">
              Available Slots for <span className="text-primary underline underline-offset-4 decoration-2">Oct 12</span>
            </h3>
            
            <div className="space-y-8 flex-grow">
              <div>
                <span className="text-[10px] font-bold text-on-surface-variant uppercase tracking-[0.2em] block mb-4">Morning Sessions</span>
                <div className="flex flex-wrap gap-3">
                  {["06:00 AM", "07:30 AM", "09:00 AM"].map(time => (
                    <button 
                      key={time}
                      className={cn(
                        "px-6 py-2 rounded-full font-bold text-sm border transition-all",
                        time === "07:30 AM" 
                          ? "bg-primary-container text-white border-primary shadow-md" 
                          : "border-surface-variant hover:border-primary hover:text-primary"
                      )}
                    >
                      {time}
                    </button>
                  ))}
                </div>
              </div>
              
              <div>
                <span className="text-[10px] font-bold text-on-surface-variant uppercase tracking-[0.2em] block mb-4">Afternoon & Evening</span>
                <div className="flex flex-wrap gap-3">
                  {["12:00 PM", "04:30 PM", "06:00 PM", "07:30 PM"].map(time => (
                    <button 
                      key={time}
                      disabled={time === "04:30 PM"}
                      className={cn(
                        "px-6 py-2 rounded-full font-bold text-sm border transition-all",
                        time === "04:30 PM" 
                          ? "bg-surface-container-high text-on-surface-variant opacity-50 cursor-not-allowed line-through" 
                          : "border-surface-variant hover:border-primary hover:text-primary"
                      )}
                    >
                      {time}
                    </button>
                  ))}
                </div>
              </div>
            </div>
            
            <div className="pt-8 border-t border-surface-variant flex flex-col sm:flex-row justify-between items-center gap-6">
              <div>
                <span className="text-[10px] font-bold text-on-surface-variant uppercase tracking-widest block mb-1">Selected Slot</span>
                <div className="text-2xl font-bold flex items-center gap-3">
                  07:30 AM <span className="w-1.5 h-1.5 rounded-full bg-primary-container"></span> <span className="text-primary text-lg">HIIT Zone</span>
                </div>
              </div>
              <Button size="lg" icon={ArrowRight}>Book a Slot</Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
