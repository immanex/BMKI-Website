import { Mic2, Camera, Palette, Handshake } from "lucide-react";
import { motion } from "motion/react";

export default function Services() {
  const services = [
    {
      id: "01",
      title: "Talent Development",
      icon: <Mic2 size={32} />,
      desc: "Artist grooming, stage presence coaching, and platforming via our Inter-Faculty Hunts."
    },
    {
      id: "02",
      title: "Multimedia Coverage",
      icon: <Camera size={32} />,
      desc: "Premium event videography, photography, and live streaming for campus and corporate events."
    },
    {
      id: "03",
      title: "Visual Branding",
      icon: <Palette size={32} />,
      desc: "Creative direction, promotional graphics, and brand identity design."
    },
    {
      id: "04",
      title: "Brand Partnerships",
      icon: <Handshake size={32} />,
      desc: "Strategic campus marketing, brand activations, and sponsorships reaching thousands of Nigerian students."
    }
  ];

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="w-full pt-12 pb-32"
    >
      <div className="container mx-auto px-6 max-w-7xl">
        <header className="mb-20">
          <h1 className="text-display-massive mb-8">What We <span className="text-[var(--color-bmki-purple-light)]">Build</span></h1>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-0 border border-white/10">
          {services.map((svc, idx) => (
            <div 
              key={svc.id} 
              className={`p-12 hover:bg-white/5 transition-colors border-white/10 ${
                idx % 2 === 0 ? "md:border-r" : ""
              } ${idx < 2 ? "border-b" : ""}`}
            >
              <div className="flex justify-between items-start mb-12">
                <div className="text-[var(--color-bmki-gold)] p-4 bg-white/5 rounded-full inline-block">
                  {svc.icon}
                </div>
                <div className="text-4xl font-display text-white/20 select-none">{svc.id}</div>
              </div>
              <h2 className="text-3xl font-display uppercase mb-4">{svc.title}</h2>
              <p className="text-white/60 font-accent leading-relaxed">
                {svc.desc}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-24 p-12 bg-[var(--color-bmki-purple)] text-center">
          <h2 className="text-4xl font-display uppercase mb-4">Need our expertise?</h2>
          <p className="text-white/80 font-accent mb-8 max-w-lg mx-auto">
            Whether you're looking to book a talent, cover an event, or market your brand to ABU students, we've got you.
          </p>
          <a href="mailto:hello@bmki.com.ng" className="inline-block bg-white text-black px-8 py-4 font-bold uppercase tracking-wider hover:bg-[var(--color-bmki-gold)] transition-colors">
            Contact Us Today
          </a>
        </div>
      </div>
    </motion.div>
  );
}
