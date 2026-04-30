import { Search, Bell, User, Menu } from "lucide-react";
import { Button } from "./UI";

interface NavbarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

export function Navbar({ activeTab, setActiveTab }: NavbarProps) {

  return (
    <nav className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-xl border-b border-slate-100/50 shadow-sm transition-all duration-300">
      <div className="flex justify-between items-center px-6 md:px-12 py-4 max-w-7xl mx-auto">
        <div 
          className="flex items-center cursor-pointer"
          onClick={() => setActiveTab("Programs")}
        >
          <img 
            src="https://i.postimg.cc/Fzbwgcmr/slam.png" 
            alt="SLAM Erode" 
            className="h-8 md:h-10 w-auto object-contain"
            referrerPolicy="no-referrer"
          />
        </div>
        
        <div className="hidden md:flex gap-8 items-center">
          {["Programs", "Membership", "Training", "Dashboard", "Contact"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`font-semibold text-sm tracking-tight transition-all duration-200 hover:scale-105 ${
                activeTab === tab ? "text-primary border-b-2 border-primary pb-1" : "text-slate-600 hover:text-rose-500"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <Button variant="outline" size="sm" className="hidden lg:flex">Book Now</Button>
          <Button variant="primary" size="sm">Join Now</Button>
          <button className="md:hidden text-slate-900">
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </div>
    </nav>
  );
}

export function Footer({ setActiveTab }: { setActiveTab: (tab: string) => void }) {
  const links = [
    { name: "Privacy Policy", href: "#" },
    { name: "Terms of Service", href: "#" },
    { name: "Contact Us", href: "#" },
    { name: "Careers", href: "#" },
  ];

  return (
    <footer className="bg-slate-50 border-t border-slate-200 w-full py-12 px-8 mt-xl">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-7xl mx-auto text-center md:text-left">
        <div>
          <img 
            src="https://i.postimg.cc/Fzbwgcmr/slam.png" 
            alt="SLAM Erode" 
            className="h-6 md:h-8 w-auto object-contain mb-6"
            referrerPolicy="no-referrer"
          />
          <p className="text-sm text-slate-500">
            Redefining peak performance through minimalist design and maximum intensity.
          </p>
        </div>
        <div className="flex flex-col gap-4">
          <a href="#" onClick={() => setActiveTab("Contact")} className="text-xs font-bold tracking-widest uppercase text-slate-500 hover:text-rose-500 transition-colors">Contact Us</a>
          <a href="#" className="text-xs font-bold tracking-widest uppercase text-slate-500 hover:text-rose-500 transition-colors">Privacy Policy</a>
          <a href="#" className="text-xs font-bold tracking-widest uppercase text-slate-500 hover:text-rose-500 transition-colors">Terms of Service</a>
          <a href="#" className="text-xs font-bold tracking-widest uppercase text-slate-500 hover:text-rose-500 transition-colors">Careers</a>
        </div>
        <div className="md:col-span-2 flex flex-col justify-end md:items-end">
          <p className="text-xs font-bold tracking-widest uppercase text-slate-500">
            © 2024 SLAM ERODE PERFORMANCE. ALL RIGHTS RESERVED.
          </p>
        </div>
      </div>
    </footer>
  );
}
