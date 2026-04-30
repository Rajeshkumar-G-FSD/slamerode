import { motion } from "motion/react";
import { Send, Phone, Mail, Clock, MapPin, Bell, MoreHorizontal, Zap } from "lucide-react";
import { Button, Badge } from "../components/UI";
import { cn } from "@/src/lib/utils";

export default function Dashboard() {
  const chartData = [
    { label: "Mon", height: "40%", value: "2,400" },
    { label: "Tue", height: "55%", value: "3,100" },
    { label: "Wed", height: "45%", value: "2,800" },
    { label: "Thu", height: "70%", value: "4,200" },
    { label: "Fri", height: "60%", value: "3,800" },
    { label: "Sat", height: "85%", value: "5,100", active: true },
  ];

  return (
    <div className="flex flex-col gap-12 py-12 px-4 md:px-12 max-w-7xl mx-auto w-full">
      {/* Header */}
      <header className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 border-b border-surface-container pb-8">
        <div>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-2 text-on-surface">Welcome Back, Alex.</h1>
          <p className="text-lg text-on-surface-variant font-medium">Let's crush your goals today.</p>
        </div>
        <div className="flex items-center gap-4">
          <Badge className="bg-surface-container-high py-2.5 px-6 gap-3">
             <Zap className="w-5 h-5 text-yellow-500 fill-yellow-500" />
             <span className="text-on-surface font-bold">5 Day Streak</span>
          </Badge>
          <button className="p-3 bg-surface-container rounded-full hover:bg-surface-container-high transition-colors">
            <Bell size={20} />
          </button>
        </div>
      </header>

      {/* Stats and Session Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Chart Card */}
        <div className="md:col-span-2 glass-card rounded-md p-10 soft-shadow relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full -mr-32 -mt-32 blur-3xl"></div>
          
          <div className="flex justify-between items-start mb-12 relative z-10">
            <div>
              <h3 className="text-2xl font-bold mb-1">Performance Trends</h3>
              <p className="text-sm font-bold text-on-surface-variant uppercase tracking-widest">Weekly volume load (kg)</p>
            </div>
            <button className="p-2 hover:bg-surface-container rounded-full transition-colors">
              <MoreHorizontal size={24} />
            </button>
          </div>

          <div className="h-64 flex items-end justify-between gap-3 relative z-10">
            {chartData.map((bar, i) => (
              <div key={i} className="flex-1 flex flex-col items-center gap-4 group/bar">
                <div className="w-full relative flex flex-col items-center justify-end h-full">
                  <motion.div 
                    initial={{ height: 0 }}
                    animate={{ height: bar.height }}
                    transition={{ delay: i * 0.1, duration: 0.8, ease: "easeOut" }}
                    className={cn(
                      "w-full rounded-t-sm transition-all duration-300 relative",
                      bar.active ? "bg-primary primary-shadow" : "bg-surface-container-highest hover:bg-primary/40"
                    )}
                  >
                    <div className="absolute -top-10 left-1/2 -translate-x-1/2 opacity-0 group-hover/bar:opacity-100 transition-opacity bg-slate-900 text-white text-[10px] font-bold px-2 py-1 rounded-sm shadow-xl z-20">
                      {bar.value}
                    </div>
                  </motion.div>
                </div>
                <span className={cn(
                  "text-xs font-bold uppercase tracking-widest",
                  bar.active ? "text-primary" : "text-on-surface-variant"
                )}>{bar.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Session Card */}
        <div className="glass-card rounded-md p-10 flex flex-col justify-between group soft-shadow border border-surface-variant">
          <div>
            <div className="flex justify-between items-center mb-8">
              <Badge variant="primary" className="bg-rose-500/10 text-rose-500 border-none px-4">HIIT</Badge>
              <Bell className="w-5 h-5 text-on-surface-variant" />
            </div>
            <h3 className="text-3xl font-bold mb-3 leading-tight">Metabolic Conditioning</h3>
            <p className="text-on-surface-variant font-semibold flex items-center gap-2 mb-8">
              <Clock size={18} /> Today, 18:00
            </p>
          </div>

          <div className="bg-surface p-6 rounded-sm mb-8 border border-surface-container">
            <div className="flex items-center gap-4">
              <img 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDoddWy2lukhoj0EqvWfWiNrK9VqFc1WUeEGH1e6KZ1voD1hgaf17Cfo33JT68PW6adkZZNqRNrZwVxIrwz8PiNmguikl2XRUqeOAbKRC6tIiGiu3UqQdfELDsuHJ764CXSfKQ7F5y-IbwhlmhsW0PH3HKLGeJh20eSouLZJ-1u_0vJA7AP9VBB21eQo0HeM8qGSnhMzut6g6t_nmv24Qqug7PLf4XokIfpIsUf-8WlihD7OAAKPtDMVcTI-ZJoiX06d_GZrzsOv1YZ" 
                alt="Coach" 
                className="w-12 h-12 rounded-full object-cover shadow-sm"
              />
              <div>
                <p className="font-bold text-on-surface text-sm">Coach Sarah</p>
                <p className="text-[10px] font-bold text-on-surface-variant uppercase tracking-widest">Lead Instructor</p>
              </div>
            </div>
          </div>

          <Button className="w-full text-base py-4">Join Session</Button>
        </div>
      </div>

      {/* Inquiry Form */}
      <section className="mt-12 rounded-md border-t-8 border-primary bg-white shadow-2xl p-8 md:p-16 overflow-hidden relative">
        <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 relative z-10 text-left">
          <div>
            <h2 className="text-4xl md:text-5xl font-black mb-6 leading-tight">Have Questions? Let’s Talk.</h2>
            <p className="text-lg text-on-surface-variant font-medium mb-12 max-w-md">
              Whether you're looking for personalized training plans or need help navigating your dashboard, our elite support team is ready to assist you.
            </p>
            
            <div className="space-y-8">
              <div className="flex items-center gap-6 group">
                <div className="w-14 h-14 rounded-full bg-surface-container flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="text-[10px] font-bold text-on-surface-variant uppercase tracking-widest mb-1">Our Location</p>
                  <p className="font-bold text-on-surface group-hover:text-primary transition-colors text-sm">No.4,374/6A Third floor, Perundurai Rd, Pari Nagar, Erode</p>
                </div>
              </div>
              
              <div className="flex items-center gap-6 group">
                <div className="w-14 h-14 rounded-full bg-surface-container flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="text-[10px] font-bold text-on-surface-variant uppercase tracking-widest mb-1">Call Us</p>
                  <p className="font-bold text-on-surface group-hover:text-primary transition-colors">097873 77787</p>
                </div>
              </div>
            </div>
          </div>

          <form className="space-y-8 bg-surface-container-lowest glass-card p-10 rounded-sm border border-surface-container shadow-sm">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              <div className="space-y-2">
                <label className="text-[10px] font-bold text-on-surface-variant uppercase tracking-widest pl-1">Full Name</label>
                <input 
                  type="text" 
                  placeholder="John Doe"
                  className="w-full bg-transparent border-b-2 border-surface-container outline-none focus:border-primary py-3 transition-all font-medium text-lg placeholder:text-surface-container-highest"
                />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-bold text-on-surface-variant uppercase tracking-widest pl-1">Phone</label>
                <input 
                  type="tel" 
                  placeholder="+1 (555) 000-0000"
                  className="w-full bg-transparent border-b-2 border-surface-container outline-none focus:border-primary py-3 transition-all font-medium text-lg placeholder:text-surface-container-highest"
                />
              </div>
            </div>
            
            <div className="space-y-2">
              <label className="text-[10px] font-bold text-on-surface-variant uppercase tracking-widest pl-1">Email Address</label>
              <input 
                type="email" 
                placeholder="john@example.com"
                className="w-full bg-transparent border-b-2 border-surface-container outline-none focus:border-primary py-3 transition-all font-medium text-lg placeholder:text-surface-container-highest"
              />
            </div>

            <div className="space-y-2">
              <label className="text-[10px] font-bold text-on-surface-variant uppercase tracking-widest pl-1">Fitness Goal</label>
              <select className="w-full bg-transparent border-b-2 border-surface-container outline-none focus:border-primary py-3 transition-all font-medium text-lg appearance-none cursor-pointer">
                <option disabled selected>Select your primary goal</option>
                <option>Hypertrophy</option>
                <option>Endurance</option>
                <option>Weight Loss</option>
                <option>General Fitness</option>
              </select>
            </div>

            <div className="space-y-2">
              <label className="text-[10px] font-bold text-on-surface-variant uppercase tracking-widest pl-1">Message</label>
              <textarea 
                rows={3}
                placeholder="How can we help you achieve your goals?"
                className="w-full bg-transparent border-b-2 border-surface-container outline-none focus:border-primary py-3 transition-all font-medium text-lg resize-none placeholder:text-surface-container-highest"
              />
            </div>

            <Button size="lg" className="w-full sm:w-auto" icon={Send}>Send Message</Button>
          </form>
        </div>
      </section>
    </div>
  );
}
