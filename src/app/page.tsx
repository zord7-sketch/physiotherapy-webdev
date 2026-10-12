"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { 
  Activity, ArrowRight, Calendar, MapPin, PhoneCall, ShieldCheck, 
  UserCheck, Star, Brain, Bone, Flame, Clock, Zap, Target, Sparkles, X
} from "lucide-react";

// --- Elite Animation Variants (Strictly Typed to Fix Vercel Build) ---
const FADE_UP: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100, damping: 20 } },
};

const STAGGER: Variants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

export default function PhysiotherapyLanding() {
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
    <div className="relative w-full overflow-x-hidden bg-slate-50 text-slate-900">
      
      {/* --- Sticky Glassmorphic Navigation --- */}
      <header className="fixed top-0 z-50 w-full border-b border-slate-200/60 bg-white/80 backdrop-blur-2xl">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex h-20 items-center justify-between">
            
            <Link href="/" className="flex items-center gap-3 group">
              <motion.div 
                whileHover={{ rotate: 10, scale: 1.05 }}
                className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-600 shadow-lg shadow-blue-600/20 group-hover:bg-blue-700 transition-colors"
              >
                <Activity className="h-6 w-6 text-white" />
              </motion.div>
              <div className="flex flex-col">
                <span className="text-xl font-bold tracking-tight text-slate-900 leading-none group-hover:text-blue-700 transition-colors">
                  Dr. Ankita Chandna
                </span>
                <span className="text-[11px] font-black text-blue-600 tracking-[0.2em] uppercase mt-1">
                  Health Care
                </span>
              </div>
            </Link>
            
            <nav className="hidden lg:flex items-center gap-10 font-bold text-sm text-slate-600">
              <Link href="#expertise" className="relative hover:text-blue-600 transition-colors after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-0 after:bg-blue-600 after:transition-all hover:after:w-full">Clinical Edge</Link>
              <Link href="#treatments" className="relative hover:text-blue-600 transition-colors after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-0 after:bg-blue-600 after:transition-all hover:after:w-full">Treatments</Link>
              <Link href="#reviews" className="relative hover:text-blue-600 transition-colors after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-0 after:bg-blue-600 after:transition-all hover:after:w-full">Patient Stories</Link>
            </nav>

            <div className="flex items-center gap-4 md:gap-6">
              <a 
                href="tel:+919756465781" 
                className="hidden md:flex items-center gap-2 text-sm font-bold text-slate-700 hover:text-blue-600 transition-colors"
              >
                <PhoneCall className="h-4 w-4" />
                +91 97564 65781
              </a>
              
              <motion.button 
                whileHover={{ scale: 1.05, boxShadow: "0px 10px 20px rgba(37, 99, 235, 0.2)" }} 
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsBookingOpen(true)}
                className="inline-flex h-11 items-center justify-center rounded-xl bg-blue-600 px-6 text-sm font-bold text-white shadow-xl hover:bg-blue-700 transition-all"
              >
                Book Visit
              </motion.button>
            </div>
          </div>
        </div>
      </header>

      <main className="pt-20">
        
        {/* --- Hero Section --- */}
        <section className="relative overflow-hidden pt-16 pb-24 lg:pt-28 lg:pb-32 bg-white">
          <div className="absolute top-0 right-0 -translate-y-12 translate-x-1/3 w-[800px] h-[800px] bg-blue-50 rounded-full blur-[120px] -z-10" />

          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              
              <motion.div initial="hidden" animate="show" variants={STAGGER} className="max-w-2xl z-10">
                <motion.div variants={FADE_UP} className="inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-800 mb-8 shadow-sm">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-600"></span>
                  </span>
                  Accepting New Patients in Haldwani
                </motion.div>
                
                <motion.h1 variants={FADE_UP} className="text-5xl md:text-6xl lg:text-7xl font-black tracking-tight text-slate-900 mb-6 leading-[1.1]">
                  Restore Your <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
                    Natural Movement.
                  </span>
                </motion.h1>
                
                <motion.p variants={FADE_UP} className="text-lg md:text-xl text-slate-600 mb-10 leading-relaxed font-medium max-w-xl">
                  Led by Dr. Ankita Chandna. Over 19 years of clinical expertise treating the root cause of musculoskeletal pain, sports injuries, and neurological conditions.
                </motion.p>
                
                <motion.div variants={FADE_UP} className="flex flex-col sm:flex-row gap-4">
                  <motion.button 
                    whileHover={{ scale: 1.03, boxShadow: "0px 15px 30px rgba(37, 99, 235, 0.25)" }} 
                    whileTap={{ scale: 0.97 }}
                    onClick={() => setIsBookingOpen(true)}
                    className="inline-flex h-14 items-center justify-center gap-2 rounded-xl bg-blue-600 px-8 text-base font-bold text-white shadow-xl hover:bg-blue-700 transition-all w-full sm:w-auto"
                  >
                    <Calendar className="h-5 w-5" />
                    Schedule Consultation
                  </motion.button>
                  <motion.a 
                    whileHover={{ scale: 1.03, backgroundColor: "#f8fafc" }} 
                    whileTap={{ scale: 0.97 }}
                    href="tel:+919756465781" 
                    className="inline-flex h-14 items-center justify-center gap-2 rounded-xl bg-white border-2 border-slate-200 px-8 text-base font-bold text-slate-900 transition-all w-full sm:w-auto"
                  >
                    <PhoneCall className="h-5 w-5 text-blue-600" />
                    +91 97564 65781
                  </motion.a>
                </motion.div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }} 
                animate={{ opacity: 1, scale: 1 }} 
                transition={{ duration: 0.8, type: "spring" }} 
                className="relative hidden lg:block h-[600px] w-full"
              >
                <div className="absolute inset-0 rounded-[2.5rem] overflow-hidden border-8 border-slate-50 shadow-2xl group">
                  <img 
                    src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=1000" 
                    alt="Clinical Physiotherapy" 
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent" />
                  
                  <motion.div 
                    initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.6 }}
                    className="absolute bottom-8 left-8 right-8 bg-white/20 backdrop-blur-xl border border-white/30 rounded-2xl p-6 flex items-center justify-between text-white shadow-2xl"
                  >
                    <div>
                      <p className="text-sm font-medium text-blue-100 mb-1">Clinical Success</p>
                      <p className="text-3xl font-black">15,000+</p>
                    </div>
                    <div className="h-12 w-[2px] bg-white/20" />
                    <div>
                      <p className="text-sm font-medium text-blue-100 mb-1">Patient Rating</p>
                      <div className="flex items-center gap-2">
                        <p className="text-3xl font-black">4.8</p>
                        <Star className="w-6 h-6 fill-yellow-400 text-yellow-400" />
                      </div>
                    </div>
                  </motion.div>
                </div>
              </motion.div>

            </div>
          </div>
        </section>

        {/* --- The Clinical Edge --- */}
        <motion.section 
          id="expertise"
          initial="hidden" whileInView="show" viewport={{ once: true, margin: "-100px" }} variants={STAGGER}
          className="py-24 bg-slate-50 scroll-mt-20"
        >
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-16 md:flex md:items-end md:justify-between">
              <motion.div variants={FADE_UP} className="max-w-2xl">
                <h2 className="text-sm font-black text-blue-600 uppercase tracking-widest mb-3">Why Choose Us</h2>
                <h3 className="text-3xl md:text-4xl font-extrabold tracking-tight text-slate-900">The Clinical Edge</h3>
              </motion.div>
              <motion.p variants={FADE_UP} className="mt-4 md:mt-0 text-slate-600 font-medium max-w-sm md:text-right">
                We combine advanced modalities with deep biomechanical expertise to accelerate your recovery.
              </motion.p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { title: "Advanced Modalities", icon: Zap, desc: "Utilizing Class IV Laser Therapy, Shockwave Therapy, and specialized electrotherapy to heal tissue faster." },
                { title: "Root Cause Focus", icon: Target, desc: "We don't just mask pain. We conduct deep assessments to fix the origin of your injury permanently." },
                { title: "1-on-1 Dedicated Care", icon: UserCheck, desc: "Highly personalized attention throughout your entire session for maximum clinical efficacy." }
              ].map((feature, i) => (
                <motion.div 
                  key={i} variants={FADE_UP} 
                  whileHover={{ y: -8 }}
                  className="bg-white border border-slate-100 rounded-3xl p-8 hover:shadow-2xl hover:shadow-blue-500/10 hover:border-blue-200 transition-all duration-300 group"
                >
                  <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 group-hover:bg-blue-600 group-hover:shadow-lg transition-all duration-300">
                    <feature.icon className="w-8 h-8 text-blue-600 group-hover:text-white transition-colors" />
                  </div>
                  <h4 className="text-xl font-extrabold text-slate-900 mb-3 group-hover:text-blue-700 transition-colors">{feature.title}</h4>
                  <p className="text-slate-600 font-medium leading-relaxed">{feature.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* --- Treatments Grid --- */}
        <motion.section 
          id="treatments" 
          initial="hidden" whileInView="show" viewport={{ once: true, margin: "-100px" }} variants={STAGGER}
          className="py-24 bg-white scroll-mt-20"
        >
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div variants={FADE_UP} className="text-center mb-16 max-w-2xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-slate-900 mb-4">Comprehensive Treatments</h2>
              <p className="text-lg text-slate-600 font-medium">Targeted interventions utilizing manual therapy and modern medical technology.</p>
            </motion.div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {[
                { title: "Orthopaedic Rehab", desc: "Expert care for joint replacements, fractures, arthritis, and trauma.", icon: Bone },
                { title: "Sports Injury Recovery", desc: "Accelerate recovery from athletic injuries with targeted interventions.", icon: Activity },
                { title: "Neurological Therapy", desc: "Specialized neural-pathway therapy for stroke and nerve disorders.", icon: Brain },
                { title: "Spinal & Posture Correction", desc: "Treatments for PIVD, sciatica, cervical spondylosis, and back pain.", icon: ShieldCheck },
                { title: "Advanced Manual Therapy", desc: "Hands-on techniques to restore joint mechanics and alleviate pain.", icon: UserCheck },
                { title: "Clinical Slimming", desc: "Personalized aerobics, weight management, and fitness regimes.", icon: Flame },
              ].map((service, index) => (
                <motion.div 
                  key={index} variants={FADE_UP}
                  whileHover={{ y: -5, scale: 1.02 }}
                  className="bg-slate-50 border border-slate-100 rounded-2xl p-8 hover:bg-white hover:shadow-2xl hover:shadow-blue-500/15 hover:border-blue-200 transition-all duration-300 group cursor-pointer"
                  onClick={() => setIsBookingOpen(true)}
                >
                  <div className="mb-6 inline-flex p-4 rounded-xl bg-white border border-slate-100 group-hover:bg-blue-50 group-hover:border-blue-100 transition-colors">
                    <service.icon className="w-8 h-8 text-blue-600 group-hover:scale-110 transition-transform" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-700 transition-colors">{service.title}</h3>
                  <p className="text-slate-600 font-medium mb-6">{service.desc}</p>
                  <span className="text-sm font-bold text-blue-600 flex items-center gap-2 group-hover:gap-3 transition-all">
                    Consult <ArrowRight className="w-4 h-4" />
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* --- Patient Reviews Section --- */}
        <motion.section 
          id="reviews"
          initial="hidden" whileInView="show" viewport={{ once: true, margin: "-100px" }} variants={STAGGER}
          className="py-24 bg-slate-50 scroll-mt-20 border-t border-slate-200/60"
        >
           <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div variants={FADE_UP} className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6">
              <div className="max-w-2xl">
                <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">Patient Success Stories</h2>
                <p className="mt-4 text-lg text-slate-600 font-medium">Don't just take our word for it. Hear from the hundreds of patients who have reclaimed their mobility with us.</p>
              </div>
              <motion.div 
                whileHover={{ scale: 1.05 }}
                className="flex items-center gap-3 text-lg font-bold text-slate-900 bg-white px-6 py-4 rounded-2xl border border-slate-200 shadow-sm"
              >
                <div className="bg-blue-50 p-2 rounded-full">
                  <Star className="w-6 h-6 fill-blue-600 text-blue-600" />
                </div>
                4.8/5 on Google Maps
              </motion.div>
            </motion.div>

            <div className="grid gap-8 md:grid-cols-3">
              {[
                { name: "Rashmi K.", text: "An exceptional facility that truly prioritizes patient well-being. The caring staff goes above and beyond to ensure you heal properly.", rating: 5 },
                { name: "Harshil Kumar", text: "Best Physiotherapy Center in Haldwani. Great customer service, feeling significantly better and completely satisfied with the treatment.", rating: 5 },
                { name: "Anonymous Patient", text: "It was a great experience here. The staff is very well-trained, the clinic is highly sanitized, and they give comfortable exercises.", rating: 5 }
              ].map((review, i) => (
                <motion.div 
                  key={i} 
                  variants={FADE_UP} 
                  whileHover={{ y: -10, scale: 1.02 }}
                  className="bg-white rounded-3xl p-8 border border-slate-100 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/10 hover:border-blue-200 relative group"
                >
                  <div className="absolute top-6 right-8 text-6xl text-slate-100 font-serif group-hover:text-blue-50 transition-colors">"</div>
                  
                  <div className="flex gap-1 mb-6 relative z-10">
                    {[...Array(review.rating)].map((_, idx) => (
                      <Star key={idx} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-slate-700 italic mb-8 leading-relaxed font-medium relative z-10">"{review.text}"</p>
                  <p className="font-extrabold text-slate-900 relative z-10 flex items-center gap-2">
                    <span className="w-8 h-[2px] bg-blue-600 inline-block"></span> {review.name}
                  </p>
                </motion.div>
              ))}
            </div>
           </div>
        </motion.section>
      </main>

      {/* --- Footer --- */}
      <footer className="bg-slate-950 text-slate-400 pt-20 pb-8 border-t-8 border-blue-600">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-3 mb-16">
            
            <div className="lg:pr-8">
              <div className="flex items-center gap-2 mb-6 text-white">
                <Activity className="h-8 w-8 text-blue-500" />
                <span className="text-2xl font-black tracking-tight">Dr. Ankita's.</span>
              </div>
              <p className="mb-8 font-medium leading-relaxed">Restoring biomechanical function and enhancing quality of life through evidence-based clinical practice.</p>
            </div>
            
            <div>
              <h4 className="font-bold text-white text-lg mb-6 flex items-center gap-2"><Clock className="w-5 h-5 text-blue-500"/> Clinic Hours</h4>
              <ul className="space-y-4 font-medium text-sm">
                <li className="flex justify-between border-b border-white/10 pb-3"><span>Mon - Fri</span> <span className="text-white">8:00 AM - 8:00 PM</span></li>
                <li className="flex justify-between border-b border-white/10 pb-3"><span>Sat - Sun</span> <span className="text-white">8:00 AM - 3:00 PM</span></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-white text-lg mb-6 flex items-center gap-2"><MapPin className="w-5 h-5 text-blue-500"/> Contact</h4>
              <ul className="space-y-4 font-medium text-sm">
                <li>
                  <a href="tel:+919756465781" className="flex items-center gap-3 hover:text-white transition-colors group">
                    <div className="bg-white/10 p-2 rounded-lg group-hover:bg-blue-600 transition-colors"><PhoneCall className="w-4 h-4 text-white" /></div> 
                    +91 97564 65781
                  </a>
                </li>
                <li>
                  <a href="https://maps.app.goo.gl/RmJeqqzJBK1EdX26A" target="_blank" rel="noreferrer" className="flex items-start gap-3 hover:text-white transition-colors group">
                    <div className="bg-white/10 p-2 rounded-lg group-hover:bg-blue-600 transition-colors"><MapPin className="w-4 h-4 text-white" /></div> 
                    <span>Adarsh Nagar, Haldwani<br/>Near Bank of Baroda, UK 263139</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs font-semibold uppercase tracking-wider">
            <p>© {new Date().getFullYear()} Dr. Ankita Chandna.</p>
            <a href="https://tapecutstudios.com" target="_blank" rel="noreferrer" className="hover:text-white transition-colors flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-blue-500" /> Engineered by Tapecut Studios
            </a>
          </div>
        </div>
      </footer>

      {/* --- Cinematic Booking Drawer --- */}
      <AnimatePresence>
        {isBookingOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              onClick={() => setIsBookingOpen(false)}
              className="fixed inset-0 z-[100] bg-slate-900/40 backdrop-blur-md"
            />
            
            <motion.div
              initial={{ x: "100%" }} 
              animate={{ x: 0, transition: { type: "spring", damping: 25, stiffness: 200 } }} 
              exit={{ x: "100%", transition: { type: "spring", damping: 25, stiffness: 200 } }}
              className="fixed top-0 right-0 bottom-0 z-[101] w-full max-w-md bg-white shadow-2xl border-l border-slate-200 flex flex-col"
            >
              <div className="p-6 md:p-8 flex-1 flex flex-col overflow-y-auto">
                
                <div className="flex items-center justify-between mb-10">
                  <div>
                    <h3 className="text-2xl font-black text-slate-900">Book a Visit</h3>
                    <p className="text-sm font-medium text-slate-500 mt-1">We'll confirm your slot shortly.</p>
                  </div>
                  <button 
                    onClick={() => setIsBookingOpen(false)}
                    className="p-2 bg-slate-100 hover:bg-slate-200 rounded-full transition-colors"
                  >
                    <X className="w-5 h-5 text-slate-600" />
                  </button>
                </div>

                <form className="flex-1 flex flex-col gap-6" onSubmit={(e) => e.preventDefault()}>
                  
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-wider text-slate-600">Patient Name</label>
                    <input 
                      type="text" placeholder="Jane Doe" 
                      className="w-full h-14 px-4 rounded-xl border-2 border-slate-100 bg-slate-50 text-slate-900 hover:border-blue-200 focus:bg-white focus:ring-4 focus:ring-blue-600/10 focus:border-blue-600 transition-all font-medium outline-none"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-wider text-slate-600">Phone Number</label>
                    <input 
                      type="tel" placeholder="+91 98765 43210" 
                      className="w-full h-14 px-4 rounded-xl border-2 border-slate-100 bg-slate-50 text-slate-900 hover:border-blue-200 focus:bg-white focus:ring-4 focus:ring-blue-600/10 focus:border-blue-600 transition-all font-medium outline-none"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-wider text-slate-600">Preferred Date</label>
                    <input 
                      type="date" 
                      className="w-full h-14 px-4 rounded-xl border-2 border-slate-100 bg-slate-50 text-slate-900 hover:border-blue-200 focus:bg-white focus:ring-4 focus:ring-blue-600/10 focus:border-blue-600 transition-all font-medium outline-none"
                    />
                  </div>
                  
                  <div className="mt-auto pt-8">
                    <motion.button 
                      whileHover={{ scale: 1.02, boxShadow: "0px 10px 25px rgba(37, 99, 235, 0.3)" }} 
                      whileTap={{ scale: 0.98 }}
                      className="w-full h-14 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-lg shadow-xl shadow-blue-600/20 transition-all flex items-center justify-center gap-2"
                    >
                      Request Appointment <ArrowRight className="w-5 h-5" />
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