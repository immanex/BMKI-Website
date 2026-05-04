import React, { useState } from "react";
import { Upload, CheckCircle2 } from "lucide-react";
import { motion } from "motion/react";

export default function TalentPortal() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="w-full pt-12 pb-32"
    >
      <div className="container mx-auto px-6 max-w-5xl">
        <header className="mb-16 text-center">
          <h1 className="text-display-large mb-4">Talent <span className="text-[var(--color-bmki-purple-light)]">Portal</span></h1>
          <p className="font-accent text-xl text-white/60">
            Season 6 Auditions are currently open. Submit your portfolio. Space is limited.
          </p>
        </header>

        <div className="bg-black/40 border border-white/10 p-8 md:p-12">
          {submitted ? (
            <div className="text-center py-20 animate-fade-in-up">
              <CheckCircle2 size={80} className="text-green-500 mx-auto mb-6" />
              <h2 className="text-4xl font-display uppercase mb-4">Application Received</h2>
              <p className="text-white/60 font-accent max-w-md mx-auto mb-8">
                Your talent submission for Inter-Faculty Hunt S6 has been securely sent. 
                Our scout team will review your portfolio and reach out via WhatsApp.
              </p>
              <button 
                onClick={() => setSubmitted(false)}
                className="text-[var(--color-bmki-gold)] underline meta-label"
              >
                Submit another talent
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-8 animate-fade-in-up">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <label className="meta-label text-white/60 block mb-2">Full Name</label>
                  <input required type="text" className="w-full bg-white/5 border border-white/20 p-4 text-white focus:outline-none focus:border-[var(--color-bmki-gold)] transition-colors" placeholder="e.g. John Doe" />
                </div>
                <div>
                  <label className="meta-label text-white/60 block mb-2">Stage Name (Optional)</label>
                  <input type="text" className="w-full bg-white/5 border border-white/20 p-4 text-white focus:outline-none focus:border-[var(--color-bmki-gold)] transition-colors" placeholder="e.g. JDoe" />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <label className="meta-label text-white/60 block mb-2">Faculty / Department</label>
                  <select required defaultValue="" className="w-full bg-white/5 border border-white/20 p-4 text-white focus:outline-none focus:border-[var(--color-bmki-gold)] transition-colors appearance-none">
                    <option value="" disabled>Select Faculty</option>
                    <option value="arts">Faculty of Arts</option>
                    <option value="science">Faculty of Science</option>
                    <option value="engineering">Faculty of Engineering</option>
                    <option value="social_science">Faculty of Social Sciences</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div>
                  <label className="meta-label text-white/60 block mb-2">WhatsApp Number</label>
                  <input required type="tel" className="w-full bg-white/5 border border-white/20 p-4 text-white focus:outline-none focus:border-[var(--color-bmki-gold)] transition-colors" placeholder="+234..." />
                </div>
              </div>

              <div>
                <label className="meta-label text-white/60 block mb-2">Talent Category</label>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {['Music', 'Dance', 'Comedy', 'Spoken Word', 'Magic/Variety', 'Fashion'].map((cat) => (
                    <label key={cat} className="flex items-center gap-3 p-4 border border-white/10 bg-white/5 cursor-pointer hover:border-[var(--color-bmki-gold)] transition-colors">
                      <input type="radio" name="category" value={cat} className="accent-[var(--color-bmki-gold)] w-4 h-4" required />
                      <span className="font-accent text-sm md:text-base">{cat}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div>
                <label className="meta-label text-white/60 block mb-2">Portfolio / Video Link</label>
                <input required type="url" className="w-full bg-white/5 border border-white/20 p-4 text-white focus:outline-none focus:border-[var(--color-bmki-gold)] transition-colors" placeholder="Instagram/YouTube Link to your performance" />
              </div>

              <div className="border border-dashed border-white/20 p-8 text-center bg-white/5 hover:bg-white/10 transition-colors cursor-pointer group">
                <Upload size={32} className="mx-auto mb-4 text-white/40 group-hover:text-[var(--color-bmki-gold)] transition-colors" />
                <p className="font-accent text-white/80 mb-2">Upload a 1-minute audition video directly</p>
                <p className="text-sm text-white/40">MP4 or MOV form, max 50MB</p>
                <input type="file" accept="video/mp4,video/quicktime" className="hidden" />
              </div>

              <button type="submit" className="w-full bg-[var(--color-bmki-gold)] text-black py-5 font-bold uppercase tracking-wider text-xl hover:bg-white transition-colors">
                Submit Audition
              </button>
            </form>
          )}
        </div>
      </div>
    </motion.div>
  );
}
