import { useState } from "react";
import { Link } from "react-scroll";
import { motion, AnimatePresence } from "framer-motion";
import {
  Home,
  Briefcase,
  Code2,
  FolderKanban,
  Layers3,
  Mail,
  Menu,
  X,
} from "lucide-react";

import profile from "../../assets/profile.jpg";

const navItems = [
  {
    name: "Accueil",
    to: "accueil",
    icon: <Home size={16} />,
  },

  {
    name: "Services",
    to: "services",
    icon: <Layers3 size={16} />,
  },

  {
    name: "Compétences",
    to: "skills",
    icon: <Code2 size={16} />,
  },

  {
    name: "Expériences",
    to: "experiences",
    icon: <Briefcase size={16} />,
  },

  {
    name: "Projets",
    to: "projects",
    icon: <FolderKanban size={16} />,
  },

  {
    name: "Contact",
    to: "contact",
    icon: <Mail size={16} />,
  },
];

export default function Navbar() {
  const [active, setActive] = useState("accueil");
  const [open, setOpen] = useState(false);

  return (
    <>
      <motion.nav
        initial={{
          y: -80,
          opacity: 0,
        }}
        animate={{
          y: 0,
          opacity: 1,
        }}
        transition={{
          duration: 0.8,
          ease: "easeOut",
        }}
        className="fixed top-0 left-0 w-full z-50"
      >
        <div className="max-w-7xl mx-auto px-5 lg:px-10 pt-4">
          <div className="h-20 rounded-2xl backdrop-blur-2xl px-5 flex items-center justify-between">
            {/* LEFT */}
            <motion.div
              whileHover={{
                scale: 1.03,
              }}
              className="flex items-center gap-4"
            >
              <div className="relative">
                <img
                  src={profile}
                  alt="profile"
                  className="w-12 h-12 rounded-full object-cover border border-red-500/30"
                />

                <div className="absolute inset-0 rounded-full bg-red-600/10 blur-md" />
              </div>

              <div className="flex flex-col">
                <span className="text-red-600 font-black text-2xl tracking-[0.25em] leading-none">
                  KR
                </span>

                <span className="text-[11px] text-zinc-500 tracking-[0.3em] uppercase">
                  Développeur
                </span>
              </div>
            </motion.div>

            {/* DESKTOP MENU */}
            <div className="hidden xl:flex items-center gap-8 border border-white/10 bg-white/[0.03] rounded-full px-7 py-4">
              {navItems.map((item, index) => (
                <motion.div
                  key={index}
                  whileHover={{
                    y: -2,
                  }}
                  className="relative"
                >
                  <Link
                    to={item.to}
                    smooth
                    duration={500}
                    offset={-100}
                    spy={true}
                    onSetActive={() => setActive(item.to)}
                    className={`relative flex items-center gap-2 text-sm transition-all duration-300 cursor-pointer group ${
                      active === item.to
                        ? "text-white"
                        : "text-zinc-400 hover:text-red-500"
                    }`}
                  >
                    {item.icon}

                    <span>{item.name}</span>

                    {/* ACTIVE LINE */}
                    <motion.span
                      layoutId="navbar-indicator"
                      className={`absolute left-0 -bottom-3 h-[2px] rounded-full bg-red-600 ${
                        active === item.to ? "w-full" : "w-0"
                      }`}
                      transition={{
                        type: "spring",
                        stiffness: 380,
                        damping: 30,
                      }}
                    />
                  </Link>
                </motion.div>
              ))}
            </div>

            {/* DESKTOP BUTTON */}
            <motion.a
              href="#contact"
              whileHover={{
                scale: 1.05,
              }}
              whileTap={{
                scale: 0.97,
              }}
              className="hidden xl:flex items-center justify-center px-6 py-3 rounded-xl bg-gradient-to-r from-red-600 to-red-800 text-white text-sm font-medium shadow-lg shadow-red-900/20"
            >
              Contactez-moi
            </motion.a>

            {/* MOBILE BUTTON */}
            <button
              onClick={() => setOpen(!open)}
              className="xl:hidden w-12 h-12 rounded-xl border border-white/10 bg-white/[0.04] flex items-center justify-center text-white"
            >
              {open ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {open && (
          <>
            {/* OVERLAY */}
            <motion.div
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              exit={{
                opacity: 0,
              }}
              onClick={() => setOpen(false)}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 xl:hidden"
            />

            {/* DRAWER */}
            <motion.div
              initial={{
                x: "100%",
              }}
              animate={{
                x: 0,
              }}
              exit={{
                x: "100%",
              }}
              transition={{
                type: "spring",
                damping: 25,
                stiffness: 220,
              }}
              className="fixed top-0 right-0 h-screen w-[85%] sm:w-full bg-[#0b0b0b] border-l border-white/10 z-50 xl:hidden"
            >
              <div className="p-6 flex flex-col h-full">
                {/* TOP */}
                <div className="flex items-center justify-between mb-10">
                  <div className="flex items-center gap-4">
                    <img
                      src={profile}
                      alt="profile"
                      className="w-14 h-14 rounded-full object-cover border border-red-500/30"
                    />

                    <div>
                      <h2 className="text-white font-bold text-lg">
                        Kanto Raoelison
                      </h2>
                      <p className="text-zinc-500 text-sm">Développeur</p>
                    </div>
                  </div>

                  <button
                    onClick={() => setOpen(false)}
                    className="w-11 h-11 rounded-xl bg-white/[0.05] border border-white/10 flex items-center justify-center text-white"
                  >
                    <X size={20} />
                  </button>
                </div>

                {/* LINKS */}
                <div className="flex flex-col gap-3">
                  {navItems.map((item, index) => (
                    <Link
                      key={index}
                      to={item.to}
                      smooth
                      duration={500}
                      offset={-80}
                      spy={true}
                      onClick={() => {
                        setActive(item.to);
                        setOpen(false);
                      }}
                      className={`group relative overflow-hidden flex items-center gap-4 px-5 py-4 rounded-2xl border transition-all duration-300 cursor-pointer ${
                        active === item.to
                          ? "bg-gradient-to-r from-red-600/20 to-red-900/10 border-red-500/30 text-white"
                          : "bg-white/[0.03] border-white/5 text-zinc-400 hover:text-white hover:border-white/10"
                      }`}
                    >
                      {/* glow */}
                      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-r from-red-500/5 to-transparent" />

                      <div className="relative z-10">{item.icon}</div>

                      <span className="relative z-10 font-medium">
                        {item.name}
                      </span>
                    </Link>
                  ))}
                </div>

                {/* BOTTOM */}
                <div className="mt-auto pt-10">
                  <motion.a
                    href="#contact"
                    whileTap={{
                      scale: 0.98,
                    }}
                    className="w-full flex items-center justify-center py-4 rounded-2xl bg-gradient-to-r from-red-600 to-red-800 text-white font-semibold shadow-xl shadow-red-950/20"
                  >
                    Contactez-moi
                  </motion.a>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
