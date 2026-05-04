import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, MessageCircle } from "lucide-react";
import { cn } from "../lib/utils";

export default function Layout({ children }: { children: React.ReactNode }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showExitPopup, setShowExitPopup] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    
    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0 && !sessionStorage.getItem('bmki-exit-popup-shown')) {
        setShowExitPopup(true);
        sessionStorage.setItem('bmki-exit-popup-shown', 'true');
      }
    };
    document.addEventListener("mouseleave", handleMouseLeave);
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("mouseleave", handleMouseLeave);
    }
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Events", path: "/events" },
    { name: "Services", path: "/services" },
    // { name: "Gallery", path: "/gallery" },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Sticky Header */}
      <header
        className={cn(
          "fixed top-0 w-full z-50 transition-all duration-300",
          isScrolled
            ? "bg-[var(--color-bmki-dark)]/90 backdrop-blur-md border-b border-white/10 py-4"
            : "bg-transparent py-6"
        )}
      >
        <div className="container mx-auto px-6 max-w-7xl flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 group">
            {/* Minimalist Logo */}
            <div className="w-10 h-10 bg-[var(--color-bmki-gold)] flex items-center justify-center font-display text-black text-xl leading-none skew-x-[-10deg] group-hover:scale-105 transition-transform">
              B
            </div>
            <span className="font-display text-2xl tracking-wide uppercase mt-1">BMKI</span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={cn(
                  "meta-label hover:text-[var(--color-bmki-gold)] transition-colors",
                  location.pathname === link.path ? "text-[var(--color-bmki-gold)]" : "text-white/80"
                )}
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/portal"
              className="ml-4 bg-[var(--color-bmki-purple)] hover:bg-[var(--color-bmki-purple-light)] text-white px-6 py-2.5 font-bold uppercase tracking-wider text-sm skew-x-[-5deg] transition-all hover:scale-105"
            >
              <div className="skew-x-[5deg]">Audition Now</div>
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Nav */}
        <div
          className={cn(
            "fixed inset-0 bg-[var(--color-bmki-darker)] z-40 md:hidden flex flex-col pt-24 px-6 gap-8 transition-transform duration-500",
            mobileMenuOpen ? "translate-x-0" : "translate-x-full"
          )}
        >
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className="text-4xl font-display uppercase border-b border-white/10 pb-4"
            >
              {link.name}
            </Link>
          ))}
          <Link
            to="/portal"
            className="bg-[var(--color-bmki-gold)] text-black px-8 py-4 font-display text-2xl uppercase text-center mt-4"
          >
            Join the Movement
          </Link>
        </div>
      </header>

      <main className="flex-grow flex flex-col relative w-full pt-[88px] md:pt-[104px] -mt-[88px] md:-mt-[104px]">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-black py-16 border-t border-white/10">
        <div className="container mx-auto px-6 max-w-7xl grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="col-span-1 md:col-span-2">
            <h2 className="font-display text-4xl mb-4">BMKI</h2>
            <p className="text-white/60 max-w-md mb-8">
              We hunt the best creatives across Ahmadu Bello University. 
              Baseline Multimedia Konceptz & Innovations.
            </p>
            <div className="flex gap-4">
              <a href="https://instagram.com/official_bmki" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-black transition-colors">
                IG
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-black transition-colors">
                X
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-black transition-colors">
                YT
              </a>
            </div>
          </div>
          <div>
            <h4 className="meta-label mb-6 text-white/50">Quick Links</h4>
            <ul className="flex flex-col gap-4 text-white/80">
              <li><Link to="/events" className="hover:text-[var(--color-bmki-gold)] transition-colors">Inter-Faculty Hunt S6</Link></li>
              <li><Link to="/about" className="hover:text-[var(--color-bmki-gold)] transition-colors">Our Story</Link></li>
              <li><Link to="/services" className="hover:text-[var(--color-bmki-gold)] transition-colors">Brand Partnerships</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="meta-label mb-6 text-white/50">Contact</h4>
            <ul className="flex flex-col gap-4 text-white/80">
              <li>Blue Roof, ABU Zaria</li>
              <li>hello@bmki.com.ng</li>
              <li>+234 800 000 0000</li>
            </ul>
          </div>
        </div>
        <div className="container mx-auto px-6 max-w-7xl mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/40 text-sm">© {new Date().getFullYear()} BMKI. All rights reserved.</p>
          <div className="flex gap-6 text-sm text-white/40">
            <a href="#" className="hover:text-white">Privacy</a>
            <a href="#" className="hover:text-white">Terms</a>
          </div>
        </div>
      </footer>

      {/* Exit Intent Popup */}
      {showExitPopup && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fade-in-up">
          <div className="bg-[var(--color-bmki-dark)] border border-[var(--color-bmki-gold)] max-w-lg w-full relative overflow-hidden">
            <button 
              onClick={() => setShowExitPopup(false)}
              className="absolute top-4 right-4 text-white/50 hover:text-white z-10"
            >
              <X size={24} />
            </button>
            <div className="p-10 text-center relative z-10">
              <h3 className="font-display text-4xl mb-2 text-white">Leaving so soon?</h3>
              <p className="text-white/70 font-accent mb-8">
                Join the BMKI Creative Circle. Get exclusive updates on Inter-Faculty Hunt S6 and early bird ticket discounts.
              </p>
              <form onSubmit={(e) => { e.preventDefault(); setShowExitPopup(false); }} className="flex flex-col gap-4">
                <input 
                  type="email" 
                  placeholder="Enter your email" 
                  required
                  className="w-full bg-white/5 border border-white/20 p-4 text-white focus:outline-none focus:border-[var(--color-bmki-gold)] text-center transition-colors" 
                />
                <button type="submit" className="w-full bg-[var(--color-bmki-gold)] text-black py-4 font-bold uppercase tracking-wider hover:bg-white transition-colors">
                  Keep Me Updated
                </button>
              </form>
            </div>
            {/* Background design */}
            <div className="absolute -bottom-24 -right-24 text-[var(--color-bmki-purple)]/20 font-display text-9xl pointer-events-none select-none">
              BMKI
            </div>
          </div>
        </div>
      )}

      {/* WhatsApp Floating Button */}
      <a
        href="https://wa.me/2348000000000"
        target="_blank"
        rel="noreferrer"
        className="fixed bottom-6 right-6 w-14 h-14 bg-green-500 rounded-full flex items-center justify-center shadow-[0_0_20px_rgba(34,197,94,0.3)] hover:scale-110 transition-transform z-40"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle size={28} className="text-white" />
      </a>
    </div>
  );
}
