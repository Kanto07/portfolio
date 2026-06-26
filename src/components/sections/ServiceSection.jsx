// ServicesSection.jsx

import { motion } from "framer-motion";

import { Globe, MonitorSmartphone, Smartphone } from "lucide-react";

import SectionTitle from "../ui/SectionTitle";
import FadeIn from "../animations/FadeIn";

const services = [
  {
    icon: <Globe size={24} />,
    title: "Développement Web",
    text: "Création d'applications web modernes, rapides et évolutives avec React, Symfony et TailwindCSS.",
    color: "from-red-500 to-red-700",
    glow: "shadow-red-500/20",
    border: "hover:border-red-500/30",
  },

  {
    icon: <MonitorSmartphone size={24} />,
    title: "Logiciels Desktop",
    text: "Développement de logiciels desktop performants avec une architecture propre et une interface moderne.",
    color: "from-blue-500 to-cyan-500",
    glow: "shadow-cyan-500/20",
    border: "hover:border-cyan-500/30",
  },

  {
    icon: <Smartphone size={24} />,
    title: "Applications Mobile",
    text: "Applications mobiles fluides et intuitives avec React Native et synchronisation temps réel.",
    color: "from-green-500 to-emerald-600",
    glow: "shadow-green-500/20",
    border: "hover:border-green-500/30",
  },
];

export default function ServicesSection() {
  return (
    <FadeIn delay={0.3} direction="down">
      <section
        id="services"
        className="relative mt-32 px-6 overflow-hidden bg-gradient-to-b from-[#070B14] to-[#050816]"
      >
        <div className="max-w-7xl mx-auto relative z-10">
          <SectionTitle title="Services" />

          {/* subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="sm:mt-4 xl:mt-6 text-lg sm:text-sm xl:text-base text-center text-gray-400 max-w-3xl mx-auto leading-8 sm:leading-7"
          >
            Je conçois et développe des solutions digitales modernes,
            performantes et immersives adaptées à vos besoins.
          </motion.p>

          {/* cards */}
          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8 mt-10">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{
                  opacity: 0,
                  y: 50,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.12,
                }}
                viewport={{ once: true }}
                whileHover={{
                  y: -10,
                }}
                className={`group relative overflow-hidden rounded-[30px] border border-white/10 bg-white/[0.03] backdrop-blur-xl sm:p-6 xl:p-8 transition-all duration-500 ${service.border}`}
              >
                {/* hover glow */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-br from-white/[0.02] to-transparent" />

                <div className="relative z-10">
                  {/* icon */}
                  <div
                    className={`sm:w-12 sm:h-12 xl:w-16 xl:h-16 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center text-white shadow-2xl ${service.glow}`}
                  >
                    {service.icon}
                  </div>

                  {/* title */}
                  <h3 className="mt-8 sm:mt-4 sm:text-xl xl:text-2xl font-bold text-white">
                    {service.title}
                  </h3>

                  {/* text */}
                  <p className="mt-5 sm:mt-2 text-gray-400 leading-8 sm:leading-6 sm:text-[13px] xl:text-[15px]">
                    {service.text}
                  </p>
                </div>

                {/* netflix glow bottom */}
                <div
                  className={`absolute bottom-0 left-0 h-[3px] w-0 group-hover:w-full transition-all duration-500 bg-gradient-to-r ${service.color}`}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </FadeIn>
  );
}
