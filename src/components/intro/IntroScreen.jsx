// IntroScreen.jsx

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

import profile from "../../assets/profile.jpg";

export default function IntroScreen({ onComplete }) {
  const [zooming, setZooming] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setZooming(true);

      setTimeout(() => {
        onComplete();
      }, 2200);
    }, 5000);

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <motion.section
      animate={{ opacity: zooming ? 0 : 1 }}
      transition={{ duration: 2, ease: "easeInOut" }}
      className="fixed inset-0 z-[999] overflow-hidden bg-black/60 backdrop-blur-xl"
    >
      {/* DARK OVERLAY */}

      <div className="absolute inset-0 bg-black/75" />

      {/* GRID */}

      <motion.div
        animate={{ backgroundPosition: ["0px 0px", "0px 120px"] }}
        transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px)`,
          backgroundSize: "80px 80px",
        }}
      />

      {/* RED GLOW */}

      <motion.div
        animate={{ scale: [1, 1.08, 1], opacity: [0.4, 0.7, 0.4] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-red-600/20 blur-[160px]"
      />

      {/* CONTENT */}

      <div className="relative z-20 h-full flex flex-col items-center justify-center text-center px-6">
        {/* TITLE */}

        <motion.h1
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: zooming ? 0 : 1, y: zooming ? -50 : 0 }}
          transition={{ duration: 1.2 }}
          className="text-white text-[3rem] sm:text-[5rem] lg:text-[3rem] font-black tracking-[-0.05em] leading-[0.9] mb-10"
        >
          Bienvenue
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-800 italic font-light">
            dans mon Portfolio
          </span>
        </motion.h1>

        {/* SMALL WELCOME TEXT */}

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: zooming ? 0 : 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="max-w-2xl text-zinc-400 leading-8 text-lg mb-16"
        >
          Découvrez mon univers digital, mes projets, mes compétences et mon
          expérience à travers une expérience immersive inspirée du cinéma
          moderne.
        </motion.p>

        {/* PORTAL */}

        <motion.div
          animate={
            zooming
              ? { scale: 14, borderRadius: "0%" }
              : { y: [0, -12, 0], scale: [1, 1.02, 1] }
          }
          transition={
            zooming
              ? { duration: 10, ease: [0.22, 1, 0.36, 1] }
              : { duration: 5, repeat: Infinity, ease: "easeInOut" }
          }
          className="relative w-[320px] h-[320px] rounded-full overflow-hidden border border-white/10"
        >
          {/* IMAGE */}

          <motion.img
            animate={{ scale: [1, 1.06, 1], y: [0, -10, 0] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            src={profile}
            alt=""
            className="absolute inset-0 w-full h-full object-cover grayscale opacity-90"
          />

          {/* OVERLAY */}

          <div className="absolute inset-0 bg-black/20" />

          {/* LIGHT */}

          <motion.div
            animate={{ x: ["-100%", "200%"] }}
            transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent rotate-12"
          />

          {/* BORDER */}

          <div className="absolute inset-0 rounded-full border border-red-500/30" />
        </motion.div>

        {/* AUTO TEXT */}

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: zooming ? 0 : 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="mt-14 text-zinc-500 uppercase tracking-[0.35em] text-xs"
        >
          Immersive Digital Experience
        </motion.p>
      </div>
    </motion.section>
  );
}
