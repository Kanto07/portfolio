import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import { Building2, Calendar, ChevronLeft, ChevronRight } from "lucide-react";

import SectionTitle from "../ui/SectionTitle";
import FadeIn from "../animations/FadeIn";

import { experiences } from "../../data/experiences";

export default function TimelineSection() {
  const [current, setCurrent] = useState(0);

  // GROUP BY TYPE
  const groupedExperiences = experiences.reduce((acc, item) => {
    if (!acc[item.type]) {
      acc[item.type] = [];
    }

    acc[item.type].push(item);

    return acc;
  }, {});

  // CONVERT TO ARRAY
  const slides = Object.entries(groupedExperiences);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  // CURRENT SLIDE
  const [type, items] = slides[current];

  return (
    <FadeIn delay={0.3} direction="down">
      <section
        id="experiences"
        className="relative mt-32 px-6 overflow-hidden bg-gradient-to-b from-[#070B14] to-[#050816]"
      >
        <div className="max-w-7xl mx-auto relative z-10">
          <SectionTitle title="Expériences" />

          {/* SLIDER */}
          <div className="relative mt-10 flex items-center justify-center">
            {/* PREV */}
            <button
              onClick={prevSlide}
              className="absolute left-0 z-20 w-12 h-12 rounded-full border border-white/10 bg-black/40 backdrop-blur-xl flex items-center justify-center text-white hover:border-red-500/40 hover:text-red-400 transition"
            >
              <ChevronLeft size={22} />
            </button>

            {/* NEXT */}
            <button
              onClick={nextSlide}
              className="absolute right-0 z-20 w-12 h-12 rounded-full border border-white/10 bg-black/40 backdrop-blur-xl flex items-center justify-center text-white hover:border-red-500/40 hover:text-red-400 transition"
            >
              <ChevronRight size={22} />
            </button>

            {/* SLIDE */}
            <div className="w-full max-w-5xl overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.div
                  key={current}
                  initial={{ opacity: 0, x: 120 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -120 }}
                  transition={{ duration: 0.6 }}
                  className="relative overflow-hidden"
                >
                  <div className="relative z-10">
                    {/* TOP */}
                    <h2 className="text-white font-semibold mb-4 text-2xl">
                      {type}
                    </h2>

                    {/* CARDS */}
                    <div className="grid grid-cols-2 gap-6 items-center">
                      {items.map((exp, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, y: 30 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: index * 0.08 }}
                          className="rounded-3xl border border-white/10 bg-black/20 backdrop-blur-xl p-6 h-[375px]"
                        >
                          {/* TOP */}
                          <div className="flex flex-wrap items-start justify-between gap-5">
                            <div>
                              {/* YEAR */}
                              <div className="inline-flex items-center gap-2 px-4 py-2 text-red-400 font-semibold text-sm">
                                <Calendar size={14} />
                                {exp.year}
                              </div>

                              {/* TITLE */}
                              <h3 className="mt-3 text-xl font-bold text-white">
                                {exp.title}
                              </h3>

                              {/* COMPANY */}
                              <div className="mt-2 flex items-center gap-2 text-gray-400">
                                <Building2 size={15} />
                                <span>{exp.company}</span>
                              </div>
                            </div>
                          </div>

                          {/* DESCRIPTION */}
                          <p className="mt-4 text-gray-400 leading-8 text-[15px]">
                            {exp.description}
                          </p>

                          {/* TECH */}
                          <div className="mt-6 flex flex-wrap gap-3">
                            {exp.tech.map((item, i) => (
                              <div
                                key={i}
                                className="px-4 py-2 rounded-lg bg-blue-500/10 border border-blue-500/20 text-blue-300 text-[10px] uppercase tracking-[0.18em]"
                              >
                                {item}
                              </div>
                            ))}
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          {/* INDICATORS */}
          <div className="mt-10 flex items-center justify-center gap-3">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrent(index)}
                className={`transition-all duration-300 rounded-full ${
                  current === index
                    ? "w-10 h-[6px] bg-red-500"
                    : "w-[6px] h-[6px] bg-white/20 hover:bg-white/40"
                }`}
              />
            ))}
          </div>
        </div>
      </section>
    </FadeIn>
  );
}
