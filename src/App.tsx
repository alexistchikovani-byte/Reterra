/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Search, ShoppingBag, ArrowRight, Leaf, Droplet, Wrench, X, Menu } from 'lucide-react';

const LOGO_IMG = "https://lh3.googleusercontent.com/aida/ADBb0ui2-4X3D15M1aZp6pS_8lG4O7tY-vD_Gf9J7nB4H3W2F1L0P9O8";
const BASKET_IMG = "https://lh3.googleusercontent.com/aida/ADBb0uhS-Ssh0iYpEByqO52f-O-XkR1Hl5P2qjLAtf80hS3Lq8i1y7v3e0_o0KAtT0M0u0v0s0z0q0_0w0e0r0t0y0u0i0o0p0";

function Navbar({ cartCount }: { cartCount: number }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-brand-accent/80 backdrop-blur-md border-b border-primary/10 px-8 md:px-16 py-6 transition-all duration-300">
      <div className="flex justify-between items-center max-w-[1440px] mx-auto">
        <div className="flex items-center gap-12">
          <a href="/" className="flex items-center gap-2 group">
            <Leaf className="w-6 h-6 text-primary group-hover:rotate-12 transition-transform duration-500" />
            <span className="font-serif italic text-2xl tracking-tighter font-semibold">RETERRA</span>
          </a>
          <div className="hidden md:flex gap-10">
            <a href="#" className="nav-link border-b border-primary pb-1 font-bold !text-primary">Shop</a>
            <a href="#" className="nav-link">Sustainability</a>
            <a href="#" className="nav-link">Journal</a>
            <a href="#" className="nav-link">About</a>
          </div>
        </div>
        <div className="flex gap-6 items-center">
          <Search className="w-5 h-5 cursor-pointer hover:opacity-60 transition-opacity hidden md:block" />
          <div className="relative group cursor-pointer">
            <ShoppingBag className="w-5 h-5 group-hover:opacity-60 transition-opacity" />
            {cartCount > 0 && (
              <motion.span 
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                className="absolute -top-2 -right-2 bg-primary text-brand-bg text-[8px] w-4 h-4 flex items-center justify-center rounded-full font-bold"
              >
                {cartCount}
              </motion.span>
            )}
          </div>
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden">
            {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-brand-accent p-8 flex flex-col gap-6 md:hidden border-b border-primary/10 shadow-xl"
          >
            <a href="#" className="nav-link border-b border-primary pb-1 font-bold !text-primary text-lg">Shop</a>
            <a href="#" className="nav-link text-lg text-primary">Sustainability</a>
            <a href="#" className="nav-link text-lg text-primary">Journal</a>
            <a href="#" className="nav-link text-lg text-primary">About</a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

function Hero() {
  const line1 = "Plant-Based";
  const line2 = "Living.";

  return (
    <section className="container-custom pt-48 mb-40 relative overflow-hidden">
      {/* Background Accent Text */}
      <div className="absolute -top-20 -right-40 text-[300px] font-serif italic text-primary/5 select-none pointer-events-none hidden lg:block">
        Sustainable
      </div>

      <div className="grid grid-cols-12 gap-gutter items-center relative z-10">
        <div className="col-span-12 md:col-span-8 lg:col-span-7">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              visible: { transition: { staggerChildren: 0.1 } }
            }}
          >
            <motion.h1 
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0 }
              }}
              className="text-7xl md:text-[140px] lg:text-[160px] leading-[0.85] mb-12"
            >
              <span className="block">{line1}</span>
              <span className="artistic-serif block pl-16 md:pl-40 lg:pl-60">{line2}</span>
            </motion.h1>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="flex flex-col md:flex-row gap-12 items-start"
          >
            <p className="text-lg md:text-xl text-primary/70 max-w-sm font-light leading-relaxed">
              Reterra was born from the soil. We believe the future of our homes lies in returning to the earth, utilizing the ancient resilience of hemp to weave a new legacy of sustainability.
            </p>
            <div className="flex flex-col gap-4">
              <div className="h-[1px] w-24 bg-primary/20" />
              <button className="flex items-center gap-4 text-[10px] uppercase tracking-[0.3em] font-bold group">
                Discover the Origin
                <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
              </button>
            </div>
          </motion.div>
        </div>
        
        <div className="col-span-12 md:col-span-4 lg:col-span-5 relative mt-20 md:mt-0">
          <motion.div 
            initial={{ scale: 1.1, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="bg-brand-accent aspect-[4/5] flex items-center justify-center p-12 overflow-hidden shadow-2xl"
          >
            <img 
              src={BASKET_IMG} 
              alt="Reterra Basket" 
              className="w-full h-auto object-contain mix-blend-multiply hover:scale-105 transition-transform duration-1000" 
            />
            <div className="absolute -bottom-6 -left-6 bg-primary text-brand-bg p-8 hidden lg:block">
              <span className="text-[10px] uppercase tracking-[0.3em]">Origin 01. The Fiber</span>
            </div>
          </motion.div>
          
          {/* Circular badge */}
          <motion.div 
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute -top-10 -right-10 w-32 h-32 border border-primary/10 rounded-full flex items-center justify-center hidden md:flex"
          >
            <div className="text-[8px] uppercase tracking-widest text-center">
              100% Organic<br />Carbon Negative
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function Philosophy() {
  return (
    <section className="bg-primary text-brand-bg section-gap overflow-hidden">
      <div className="container-custom">
        <div className="grid grid-cols-12 gap-gutter">
          <div className="col-span-1 hidden md:block">
            <span className="[writing-mode:vertical-rl] rotate-180 uppercase tracking-[0.4em] text-[10px] opacity-40">Philosophy</span>
          </div>
          <div className="col-span-12 md:col-span-5">
            <h2 className="text-4xl md:text-6xl italic leading-tight mb-12 artistic-serif">
              A deep dive into the hemp-first movement.
            </h2>
          </div>
          <div className="col-span-12 md:col-span-6 space-y-12">
            <p className="border-l border-brand-bg/20 pl-12 text-lg md:text-xl opacity-80 leading-relaxed max-w-xl">
              Sustainability isn't a feature; it's our foundation. We chose hemp not just for its durability, but for its role as a carbon-negative titan of the plant kingdom.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 pt-8">
              <div>
                <h4 className="text-[10px] uppercase tracking-widest text-brand-bg/40 mb-4">Regenerative Growth</h4>
                <p className="opacity-70 text-sm leading-relaxed">Hemp breathes in four times the CO2 of a typical forest, healing the atmosphere as it grows in the fields.</p>
              </div>
              <div>
                <h4 className="text-[10px] uppercase tracking-widest text-brand-bg/40 mb-4">Minimal Water</h4>
                <p className="opacity-70 text-sm leading-relaxed">Requiring 50% less water than cotton, hemp survives where other fibers fail, respecting our planet's most precious resource.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Products({ onAddToCart }: { onAddToCart: () => void }) {
  const products = [
    { 
      id: 1, 
      title: "Tall Cylinder", 
      price: "$185.00", 
      tag: "Limited Edition", 
      offset: false,
      mainImage: "https://images.unsplash.com/photo-1591348113521-7299a918a59b?q=80&w=800&auto=format&fit=crop",
      lifestyleImage: "https://images.unsplash.com/photo-1583947215259-38e31be07e1c?q=80&w=800&auto=format&fit=crop"
    },
    { 
      id: 2, 
      title: "Wide Bell", 
      price: "$210.00", 
      tag: "New Arrival", 
      offset: true,
      mainImage: "https://images.unsplash.com/photo-1544457070-4cd773b4d71e?q=80&w=800&auto=format&fit=crop",
      lifestyleImage: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?q=80&w=800&auto=format&fit=crop"
    },
    { 
      id: 3, 
      title: "Nesting Set", 
      price: "$245.00", 
      tag: "Handmade", 
      offset: false,
      mainImage: "https://images.unsplash.com/photo-1517705008128-361805f42e86?q=80&w=800&auto=format&fit=crop",
      lifestyleImage: "https://images.unsplash.com/photo-1616489953149-2f227734f0ca?q=80&w=800&auto=format&fit=crop"
    },
  ];

  return (
    <section className="container-custom section-gap">
      <div className="flex justify-between items-end mb-20">
        <div>
          <span className="text-[10px] uppercase tracking-widest opacity-40 mb-4 block">New Series 2024</span>
          <h2 className="text-4xl md:text-6xl artistic-serif">The Objects</h2>
        </div>
        <a href="#" className="nav-link border-b border-primary pb-1 group flex items-center gap-2">
          View All
          <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
        </a>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
        {products.map((p, idx) => (
          <motion.div 
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            className={`group cursor-pointer ${p.offset ? 'md:mt-24' : ''}`}
          >
            <div className="aspect-[3/4] bg-brand-accent mb-6 relative overflow-hidden group">
               <motion.img 
                 src={p.mainImage} 
                 alt={p.title} 
                 className="absolute inset-0 w-full h-full object-cover grayscale-[0.2] contrast-[0.9] transition-all duration-1000 group-hover:scale-110"
               />
               <motion.img 
                 src={p.lifestyleImage} 
                 alt={`${p.title} Lifestyle`} 
                 className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 group-hover:scale-110 transition-all duration-1000 ease-out"
               />
               <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
               <motion.button 
                 onClick={(e) => {
                   e.stopPropagation();
                   onAddToCart();
                 }}
                 whileTap={{ scale: 0.95 }}
                 className="absolute bottom-6 right-6 bg-primary text-brand-bg p-4 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 shadow-2xl z-10"
               >
                 <ShoppingBag size={16} />
               </motion.button>
            </div>
            <h3 className="artistic-serif text-2xl mb-2">{p.title}</h3>
            <div className="flex justify-between items-center text-sm">
              <span className="opacity-60">{p.price}</span>
              <span className="text-[10px] uppercase tracking-widest font-bold">{p.tag}</span>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

function Craftsmanship() {
  return (
    <section className="bg-brand-accent/30 section-gap">
      <div className="container-custom">
        <div className="grid grid-cols-12 gap-gutter items-center">
          <div className="col-span-12 md:col-span-5">
            <h2 className="text-4xl md:text-6xl artistic-serif mb-8">The Craftsmanship</h2>
            <p className="text-primary/60 leading-relaxed mb-12 max-w-sm">
              Each basket represents hours of artisanal dedication. From the harvesting of organic hemp stalks to the final hand-finished seam, we prioritize longevity over speed.
            </p>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <Leaf size={20} />
                <div>
                  <h4 className="text-[10px] uppercase tracking-[0.2em] font-bold mb-1">Carbon Negative</h4>
                  <p className="text-xs opacity-60">Hemp sequesters more CO2 than any other commercial crop.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Droplet size={20} />
                <div>
                  <h4 className="text-[10px] uppercase tracking-[0.2em] font-bold mb-1">Water Wise</h4>
                  <p className="text-xs opacity-60">Requires 50% less water than organic cotton to cultivate.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-12 md:col-span-7 grid grid-cols-2 gap-4 mt-12 md:mt-0">
             <div className="aspect-square bg-brand-accent flex items-center justify-center p-12 relative overflow-hidden">
                <img src={LOGO_IMG} className="absolute inset-0 w-full h-full object-cover opacity-5 grayscale scale-150 rotate-12" alt="bg" />
                <p className="artistic-serif text-3xl text-center relative z-10">Woven to endure generations.</p>
             </div>
             <div className="aspect-[3/4] bg-primary text-brand-bg p-12 flex flex-col justify-between">
                <Wrench size={40} strokeWidth={1} />
                <div className="space-y-4">
                  <h3 className="artistic-serif text-3xl">Reinforced Logic</h3>
                  <p className="text-sm opacity-70 leading-relaxed">Double-stitched stress points and heavy-duty handles ensure a load capacity of up to 40lbs.</p>
                </div>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section className="section-gap container-custom text-center">
      <div className="max-w-3xl mx-auto space-y-12">
        <h2 className="text-5xl md:text-7xl artistic-serif">Join the earth-first movement.</h2>
        <div className="flex flex-col md:flex-row gap-6 justify-center pt-8">
          <button className="btn-primary">Shop the Collection</button>
          <button className="btn-outline">Our Ethical Charter</button>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-brand-accent border-t border-primary/10 mt-40">
      <div className="container-custom py-12 flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="flex flex-col gap-2">
          <span className="font-serif italic font-bold">RETERRA</span>
          <span className="text-[10px] uppercase tracking-[0.15em] opacity-40">© 2024 RETERRA. Woven from the earth.</span>
        </div>
        <div className="flex gap-10">
          <a href="#" className="nav-link">Our Story</a>
          <a href="#" className="nav-link">Hemp Benefits</a>
          <a href="#" className="nav-link">Wholesale</a>
          <a href="#" className="nav-link">Contact</a>
        </div>
      </div>
    </footer>
  );
}

export default function App() {
  const [cartCount, setCartCount] = useState(0);
  const [showNotification, setShowNotification] = useState(false);

  const addToCart = () => {
    setCartCount(prev => prev + 1);
    setShowNotification(true);
    setTimeout(() => setShowNotification(false), 3000);
  };

  return (
    <div className="min-h-screen">
      <Navbar cartCount={cartCount} />
      <Hero />
      <Philosophy />
      <Products onAddToCart={addToCart} />
      <Craftsmanship />
      <CTA />
      <Footer />

      {/* Notification */}
      <AnimatePresence>
        {showNotification && (
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            className="fixed bottom-8 right-8 bg-primary text-brand-bg px-8 py-4 shadow-2xl z-[100] flex items-center gap-4"
          >
            <div className="w-2 h-2 bg-brand-bg rounded-full animate-pulse" />
            <span className="text-[10px] uppercase tracking-[0.2em]">Item added to collection</span>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
