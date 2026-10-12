"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { 
  ShoppingBag, ArrowRight, Calendar, MapPin, PhoneCall, 
  Star, Scissors, Sparkles, X, Heart, Gem
} from "lucide-react";

// --- Elite Animation Variants (Strictly Typed for Production Build) ---
const FADE_UP: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100, damping: 20 } },
};

const STAGGER: Variants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

export default function JujutureBoutique() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  // Lock body scroll when the cinematic drawer is open
  useEffect(() => {
    if (isBookingOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => { document.body.style.overflow = "unset"; };
  }, [isBookingOpen]);

  return (
    <div className="relative w-full overflow-x-hidden bg-[#fdfcfa] text-stone-900 font-sans selection:bg-amber-200 selection:text-amber-900">
      
      {/* --- Sticky Glassmorphic Navigation --- */}
      <header className="fixed top-0 z-50 w-full border-b border-stone-200/60 bg-[#fdfcfa]/80 backdrop-blur-2xl">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex h-24 items-center justify-between">
            
            <Link href="/" className="flex items-center gap-4 group">
              <div className="flex flex-col items-start justify-center">
                <span className="text-2xl font-serif font-black tracking-widest text-stone-900 leading-none group-hover:text-rose-900 transition-colors uppercase">
                  Jujuture
                </span>
                <span className="text-[10px] font-bold text-amber-700 tracking-[0.3em] uppercase mt-2">
                  The Marwaris
                </span>
              </div>
            </Link>
            
            <nav className="hidden lg:flex items-center gap-10 font-bold text-sm text-stone-600 uppercase tracking-widest">
              <Link href="#atelier" className="relative hover:text-rose-900 transition-colors after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-0 after:bg-rose-900 after:transition-all hover:after:w-full">The Atelier</Link>
              <Link href="#collections" className="relative hover:text-rose-900 transition-colors after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-0 after:bg-rose-900 after:transition-all hover:after:w-full">Collections</Link>
              <Link href="#heritage" className="relative hover:text-rose-900 transition-colors after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-0 after:bg-rose-900 after:transition-all hover:after:w-full">Our Heritage</Link>
            </nav>

            <div className="flex items-center gap-4 md:gap-6">
              <a 
                href="tel:09810248442" 
                className="hidden md:flex items-center gap-2 text-sm font-bold text-stone-700 hover:text-rose-900 transition-colors"
              >
                <PhoneCall className="h-4 w-4" />
                09810248442
              </a>
              
              <motion.button 
                whileHover={{ scale: 1.05, boxShadow: "0px 10px 20px rgba(136, 19, 55, 0.15)" }} 
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsBookingOpen(true)}
                className="inline-flex h-12 items-center justify-center rounded-none bg-rose-900 px-8 text-xs tracking-widest uppercase font-bold text-white shadow-xl hover:bg-rose-950 transition-all"
              >
                Book a Fitting
              </motion.button>
            </div>
          </div>
        </div>
      </header>

      <main className="pt-24">
        
        {/* --- Hero Section --- */}
        <section className="relative overflow-hidden pt-16 pb-24 lg:pt-28 lg:pb-32 bg-[#fdfcfa]">
          {/* Subtle warm glow */}
          <div className="absolute top-0 right-0 -translate-y-12 translate-x-1/3 w-[800px] h-[800px] bg-amber-50 rounded-full blur-[120px] -z-10" />

          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              
              <motion.div initial="hidden" animate="show" variants={STAGGER} className="max-w-2xl z-10">
                <motion.div variants={FADE_UP} className="inline-flex items-center gap-2 border border-amber-200 bg-amber-50/50 px-4 py-2 text-xs uppercase tracking-widest font-bold text-amber-800 mb-8 shadow-sm">
                  <Sparkles className="w-3 h-3 text-amber-600" />
                  Hauz Khas Village Boutique
                </motion.div>
                
                <motion.h1 variants={FADE_UP} className="text-6xl lg:text-7xl font-serif font-black tracking-tight text-stone-900 mb-6 leading-[1.05]">
                  Elegance <br />
                  <span className="italic font-light text-rose-900">Woven in Tradition.</span>
                </motion.h1>
                
                <motion.p variants={FADE_UP} className="text-lg text-stone-600 mb-10 leading-relaxed font-medium max-w-xl">
                  Discover bespoke ethnic wear that marries Marwari heritage with contemporary silhouettes. From intricately hand-embroidered lehengas to artisanal couture, every piece tells a story of unmatched craftsmanship.
                </motion.p>
                
                <motion.div variants={FADE_UP} className="flex flex-col sm:flex-row gap-4">
                  <motion.button 
                    whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}
                    onClick={() => setIsBookingOpen(true)}
                    className="inline-flex h-14 items-center justify-center gap-3 bg-stone-900 px-8 text-xs tracking-widest uppercase font-bold text-white shadow-xl hover:bg-rose-900 transition-all w-full sm:w-auto"
                  >
                    <Scissors className="h-4 w-4" />
                    Book Bridal Consultation
                  </motion.button>
                  <motion.a 
                    whileHover={{ scale: 1.02, backgroundColor: "#f5f5f4" }} whileTap={{ scale: 0.98 }}
                    href="#collections" 
                    className="inline-flex h-14 items-center justify-center gap-2 border-2 border-stone-200 px-8 text-xs tracking-widest uppercase font-bold text-stone-900 transition-all w-full sm:w-auto"
                  >
                    Explore Collections
                  </motion.a>
                </motion.div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1, type: "spring" }} 
                className="relative hidden lg:block h-[650px] w-full"
              >
                {/* High-fashion portrait frame */}
                <div className="absolute inset-0 overflow-hidden shadow-2xl">
                  <img 
                    src="https://images.unsplash.com/photo-1610030469983-98e550d615ef?auto=format&fit=crop&q=80&w=1200" 
                    alt="Indian Ethnic Couture" 
                    className="absolute inset-0 w-full h-full object-cover object-top hover:scale-105 transition-transform duration-[1.5s]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-stone-900/60 via-transparent to-transparent" />
                  
                  {/* Floating Atelier Badge */}
                  <motion.div 
                    initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.8 }}
                    className="absolute bottom-8 left-8 bg-white/90 backdrop-blur-md px-6 py-4 flex items-center gap-4 shadow-2xl"
                  >
                    <div className="h-10 w-10 bg-amber-100 flex items-center justify-center rounded-full">
                      <Gem className="w-5 h-5 text-amber-700" />
                    </div>
                    <div>
                      <p className="text-[10px] uppercase tracking-widest font-bold text-stone-500 mb-1">Authentic</p>
                      <p className="text-lg font-serif font-black text-stone-900">Handcrafted Couture</p>
                    </div>
                  </motion.div>
                </div>
                {/* Decorative border offset */}
                <div className="absolute -inset-4 border border-amber-200/60 -z-10" />
              </motion.div>

            </div>
          </div>
        </section>

        {/* --- The Atelier (Why Us) --- */}
        <motion.section 
          id="atelier"
          initial="hidden" whileInView="show" viewport={{ once: true, margin: "-100px" }} variants={STAGGER}
          className="py-24 bg-stone-100 scroll-mt-24 border-y border-stone-200/60"
        >
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-16 md:flex md:items-end md:justify-between">
              <motion.div variants={FADE_UP} className="max-w-2xl">
                <h2 className="text-[10px] font-black text-amber-700 uppercase tracking-[0.3em] mb-4">The Atelier</h2>
                <h3 className="text-4xl md:text-5xl font-serif font-black tracking-tight text-stone-900">Where Craft Meets Art.</h3>
              </motion.div>
              <motion.p variants={FADE_UP} className="mt-6 md:mt-0 text-stone-600 font-medium max-w-sm md:text-right">
                Every garment at Jujuture is meticulously designed, utilizing generations of Marwari textile mastery.
              </motion.p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { title: "Bespoke Tailoring", icon: Scissors, desc: "Made-to-measure garments fitted flawlessly to your unique silhouette by master tailors." },
                { title: "Heirloom Fabrics", icon: Heart, desc: "We source the finest silks, brocades, and handlooms directly from artisanal weavers across India." },
                { title: "Intricate Handwork", icon: Sparkles, desc: "Authentic Zardozi, Gota Patti, and sequence embroidery crafted over hundreds of hours." }
              ].map((feature, i) => (
                <motion.div 
                  key={i} variants={FADE_UP} 
                  whileHover={{ y: -8 }}
                  className="bg-[#fdfcfa] border border-stone-200 p-10 hover:shadow-2xl hover:border-rose-900/30 transition-all duration-500 group"
                >
                  <div className="w-14 h-14 bg-rose-50 flex items-center justify-center mb-8 group-hover:bg-rose-900 transition-colors duration-500">
                    <feature.icon className="w-6 h-6 text-rose-900 group-hover:text-white transition-colors" />
                  </div>
                  <h4 className="text-xl font-serif font-bold text-stone-900 mb-4">{feature.title}</h4>
                  <p className="text-stone-600 leading-relaxed font-medium">{feature.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* --- Collections Grid --- */}
        <motion.section 
          id="collections" 
          initial="hidden" whileInView="show" viewport={{ once: true, margin: "-100px" }} variants={STAGGER}
          className="py-24 bg-[#fdfcfa] scroll-mt-24"
        >
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div variants={FADE_UP} className="text-center mb-20 max-w-2xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-serif font-black tracking-tight text-stone-900 mb-6">Curated Collections</h2>
              <p className="text-lg text-stone-600 font-medium">From intimate festive gatherings to grand bridal trousseaus.</p>
            </motion.div>

            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {[
                { title: "Bridal Couture", desc: "Regal Lehengas & Heavy Ensembles", img: "https://images.unsplash.com/photo-1595777457583-95e059f58196?auto=format&fit=crop&q=80&w=800" },
                { title: "Classic Sarees", desc: "Handwoven Silks & Chiffons", img: "https://images.unsplash.com/photo-1610189013531-18e38d72120e?auto=format&fit=crop&q=80&w=800" },
                { title: "Festive Fusion", desc: "Contemporary Indo-Western Cuts", img: "https://images.unsplash.com/photo-1583391732953-62d296ce8eb1?auto=format&fit=crop&q=80&w=800" },
              ].map((collection, index) => (
                <motion.div 
                  key={index} variants={FADE_UP}
                  whileHover={{ y: -10 }}
                  className="group cursor-pointer"
                  onClick={() => setIsBookingOpen(true)}
                >
                  <div className="relative h-[450px] overflow-hidden mb-6 bg-stone-100">
                    <img 
                      src={collection.img} 
                      alt={collection.title}
                      className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
                    />
                    <div className="absolute inset-0 bg-stone-900/10 group-hover:bg-transparent transition-colors duration-500" />
                  </div>
                  <h3 className="text-2xl font-serif font-bold text-stone-900 mb-2 group-hover:text-rose-900 transition-colors">{collection.title}</h3>
                  <p className="text-stone-500 font-medium text-sm tracking-wide uppercase">{collection.desc}</p>
                </motion.div>
              ))}
            </div>
            
            <motion.div variants={FADE_UP} className="mt-16 text-center">
              <button onClick={() => setIsBookingOpen(true)} className="inline-flex items-center gap-3 text-xs tracking-widest uppercase font-bold text-rose-900 hover:text-rose-700 transition-colors">
                View Full Lookbook In-Store <ArrowRight className="w-4 h-4" />
              </button>
            </motion.div>
          </div>
        </motion.section>
      </main>

      {/* --- Elegant Footer --- */}
      <footer className="bg-stone-950 text-stone-400 pt-24 pb-10 border-t-4 border-rose-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-16 lg:grid-cols-12 mb-20">
            
            <div className="lg:col-span-5">
              <div className="flex flex-col items-start justify-center mb-8">
                <span className="text-3xl font-serif font-black tracking-widest text-white leading-none uppercase">
                  Jujuture
                </span>
                <span className="text-[10px] font-bold text-amber-600 tracking-[0.4em] uppercase mt-2">
                  The Marwaris
                </span>
              </div>
              <p className="mb-10 font-medium leading-relaxed max-w-sm text-stone-500">
                Preserving the regal artistry of Marwari craftsmanship. Visit our boutique in the historic heart of Hauz Khas for a truly bespoke fashion experience.
              </p>
            </div>
            
            <div className="lg:col-span-3">
              <h4 className="font-bold text-white text-xs tracking-widest uppercase mb-8">Boutique Hours</h4>
              <ul className="space-y-4 font-medium text-sm text-stone-500">
                <li className="flex justify-between border-b border-stone-800 pb-3"><span>Monday - Saturday</span> <span className="text-stone-300">11:00 AM - 8:00 PM</span></li>
                <li className="flex justify-between border-b border-stone-800 pb-3"><span>Sunday</span> <span className="text-amber-600">By Appointment</span></li>
              </ul>
            </div>

            <div className="lg:col-span-4">
              <h4 className="font-bold text-white text-xs tracking-widest uppercase mb-8">Visit & Contact</h4>
              <ul className="space-y-6 font-medium text-sm">
                <li>
                  <a href="https://maps.app.goo.gl/mFvQZwnbHKsrdiUeA" target="_blank" rel="noreferrer" className="flex items-start gap-4 hover:text-white transition-colors group">
                    <div className="bg-stone-900 p-3 group-hover:bg-rose-900 transition-colors"><MapPin className="w-4 h-4 text-white" /></div> 
                    <span className="leading-relaxed">
                      Ground Floor, 15 & 17 Hauz Khas Village<br/>
                      New Delhi, Delhi 110016
                    </span>
                  </a>
                </li>
                <li>
                  <a href="tel:09810248442" className="flex items-center gap-4 hover:text-white transition-colors group">
                    <div className="bg-stone-900 p-3 group-hover:bg-rose-900 transition-colors"><PhoneCall className="w-4 h-4 text-white" /></div> 
                    09810248442
                  </a>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-stone-900 pt-10 flex flex-col md:flex-row items-center justify-between gap-6 text-[10px] font-bold uppercase tracking-[0.2em]">
            <p>© {new Date().getFullYear()} Jujuture The Marwaris. All Rights Reserved.</p>
            <a href="https://tapecutstudios.com" target="_blank" rel="noreferrer" className="hover:text-white transition-colors flex items-center gap-2">
              <Sparkles className="w-3 h-3 text-rose-700" /> Engineered by Tapecut Studios
            </a>
          </div>
        </div>
      </footer>

      {/* --- Cinematic Boutique Booking Drawer --- */}
      <AnimatePresence>
        {isBookingOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              onClick={() => setIsBookingOpen(false)}
              className="fixed inset-0 z-[100] bg-stone-900/60 backdrop-blur-md"
            />
            
            <motion.div
              initial={{ x: "100%" }} 
              animate={{ x: 0, transition: { type: "spring", damping: 25, stiffness: 200 } }} 
              exit={{ x: "100%", transition: { type: "spring", damping: 25, stiffness: 200 } }}
              className="fixed top-0 right-0 bottom-0 z-[101] w-full max-w-md bg-[#fdfcfa] shadow-2xl border-l border-stone-200 flex flex-col"
            >
              <div className="p-8 flex-1 flex flex-col overflow-y-auto">
                
                <div className="flex items-start justify-between mb-12">
                  <div>
                    <h3 className="text-3xl font-serif font-black text-stone-900 leading-none mb-2">Book a Fitting</h3>
                    <p className="text-sm font-medium text-stone-500">Reserve your exclusive 1-on-1 styling session.</p>
                  </div>
                  <button 
                    onClick={() => setIsBookingOpen(false)}
                    className="p-2 bg-stone-100 hover:bg-stone-200 rounded-full transition-colors"
                  >
                    <X className="w-5 h-5 text-stone-600" />
                  </button>
                </div>

                <form className="flex-1 flex flex-col gap-8" onSubmit={(e) => e.preventDefault()}>
                  
                  <div className="space-y-3">
                    <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-stone-500">Full Name</label>
                    <input 
                      type="text" placeholder="Jane Doe" 
                      className="w-full h-12 border-b-2 border-stone-200 bg-transparent text-stone-900 focus:border-rose-900 transition-colors font-medium outline-none placeholder:text-stone-300"
                    />
                  </div>
                  
                  <div className="space-y-3">
                    <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-stone-500">Phone Number</label>
                    <input 
                      type="tel" placeholder="+91 98765 43210" 
                      className="w-full h-12 border-b-2 border-stone-200 bg-transparent text-stone-900 focus:border-rose-900 transition-colors font-medium outline-none placeholder:text-stone-300"
                    />
                  </div>

                  <div className="space-y-3">
                    <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-stone-500">Interested In</label>
                    <select className="w-full h-12 border-b-2 border-stone-200 bg-transparent text-stone-900 focus:border-rose-900 transition-colors font-medium outline-none cursor-pointer">
                      <option>Bridal Lehenga Customization</option>
                      <option>Festive Wear & Suits</option>
                      <option>Classic Handloom Sarees</option>
                      <option>Gifting & Trousseau</option>
                    </select>
                  </div>

                  <div className="space-y-3">
                    <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-stone-500">Preferred Date</label>
                    <input 
                      type="date" 
                      className="w-full h-12 border-b-2 border-stone-200 bg-transparent text-stone-900 focus:border-rose-900 transition-colors font-medium outline-none cursor-pointer"
                    />
                  </div>
                  
                  <div className="mt-auto pt-10">
                    <motion.button 
                      whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}
                      className="w-full h-14 bg-rose-900 hover:bg-rose-950 text-white text-xs uppercase tracking-[0.2em] font-bold shadow-xl shadow-rose-900/20 transition-all flex items-center justify-center gap-3"
                    >
                      Confirm Request <ArrowRight className="w-4 h-4" />
                    </motion.button>
                  </div>

                </form>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

    </div>
  );
}