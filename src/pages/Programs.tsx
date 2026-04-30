import { motion } from "motion/react";
import { ArrowRight, Calendar, Heart, Dumbbell, Zap, Smile } from "lucide-react";
import { Button, Badge } from "../components/UI";

export default function Programs() {
  const disciplines = [
    {
      title: "Strength & Power",
      description: "Build functional strength and explosive power through periodized heavy lifting protocols.",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBTHzrqMLpe1dfYo_1E-gEiAXfPUhgKsSKjINV7EPQT-Dby8hmjqq1F_SAbswpR6Tf0T6zfpIAfYXajqSvfSxVe6djm1TnqdgDfPTA6odN_SE1sOwZ1TMHDBEjE1CvLT2YpqAVeWqUpGFDPlwcAYjO2s-cA5JU6XV2yNiXDKnbP-eVjt14bGoG5wRRqU7OC0WPwDEi3u3fIrF3G-CGvkwfhZM13Xz7LR6ncwqbey_pK88qukZg6PiAJU3MKzmEvCN1Cdj_iWPR_ssdq",
      badge: "Hypertrophy",
      icon: Dumbbell
    },
    {
      title: "Metabolic Conditioning",
      description: "High-intensity intervals designed to maximize caloric burn and elevate your metabolic rate.",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuD3GslCZRNLhfZ_xn3Ssi-O0yRd5VuhC4VnAXcduBFCtU2x9TJdMz1LTExUKO6kzkedDLjEfUTdBCmh1z108D7AvAyUfzPxZOO5P18DEZx3D__LIJ9LdTb-dEbIMEioy8j82RkAh7hykGZmBxMs4j-BCm-JSXie2ohsicFZtWnZlL9qK64srVI0vlWMtGibN4aHSca89esznVbCGQESWObnEzolv59xUV1a5DQeD5KOEE4GxiVwlt5U8N8qFUGx8oIHdkuiCUv8AIWN",
      badge: "HIIT",
      icon: Zap
    },
    {
      title: "Yoga & Recovery",
      description: "Enhance flexibility, prevent injury, and optimize recovery through elite-level movement flows.",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCb-8T7cYA7Zr92Beba-8vesAgkkWUnUhdpCoq8OB8PB4sCu3rAT2-eaWaGU1T7RoEaTyNkiymdzI-EvaR0Ti-sqqPn_eIZBzNagU_PgQIP5VMUB2rxaw0OLcoj1kMYQFNTZDip8pE4QroE8IAx7hou4WSq2-6VAwSx8bUWtf9V_cBAm4vZ_VXZ1Y7Ms2xFgQ_tSLg3n44S5ZPCnV_Xi9P40TeT447Q92Prs26Y2JAxAYRdPKXkUpzqxJHFQY3Tcf8NbgdNEsc3y1MX",
      badge: "Mobility",
      icon: Smile
    }
  ];

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden py-xl px-4 text-center">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBz9t6iPxulmgDdFUey8GCnS28X0rZlY4rp6X16SAaywv31RsrS4QaQtw5C19ulZWnLVoeyqntUXTDXcXbIJexcy0PxqvqLePJaITmgBA0g7khFvoMY5zX-hEUdA1J7yjzaR0kCW1MR58GIcSnKlVy7RFC2504OpYx2k27BNGqYavOtpSr8EickdGCAisqe6JTELMNZ7BBM3BDAcrxcwQinrfLcixrwDVMVQJEFMC8rKNnP-qvkR4uBiXKIVnQN9PtEtl8XRyk7etlU" 
            alt="Gym Hero" 
            className="w-full h-full object-cover opacity-10"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-surface/90"></div>
        </div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative z-10 max-w-5xl mx-auto flex flex-col items-center gap-8"
        >
          <div className="inline-flex items-center gap-2 bg-surface-container-high px-4 py-2 rounded-full mb-4">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
            <span className="font-bold text-xs text-on-surface-variant tracking-wide uppercase">Elite Performance Coaching</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold leading-tight tracking-tight">
            Transform Your Body.<br />
            <span className="text-primary italic">Elevate Your Life.</span>
          </h1>
          <p className="text-lg md:text-xl text-on-surface-variant max-w-2xl mx-auto font-medium">
            Experience unparalleled coaching in a state-of-the-art environment. We blend science, intensity, and minimalist design to focus entirely on your results.
          </p>
          <div className="flex flex-col sm:flex-row items-center gap-4 mt-8 w-full sm:w-auto">
            <Button size="lg" icon={ArrowRight}>Start Your Journey</Button>
            <Button variant="outline" size="lg" icon={Calendar}>Book a Free Trial</Button>
          </div>
        </motion.div>
      </section>

      {/* Powered by Strength Section */}
      <section className="py-xl px-4 bg-surface-container-lowest z-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Driven by <span className="text-primary">Strength</span></h2>
            <p className="text-lg text-on-surface-variant max-w-2xl mx-auto font-medium">More than a gym. A community forged in sweat, dedicated to pushing past limitations.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="md:col-span-2 relative group overflow-hidden rounded-md min-h-[400px]">
              <img 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAfssZ6FAEbLXCs1fowisq_Y3dpKkh9x7ectq_WJ70kv9YZRkppDOf0_i9x4maR1dKCpUG2ZlaXUJ48INcxtPuR4PnzI4sCnSNaDxOs7UQ9OANu6JtbwOV5kpDEmJIznN0wXfdgw89h3gk5ow3MPI5KWs6DP0uaFss7dDkeL4hyyAGbsKlKYW6BtxnL8u4mr4_a9OF_lagTMVVqp-vIf6-LnEpYuT5Tf-O9MYmTxTCAwyq5vqn-P2sugTqeG2-pFtyWEN9XdgEg0WrU" 
                alt="Community" 
                className="absolute inset-0 w-full h-full object-cover opacity-60 transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-surface-container-lowest/90 via-transparent to-transparent"></div>
              <div className="absolute inset-0 p-10 flex flex-col justify-end">
                <Badge variant="primary" className="mb-4 w-fit">The Community</Badge>
                <h3 className="text-3xl font-bold mb-2">Unbreakable Bonds</h3>
                <p className="max-w-md text-on-surface-variant font-medium">Train alongside individuals who demand excellence. Our culture is our strongest asset, providing accountability and momentum.</p>
              </div>
            </div>
            
            <div className="bg-surface-container border border-surface-variant rounded-md p-10 flex flex-col justify-center items-center text-center">
              <div className="w-16 h-16 rounded-full bg-primary-container/10 flex items-center justify-center text-primary mb-6 ring-4 ring-primary/5">
                <Heart className="w-8 h-8 fill-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-2">Data-Driven</h3>
              <p className="text-on-surface-variant font-medium mb-8">Every metric tracked. Every gain quantified for precision coaching.</p>
              <button className="font-bold text-primary hover:underline flex items-center gap-1 transition-all">
                Learn More <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Disciplines Section */}
      <section className="py-24 px-4 bg-surface">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-4">Specialized <span className="text-primary">Disciplines</span></h2>
              <p className="text-lg text-on-surface-variant max-w-xl font-medium">Master your modality. We offer targeted programming designed for specific, measurable outcomes.</p>
            </div>
            <Button variant="secondary" className="whitespace-nowrap">View All Programs</Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {disciplines.map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group bg-white rounded-md p-1.5 soft-shadow border border-surface-container-high transition-all duration-300 hover:border-primary/30"
              >
                <div className="aspect-video rounded-sm overflow-hidden relative mb-6">
                  <img src={item.image} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                  <div className="absolute top-4 left-4">
                    <Badge variant="default" className="bg-white/90 backdrop-blur-md">
                      <item.icon className="w-4 h-4 text-primary" />
                      {item.badge}
                    </Badge>
                  </div>
                </div>
                <div className="px-6 pb-8">
                  <h3 className="text-2xl font-bold mb-2">{item.title}</h3>
                  <p className="text-on-surface-variant font-medium mb-6 line-clamp-2">{item.description}</p>
                  <Button variant="outline" className="w-full" icon={ArrowRight}>Explore Routine</Button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
