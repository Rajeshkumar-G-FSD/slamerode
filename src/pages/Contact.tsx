import { motion } from "motion/react";
import { MapPin, Phone, Clock, Mail, Send } from "lucide-react";
import { Button } from "../components/UI";

export default function Contact() {
  const hours = [
    { day: "Thursday", time: "5:30 am – 10:00 pm" },
    { day: "Friday (Labor Day)", time: "5:30 am – 10:00 pm" },
    { day: "Saturday", time: "5:30 am – 10:00 pm" },
    { day: "Sunday", time: "5:30 am – 10:00 pm" },
    { day: "Monday", time: "5:30 am – 10:00 pm" },
    { day: "Tuesday", time: "5:30 am – 10:00 pm" },
    { day: "Wednesday", time: "5:30 am – 10:00 pm" },
  ];

  return (
    <div className="flex flex-col gap-12 py-12 px-4 md:px-12 max-w-7xl mx-auto w-full">
      <header className="text-center mb-8">
        <h1 className="text-4xl md:text-6xl font-black mb-4">Get In Touch</h1>
        <p className="text-lg text-on-surface-variant font-medium max-w-2xl mx-auto">
          Elevate your performance today. Visit our state-of-the-art facility or reach out to our team.
        </p>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div className="space-y-8">
          {/* Address Card */}
          <div className="glass-card p-8 rounded-md soft-shadow flex items-start gap-6">
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
              <MapPin className="text-primary" />
            </div>
            <div>
              <h3 className="font-bold text-xl mb-2">Our Location</h3>
              <p className="text-on-surface-variant leading-relaxed font-medium">
                No.4,374/6A Third floor, Perundurai Rd,<br />
                opp. to reliance mall, Pari Nagar,<br />
                Kumalan Kuttai, Erode,<br />
                Tamil Nadu 638011
              </p>
            </div>
          </div>

          {/* Contact info */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="glass-card p-8 rounded-md soft-shadow flex items-center gap-6">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Phone className="text-primary" />
              </div>
              <div>
                <p className="text-[10px] font-bold text-on-surface-variant uppercase tracking-widest mb-1">Call Us</p>
                <p className="font-bold text-lg">097873 77787</p>
              </div>
            </div>
            <div className="glass-card p-8 rounded-md soft-shadow flex items-center gap-6">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Mail className="text-primary" />
              </div>
              <div>
                <p className="text-[10px] font-bold text-on-surface-variant uppercase tracking-widest mb-1">Email Us</p>
                <p className="font-bold text-lg">contact@slamerode.com</p>
              </div>
            </div>
          </div>

          {/* Hours Card */}
          <div className="glass-card p-8 rounded-md soft-shadow">
            <div className="flex items-center gap-4 mb-6">
              <Clock className="text-primary" />
              <h3 className="font-bold text-xl">Operating Hours</h3>
            </div>
            <div className="space-y-3">
              {hours.map((h, i) => (
                <div key={i} className="flex justify-between items-center border-b border-surface-container pb-2 last:border-0">
                  <span className="font-semibold text-on-surface-variant">{h.day}</span>
                  <span className="font-bold text-on-surface">{h.time}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Inquiry Form */}
        <div className="bg-white rounded-md p-10 md:p-12 border-t-8 border-primary soft-shadow">
          <h2 className="text-3xl font-black mb-8">Send Us a Message</h2>
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-1">
                <label className="text-[10px] font-bold text-on-surface-variant uppercase tracking-widest px-1">Full Name</label>
                <input type="text" placeholder="John Doe" className="w-full bg-surface-container-lowest border-b-2 border-surface-container outline-none focus:border-primary py-3 px-1 transition-all" />
              </div>
              <div className="space-y-1">
                <label className="text-[10px] font-bold text-on-surface-variant uppercase tracking-widest px-1">Phone</label>
                <input type="tel" placeholder="097873 77787" className="w-full bg-surface-container-lowest border-b-2 border-surface-container outline-none focus:border-primary py-3 px-1 transition-all" />
              </div>
            </div>
            <div className="space-y-1">
              <label className="text-[10px] font-bold text-on-surface-variant uppercase tracking-widest px-1">Email Address</label>
              <input type="email" placeholder="john@example.com" className="w-full bg-surface-container-lowest border-b-2 border-surface-container outline-none focus:border-primary py-3 px-1 transition-all" />
            </div>
            <div className="space-y-1">
              <label className="text-[10px] font-bold text-on-surface-variant uppercase tracking-widest px-1">Message</label>
              <textarea rows={4} placeholder="How can we help you?" className="w-full bg-surface-container-lowest border-b-2 border-surface-container outline-none focus:border-primary py-3 px-1 transition-all resize-none"></textarea>
            </div>
            <Button size="lg" className="w-full" icon={Send}>Send Message</Button>
          </form>
        </div>
      </div>
    </div>
  );
}
