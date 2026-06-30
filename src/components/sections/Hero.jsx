// Hero.jsx
import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import profile from "../../assets/profile.jpg";
import FadeIn from "../animations/FadeIn";

export default function Hero() {
  return (
    <section
      id="accueil"
      className="relative min-h-screen overflow-hidden bg-[var(--bg-primary)] flex items-center px-6"
    >
      {/* BACKGROUND IMAGE */}
      <motion.div
        animate={{
          scale: [1, 1.05, 1],
          y: [0, -20, 0],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute inset-0 flex items-center justify-center pointer-events-none"
      >
        <img
          src={profile}
          alt="background"
          className="w-full object-contain h-full"
        />
      </motion.div>

      {/* DARK OVERLAY */}
      <div className="absolute inset-0 bg-black/80" />

      {/* CONTENT */}
      <motion.div className="relative z-10 max-w-5xl text-start sm:text-center sm:ml-0 lg:ml-10 xl:ml-24">
        <FadeIn delay={0.2} direction="left">
          <h1 className="sm:text-xl xl:text-4xl text-white font-bold sm:mt-24 xl:mt-0">
            RAOELISON Kanto Hobiana
          </h1>
        </FadeIn>
        <FadeIn delay={0.2} direction="right">
          <h2 className="mt-6 sm:mt-2 sm:text-lg xl:text-2xl text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-red-800 font-bold">
            Créateur d'application web
          </h2>
        </FadeIn>

        {/* DESCRIPTION */}
        <FadeIn delay={0.2} direction="left">
          <p className="mt-12 sm:mt-4 text-white text-lg sm:text-sm leading-9 sm:leading-6 max-w-3xl mx-auto ">
            Développeur web ayant travaillé en entreprise et en stage sur des
            projet réels. Expérimenté dans la création d'applications web
            performantes et la gestion de bases de données. Sérieux, motivé et
            capable de travailler en équipe comme en autonomie.
          </p>
        </FadeIn>

        {/* BUTTONS */}
        <FadeIn delay={0.2} direction="right">
          <div className="sm:mt-6 xl:mt-14 flex flex-wrap items-center sm:justify-center gap-6">
            <a href="/CV_Kanto.pdf" download>
              <motion.button
                whileHover={{
                  scale: 1.05,
                }}
                whileTap={{
                  scale: 0.97,
                }}
                className="group flex items-center gap-3 px-8 py-3 rounded-lg bg-gradient-to-r from-red-600 to-red-800 text-white font-semibold text-sm"
              >
                Télécharger mon CV
                <ArrowDown size={18} />
              </motion.button>
            </a>
          </div>
        </FadeIn>
      </motion.div>
    </section>
  );
}
