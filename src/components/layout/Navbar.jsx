import { useState } from "react";
import { Link } from "react-scroll";
import { motion } from "framer-motion";
import {
  Home,
  Briefcase,
  Code2,
  FolderKanban,
  Layers3,
  Mail,
} from "lucide-react";
import profile from "../../assets/profile.jpg";

const navItems = [
  {
    name: "Accueil",
    to: "accueil",
    icon: <Home size={15} />,
  },

  {
    name: "Services",
    to: "services",
    icon: <Layers3 size={15} />,
  },

  {
    name: "Compétences",
    to: "skills",
    icon: <Code2 size={15} />,
  },

  {
    name: "Expériences",
    to: "experiences",
    icon: <Briefcase size={15} />,
  },

  {
    name: "Projets",
    to: "projects",
    icon: <FolderKanban size={15} />,
  },
  {
    name: "Contact",
    to: "contact",
    icon: <Mail size={15} />,
  },
];

export default function Navbar() {
  const [active, setActive] = useState("accueil");

  return (
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
      className="fixed top-0 left-0 w-full z-50 backdrop-blur-xl"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10 pt-4">
        <div className="flex items-center justify-between h-20">
          {/* LOGO */}
          <motion.div
            whileHover={{
              scale: 1.03,
            }}
            className="flex items-center gap-4"
          >
            {/* image */}
            <div className="relative">
              <img
                src={profile}
                alt="profile"
                className="w-12 h-12 rounded-full object-cover"
              />
            </div>
            <span className="text-red-600 font-black text-2xl tracking-[0.25em]">
              KR
            </span>
          </motion.div>

          {/* MENU */}
          <div className="hidden md:flex items-center gap-8 border border-white/10 bg-black/50 backdrop-blur-xl rounded-full px-7 py-4">
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
                  className={`relative flex items-center gap-2 text-sm  transition-all duration-300 cursor-pointer group ${
                    active === item.to
                      ? "text-white"
                      : "text-zinc-400 hover:text-red-500"
                  }`}
                >
                  {item.icon}

                  <span>{item.name}</span>

                  {/* active line */}
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

          {/* BUTTON */}
          <motion.a
            href="#contact"
            whileHover={{
              scale: 1.05,
            }}
            whileTap={{
              scale: 0.97,
            }}
            className="hidden md:flex items-center justify-center px-6 py-2 rounded-lg bg-gradient-to-r from-red-600 to-red-800 text-white text-sm"
          >
            Contactez-moi
          </motion.a>
        </div>
      </div>
    </motion.nav>
  );
}
