// Footer.jsx

import { motion } from "framer-motion";
import { Heart, ArrowUp } from "lucide-react";

import profile from "../../assets/profile.jpg";

export default function Footer() {
  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="relative mt-24 border-t border-white/10 bg-[#050505] overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* left */}
          <div className="flex items-center gap-4">
            <img
              src={profile}
              alt="Profile"
              className="w-14 h-14 rounded-full object-cover"
            />

            <div>
              <h3 className="text-xl font-black tracking-[0.25em] text-red-600 uppercase">
                KR
              </h3>

              <p className="text-sm text-gray-500">
                Fullstack Developer • React • Symfony
              </p>
            </div>
          </div>

          {/* center */}
          <div className="flex items-center gap-2 text-sm text-gray-500 text-center">
            <span>© {new Date().getFullYear()} KR Portfolio.</span>

            <span className="hidden sm:block">Tous droits réservés.</span>
          </div>

          {/* right */}
          <motion.button
            whileHover={{ y: -3 }}
            whileTap={{ scale: 0.95 }}
            onClick={scrollTop}
            className="group w-12 h-12 rounded-full border border-white/10 bg-white/[0.03] flex items-center justify-center hover:border-red-500/40 hover:bg-red-500/10 transition-all duration-300"
          >
            <ArrowUp
              size={18}
              className="text-gray-300 group-hover:text-red-400 transition"
            />
          </motion.button>
        </div>

        {/* bottom */}
        <div className="mt-8 pt-6 border-t border-white/5 flex items-center justify-center gap-2 text-xs text-gray-600">
          <span>Développé avec</span>

          <Heart size={14} className="text-red-500 fill-red-500" />

          <span>en React & Tailwind CSS</span>
        </div>
      </div>
    </footer>
  );
}
