import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { ArrowRight, Ticket, Users, Star, Mic2 } from "lucide-react";
import { motion } from "motion/react";
import { cn } from "../lib/utils";

// Dummy image placeholders optimized for dark theme
const IMAGES = {
  hero: "https://images.unsplash.com/photo-1540039155732-d674d6e3f0be?q=80&w=2669&auto=format&fit=crop",
  event1: "https://images.unsplash.com/photo-1459749411175-04bf5292ceea?q=80&w=2670&auto=format&fit=crop",
  event2: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=2670&auto=format&fit=crop",
  talent: "https://images.unsplash.com/photo-1516280440502-614b8a2155c5?q=80&w=2669&auto=format&fit=crop",
};

export default function Home() {
  const [days, setDays] = useState(1);
  const [hours, setHours] = useState(23);
  
  // Simple fake countdown
  useEffect(() => {
    const timer = setInterval(() => {
      setHours(h => h > 0 ? h - 1 : 23);
    }, 3600000);
    return () => clearInterval(timer);
  }, []);

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="w-full flex flex-col pt-16 md:pt-0"
    >
      {/* HERO SECTION */}
      <section className="relative min-h-[90vh] flex flex-col justify-end pb-24 px-6 pt-32 overflow-hidden">
        {/* Background Image & Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src={IMAGES.hero} 
            alt="Crowd at BMKI Event" 
            className="w-full h-full object-cover opacity-60 mix-blend-luminosity"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-bmki-dark)] via-[var(--color-bmki-dark)]/80 to-transparent" />
          <div className="absolute inset-0 bg-[var(--color-bmki-purple)]/20 mix-blend-multiply" />
        </div>

        <div className="container mx-auto max-w-7xl relative z-10 flex flex-col md:flex-row items-end justify-between gap-12">
          {/* Main Title Group */}
          <div className="w-full md:w-2/3 title-wrapper skew-x-[-5deg]">
            <p className="meta-label text-[var(--color-bmki-gold)] mb-4 ml-2 animate-fade-in-up">
              Season 6 Registration Now Open
            </p>
            <h1 className="text-display-massive leading-[0.85] text-white">
              <span className="block drop-shadow-lg">WE HUNT</span>
              <span className="block text-transparent [-webkit-text-stroke:2px_white] hover:text-[var(--color-bmki-gold)] transition-colors duration-500">THE BEST</span>
              <span className="block drop-shadow-lg">CREATIVES.</span>
            </h1>
          </div>

          {/* Action Card / Countdown */}
          <div className="w-full md:w-1/3 bg-black/40 backdrop-blur-xl border border-white/10 p-8 transform md:translate-y-12 shrink-0">
            <h3 className="font-display text-2xl uppercase mb-2">Inter-Faculty Hunt S6</h3>
            <p className="text-white/60 text-sm mb-6">The biggest stage at ABU Zaria is waiting for you.</p>
            
            <div className="flex gap-4 mb-8">
              <div className="bg-white/5 p-4 flex-1 border border-white/5 text-center">
                <div className="text-4xl font-display">{days}</div>
                <div className="text-xs uppercase tracking-widest text-white/50">Days</div>
              </div>
              <div className="bg-white/5 p-4 flex-1 border border-white/5 text-center">
                <div className="text-4xl font-display">{hours}</div>
                <div className="text-xs uppercase tracking-widest text-white/50">Hours</div>
              </div>
            </div>

            <Link 
              to="/portal"
              className="w-full flex items-center justify-center gap-2 bg-[var(--color-bmki-gold)] text-black py-4 font-bold uppercase tracking-wider hover:bg-white transition-colors"
            >
              Audition Now <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* MARQUEE */}
      <div className="bg-[var(--color-bmki-gold)] text-black py-4 border-y border-black overflow-hidden flex">
        <div className="flex whitespace-nowrap animate-[marquee_20s_linear_infinite] font-display text-2xl uppercase tracking-wider">
          <span className="mx-6">• NOT JUST A SHOW</span>
          <span className="mx-6">• IT WAS A MOVEMENT</span>
          <span className="mx-6">• 1 DAY TO GO</span>
          <span className="mx-6">• SECURE YOUR SPOT</span>
          <span className="mx-6">• BLUE ROOF ABU ZARIA</span>
          <span className="mx-6">• BRING YOUR A-GAME</span>
          
          {/* Duplicate for seamless loop */}
          <span className="mx-6">• NOT JUST A SHOW</span>
          <span className="mx-6">• IT WAS A MOVEMENT</span>
          <span className="mx-6">• 1 DAY TO GO</span>
          <span className="mx-6">• SECURE YOUR SPOT</span>
          <span className="mx-6">• BLUE ROOF ABU ZARIA</span>
          <span className="mx-6">• BRING YOUR A-GAME</span>
        </div>
      </div>

      {/* PILLARS / VALUE PROP */}
      <section className="py-32 px-6">
        <div className="container mx-auto max-w-7xl">
          <div className="flex flex-col md:flex-row gap-8 justify-between items-end mb-20 border-b border-white/10 pb-8">
            <h2 className="text-display-large">The BMKI <br/><span className="text-[var(--color-bmki-purple-light)]">Platform</span></h2>
            <p className="max-w-md text-white/70 font-accent text-lg mb-4">
              We are a community-driven youth entertainment brand building the bridge between campus talent and mainstream success.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Mic2 size={40} className="mb-6 text-[var(--color-bmki-gold)]" />,
                title: "Talent Discovery",
                desc: "Platforming next-gen superstars through our flagship Inter-Faculty Hunts."
              },
              {
                icon: <Ticket size={40} className="mb-6 text-[var(--color-bmki-gold)]" />,
                title: "Campus Events",
                desc: "High-energy, sold-out entertainment experiences. No African Time."
              },
              {
                icon: <Star size={40} className="mb-6 text-[var(--color-bmki-gold)]" />,
                title: "Multimedia Prod",
                desc: "Premium visual content, event coverage, and creative direction."
              }
            ].map((pillar, i) => (
              <div key={i} className="group p-8 border border-white/10 hover:border-[var(--color-bmki-gold)]/50 bg-white/5 hover:bg-white/10 transition-all duration-300">
                {pillar.icon}
                <h3 className="text-2xl font-display uppercase mb-4">{pillar.title}</h3>
                <p className="text-white/60">{pillar.desc}</p>
                <div className="mt-8 w-12 h-1 bg-white/20 group-hover:w-full group-hover:bg-[var(--color-bmki-gold)] transition-all duration-500" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURED EVENT SECTION (Dark Luxury/Brutalist Split) */}
      <section className="bg-black border-y border-white/10">
        <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[80vh]">
          <div className="p-12 md:p-24 flex flex-col justify-center relative">
            <div className="absolute top-12 left-12 opacity-10">
              <span className="font-display text-[150px] leading-none">06</span>
            </div>
            <div className="relative z-10">
              <span className="inline-block px-4 py-1 bg-[var(--color-bmki-purple)] text-xs font-bold uppercase tracking-wider mb-6">Flagship Event</span>
              <h2 className="text-7xl font-display uppercase mb-6 leading-tight">Inter-Faculty <br/>Talent Hunt</h2>
              <p className="text-xl text-white/70 font-accent mb-12 max-w-lg">
                The grand finale you’ve been waiting for. Witness the best of Ahmadu Bello University battle for the crown.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6">
                <Link to="/events" className="flex items-center justify-center gap-3 bg-white text-black px-8 py-4 font-bold uppercase hover:bg-[var(--color-bmki-gold)] transition-colors">
                  <Ticket size={24} /> Get Tickets • ₦1,000
                </Link>
              </div>
              <div className="mt-12 flex items-center gap-4 text-sm font-bold uppercase tracking-wider text-white/50">
                <span>📍 Blue Roof, ABU</span>
                <span className="w-1.5 h-1.5 bg-white/50 rounded-full" />
                <span>Starts 4PM</span>
              </div>
            </div>
          </div>
          
          <div className="relative hidden lg:block overflow-hidden group">
            <img 
              src={IMAGES.event2} 
              alt="Performer on stage" 
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-transparent opacity-60" />
            
            {/* Trust badge */}
            <div className="absolute bottom-12 right-12 bg-white/10 backdrop-blur-md p-6 border border-white/20">
              <div className="flex items-center gap-4">
                <Users size={32} className="text-[var(--color-bmki-gold)]" />
                <div>
                  <div className="font-display text-4xl">1.5K+</div>
                  <div className="text-xs uppercase tracking-widest text-white/70">Expected Attendees</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* INSTAGRAM GALLERY / SOCIAL PROOF */}
      <section className="py-24 px-6 border-b border-white/10">
        <div className="container mx-auto max-w-7xl">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
            <div>
              <h2 className="text-display-large">@OFFICIAL_BMKI</h2>
              <p className="font-accent text-white/50 text-xl">The movement live on Instagram.</p>
            </div>
            <a href="https://instagram.com/official_bmki" target="_blank" rel="noreferrer" className="flex items-center gap-2 border border-white/20 px-6 py-3 font-bold uppercase text-sm hover:border-[var(--color-bmki-gold)] hover:text-[var(--color-bmki-gold)] transition-colors">
              Follow Us <ArrowRight size={16} />
            </a>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?q=80&w=1000&auto=format&fit=crop",
              "https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?q=80&w=1000&auto=format&fit=crop",
              "https://images.unsplash.com/photo-1520625907421-4ea61fbac458?q=80&w=1000&auto=format&fit=crop",
              "https://images.unsplash.com/photo-1470229722913-7c090be5f524?q=80&w=1000&auto=format&fit=crop"
            ].map((img, i) => (
              <a key={i} href="https://instagram.com/official_bmki" target="_blank" rel="noreferrer" className="relative aspect-square overflow-hidden group border border-white/10 bg-white/5">
                <img src={img} alt={`BMKI Instagram ${i}`} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 scale-100 group-hover:scale-110 opacity-70 group-hover:opacity-100" />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-colors duration-500" />
              </a>
            ))}
          </div>
        </div>
      </section>

    </motion.div>
  );
}
