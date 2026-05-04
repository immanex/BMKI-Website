import { motion } from "motion/react";

export default function About() {
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
          <h1 className="text-display-massive mb-8">Our <span className="text-[var(--color-bmki-gold)]">Story</span></h1>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-32 items-start">
          <div className="prose prose-invert prose-p:font-accent prose-p:text-lg prose-p:text-white/70">
            <p className="text-2xl font-display text-white mb-8 border-l-4 border-[var(--color-bmki-purple)] pl-6">
              Baseline Multimedia Konceptz & Innovations (BMKI) wasn’t just built as an agency—it was born as a movement.
            </p>
            <p>
              Operating from the heart of Ahmadu Bello University (ABU), Zaria, we recognized a massive gap: 
              incredible student talent going unnoticed due to a lack of premium platforms.
            </p>
            <p>
              We established BMKI to hunt the best creatives, polish their delivery, and put them on a stage 
              that demands attention. From our legendary Inter-Faculty Talent Hunts to high-production media coverage, 
              everything we touch is about elevating campus culture.
            </p>
            <div className="mt-12 grid grid-cols-2 gap-8">
              <div>
                <div className="text-5xl font-display text-[var(--color-bmki-gold)] mb-2">6+</div>
                <div className="meta-label">Seasons Delivered</div>
              </div>
              <div>
                <div className="text-5xl font-display text-[var(--color-bmki-gold)] mb-2">5K</div>
                <div className="meta-label">Community Size</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-[4/5] overflow-hidden bg-white/5 border border-white/10">
              <img 
                src="https://images.unsplash.com/photo-1540039155732-d674d6e3f0be?q=80&w=2669&auto=format&fit=crop" 
                alt="BMKI Team" 
                className="w-full h-full object-cover mix-blend-luminosity opacity-80"
              />
            </div>
            
            {/* Stamp decoration */}
            <div className="absolute -bottom-8 -left-8 w-32 h-32 rounded-full border-2 border-[var(--color-bmki-purple)] flex items-center justify-center bg-black animate-[spin_20s_linear_infinite]">
              <svg viewBox="0 0 100 100" className="w-full h-full">
                <path id="curve" fill="transparent" d="M 50, 50 m -35, 0 a 35,35 0 1,1 70,0 a 35,35 0 1,1 -70,0" />
                <text className="text-[11px] font-display uppercase tracking-widest fill-[var(--color-bmki-gold)]">
                  <textPath href="#curve">Baseline Multimedia Konceptz •</textPath>
                </text>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
