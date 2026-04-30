import { motion } from "motion/react";
import { PlayCircle, Video, Music, Calendar, Dumbbell, Smile, User, Activity } from "lucide-react";
import { Button, Badge } from "../components/UI";
import { cn } from "@/src/lib/utils";

export default function Training() {
  const schedule = [
    { time: "08:00 AM", session: "Morning Activation", instructor: "David K." },
    { time: "12:30 PM", session: "Lunch Break Flow", instructor: "Sarah J." },
  ];

  const library = [
    { title: "Core Stability", meta: "45 Mins • Intermediate", icon: <Dumbbell className="w-5 h-5 text-primary" /> },
    { title: "Deep Stretch Recovery", meta: "30 Mins • All Levels", icon: <Activity className="w-5 h-5 text-primary" /> }
  ];

  return (
    <div className="flex flex-col gap-12 py-12 px-4 max-w-7xl mx-auto">
      {/* Hero Section */}
      <section className="relative rounded-md overflow-hidden bg-surface-container-lowest border border-surface-variant shadow-md h-[450px]">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCCPlvj7nRzA95j5PEi3ctA7Pr1h_7ArmkoT72ZxqgE56sRuIEzEcGmTGwAk71gazyJvtAxA52QNEUrfo-2LP3pP1H5QRG5Kko22uV0luhTaVIcF7qLPqnw6F7sg8nz3l6zIlCDqnpH8N_oR2S4gazPSO9rsIg6SJIvA4sZv3czk3DaW8dY2RrWmxMw9JJIUm1sJ776wIxFiWLdh41-vSaIy8iUH6adc-7Sc6AV9H4ZvKimBPjYKwIzIFd_ug56OxgyDLX7oR4Jkcap" 
            alt="Yoga Studio" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/80 to-transparent"></div>
        </div>
        
        <div className="relative z-10 p-12 max-w-2xl flex flex-col items-start h-full justify-center">
          <h1 className="text-5xl md:text-6xl font-black text-on-surface mb-6 leading-tight">
            Find Your Balance Anywhere
          </h1>
          <p className="text-lg text-on-surface-variant mb-10 font-medium">
            Access elite live and recorded yoga sessions. Sync your breath, master your form, and elevate your performance from the comfort of your own space.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button size="lg">Join Online Yoga</Button>
            <Button variant="outline" size="lg">View Schedule</Button>
          </div>
        </div>
      </section>

      {/* Grid: Classes & Coaching */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Live Sessions Card */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="md:col-span-2 rounded-md glass-card p-10 flex flex-col justify-between relative overflow-hidden group border border-surface-variant"
        >
          <div className="absolute -right-20 -top-20 w-64 h-64 bg-primary/5 rounded-full blur-3xl z-0"></div>
          
          <div className="relative z-10">
            <div className="flex justify-between items-start mb-8">
              <div>
                <Badge variant="primary" className="mb-3">Live Now</Badge>
                <h2 className="text-3xl font-bold">Vinyasa Flow Elite</h2>
              </div>
              <PlayCircle className="w-12 h-12 text-primary" />
            </div>
            <p className="text-on-surface-variant font-medium mb-10 text-lg">
              High-intensity flow designed for athletic recovery and flexibility enhancement.
            </p>
            <div className="flex gap-4 items-center">
              <img 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAwG8eRb3voQGaCdTjkKFgJu3V2v5rEsExm0MkppXnf-kybzxt7Xik9-KSsbrth_3nJ0hhuvAqebdg7yIAk0Dj-NgIqVr07rY-DtWsCHx_0q-LaPBtBgHMne0bJs0bvETuS6HZomZLC-FTHvv8woUx3KePuYemA12qhYmfmevpK7OC7tIC8QgEdDLilCJiSlSgG0afPrdhC1NAfiRsOiN8KlEodDTA7GGbnzhrwxfflg5iOcUxd7jO5Awx7ib1IYYKsUCpXweiuqSq8" 
                alt="Sarah" 
                className="w-14 h-14 rounded-full border-2 border-white shadow-sm"
              />
              <div>
                <p className="font-bold text-on-surface">Sarah Jenkins</p>
                <p className="text-xs font-bold text-on-surface-variant uppercase tracking-widest">Master Instructor</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Virtual Coaching Card */}
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="rounded-md bg-slate-900 text-white p-10 flex flex-col justify-between shadow-2xl relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 p-4 opacity-50">
            <Video className="w-12 h-12 text-yellow-400" />
          </div>
          <div>
            <h2 className="text-3xl font-bold mb-4">1:1 Virtual Coaching</h2>
            <p className="text-slate-400 font-medium leading-relaxed">
              Personalized form correction and sequence planning tailored to your athletic needs.
            </p>
          </div>
          <Button variant="secondary" className="w-full bg-white text-slate-900 border-none">Book Session</Button>
        </motion.div>

        {/* Recorded Library */}
        <div className="rounded-md bg-white border border-surface-variant p-10 shadow-sm">
          <div className="flex justify-between items-center mb-8 pb-4 border-b border-surface-container">
            <h3 className="text-2xl font-bold">Recorded Library</h3>
            <Music className="w-6 h-6 text-on-surface-variant" />
          </div>
          <ul className="space-y-6">
            {library.map((item, i) => (
              <li key={i} className="flex items-center gap-4 p-3 hover:bg-surface-container-low rounded-sm cursor-pointer transition-colors">
                <div className="w-12 h-12 rounded-sm bg-surface-container flex items-center justify-center">
                  {item.icon}
                </div>
                <div>
                  <p className="font-bold text-on-surface">{item.title}</p>
                  <p className="text-xs font-medium text-on-surface-variant">{item.meta}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* Schedule Table */}
        <div className="md:col-span-2 rounded-md bg-white border border-surface-variant p-10 shadow-sm">
          <div className="flex justify-between items-center mb-8">
            <h3 className="text-2xl font-bold">Upcoming Schedule</h3>
            <button className="text-sm font-bold text-primary hover:underline">View Full Calendar</button>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="border-b border-surface-container-highest">
                  <th className="py-4 text-xs font-bold text-on-surface-variant uppercase tracking-widest">Time</th>
                  <th className="py-4 text-xs font-bold text-on-surface-variant uppercase tracking-widest">Session</th>
                  <th className="py-4 text-xs font-bold text-on-surface-variant uppercase tracking-widest">Instructor</th>
                  <th className="py-4 text-xs font-bold text-on-surface-variant uppercase tracking-widest text-right">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-surface-container">
                {schedule.map((row, i) => (
                  <tr key={i} className="group hover:bg-surface-container-lowest transition-colors">
                    <td className="py-5 font-medium">{row.time}</td>
                    <td className="py-5 font-bold text-on-surface">{row.session}</td>
                    <td className="py-5 text-on-surface-variant">{row.instructor}</td>
                    <td className="py-5 text-right">
                      <Button variant="secondary" size="sm">Reserve</Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </div>
  );
}
