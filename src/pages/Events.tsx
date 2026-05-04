import { Ticket, MapPin, Calendar, ArrowRight } from "lucide-react";
import { motion } from "motion/react";

export default function Events() {
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
          <h1 className="text-display-massive">The <span className="text-[var(--color-bmki-purple-light)]">Stage</span></h1>
          <p className="font-accent text-2xl text-white/60 max-w-2xl mt-6">
            Where ABU's finest creatives make history. Experience the energy of BMKI live events.
          </p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Featured Event */}
          <div className="lg:col-span-2 group">
            <div className="relative aspect-video overflow-hidden border border-white/10 mb-6 bg-white/5">
              <img 
                src="https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=2670&auto=format&fit=crop"
                alt="Event Crowd"
                className="w-full h-full object-cover opacity-80 group-hover:scale-105 group-hover:opacity-100 transition-all duration-700 mix-blend-luminosity hover:mix-blend-normal"
              />
              <div className="absolute top-6 left-6 bg-[var(--color-bmki-gold)] text-black font-display px-4 py-2 text-xl uppercase">
                Up Next
              </div>
            </div>
            
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 border-b border-white/10 pb-8">
              <div>
                <h2 className="text-5xl font-display uppercase mb-4">Inter-Faculty Hunt S6: Grand Finale</h2>
                <div className="flex flex-wrap gap-4 text-white/60 font-accent select-none">
                  <span className="flex items-center gap-2"><Calendar size={18}/> Friday, 24th Nov</span>
                  <span className="flex items-center gap-2"><MapPin size={18}/> Blue Roof, ABU Zaria</span>
                </div>
              </div>
              <button className="flex items-center gap-2 bg-[var(--color-bmki-purple)] hover:bg-white hover:text-black transition-colors text-white px-8 py-4 font-bold uppercase tracking-wider shrink-0">
                <Ticket size={20} /> ₦1,000 Tickets
              </button>
            </div>
          </div>

          {/* Past Events / Archive List */}
          <div>
            <h3 className="meta-label mb-8 pb-4 border-b border-white/10">Archive</h3>
            <div className="space-y-8">
              {[5, 4, 3].map((season) => (
                <div key={season} className="group cursor-pointer">
                  <h4 className="text-2xl font-display text-white/50 group-hover:text-white transition-colors uppercase">
                    Season {season} Finale
                  </h4>
                  <div className="flex justify-between items-center mt-2 text-white/40 group-hover:text-[var(--color-bmki-gold)]">
                    <span className="text-sm font-accent">Blue Roof, Zaria</span>
                    <ArrowRight size={16} />
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-16 p-8 border border-white/10 bg-white/5 relative overflow-hidden">
              <div className="relative z-10">
                <h3 className="font-display text-2xl uppercase mb-2">Want to partner?</h3>
                <p className="text-white/60 text-sm mb-6">Sponsor our next big event and reach 5,000+ students.</p>
                <button className="border border-[var(--color-bmki-gold)] text-[var(--color-bmki-gold)] px-6 py-2 uppercase text-sm font-bold hover:bg-[var(--color-bmki-gold)] hover:text-black transition-colors w-full">
                  Media Kit
                </button>
              </div>
            </div>
          </div>
        </div>

      </div>
    </motion.div>
  );
}
