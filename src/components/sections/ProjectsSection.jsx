import { useState } from "react";

import { motion, AnimatePresence } from "framer-motion";

import {
  Sparkles,
  Layers3,
  LayoutGrid,
  X,
  ArrowUpRight,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

import SectionTitle from "../ui/SectionTitle";
import FadeIn from "../animations/FadeIn";

import { projects } from "../../data/projects";

const filters = [
  { name: "Tous", icon: <Layers3 size={16} /> },
  { name: "Projet en entreprise", icon: <LayoutGrid size={16} /> },
  { name: "Projet de stage", icon: <Sparkles size={16} /> },
  { name: "Projet Personnel", icon: <LayoutGrid size={16} /> },
];

export default function ProjectsSection() {
  const [filter, setFilter] = useState("Tous");

  const [selectedProject, setSelectedProject] = useState(null);
  const [currentImage, setCurrentImage] = useState(0);

  const filteredProjects =
    filter === "Tous"
      ? projects
      : projects.filter((project) => project.type === filter);

  return (
    <FadeIn delay={0.3} direction="down">
      <section
        id="projects"
        className="relative mt-32 px-6 overflow-hidden bg-gradient-to-b from-[#070B14] to-[#050816]"
      >
        {/* glow */}
        <div className="absolute right-[-200px] top-0 w-[500px] h-[500px] rounded-full bg-red-600/10 blur-[140px]" />

        <div className="max-w-7xl mx-auto relative z-10">
          <SectionTitle title="Mes Projets" />

          {/* filters */}
          <div className="sm:grid sm:grid-cols-1 flex flex-wrap gap-4 my-10">
            {filters.map((item) => (
              <motion.button
                key={item.name}
                onClick={() => setFilter(item.name)}
                whileTap={{ scale: 0.95 }}
                whileHover={{ y: -3 }}
                className={`relative overflow-hidden flex items-center justify-center gap-2 px-6 py-3 rounded-full border backdrop-blur-xl transition-all duration-300 ${
                  filter === item.name
                    ? "border-red-500 bg-red-500/10 text-red-300 shadow-[0_0_30px_rgba(229,9,20,0.25)]"
                    : "border-white/10 bg-white/[0.03] text-gray-300 hover:border-red-500/30"
                }`}
              >
                {item.icon}
                {item.name}

                {filter === item.name && (
                  <motion.div
                    layoutId="active-pill"
                    className="absolute inset-0 bg-gradient-to-r from-red-600/10 to-red-500/5"
                  />
                )}
              </motion.button>
            ))}
          </div>

          {/* projects */}
          <motion.div
            layout
            className="grid md:grid-cols-2 xl:grid-cols-3 gap-8"
          >
            <AnimatePresence>
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -30 }}
                  transition={{ duration: 0.5, delay: index * 0.08 }}
                  whileHover={{ y: -8 }}
                  className="group relative overflow-hidden rounded-xl border border-white/10 bg-white/[0.03] backdrop-blur-xl"
                >
                  {/* image */}
                  <div className="relative h-[200px] overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition duration-700 group-hover:scale-105"
                    />

                    {/* overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-black/10 sm:via-black/40 to-transparent" />

                    {/* title */}
                    <div className="absolute bottom-5 left-5">
                      <h3 className="text-2xl font-bold text-white">
                        {project.title}
                      </h3>
                      <p className="text-sm text-gray-300 font-bold uppercase">
                        {project.category}
                      </p>
                    </div>
                  </div>

                  {/* buttons */}
                  <div className="p-3 flex flex-wrap gap-3">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noreferrer"
                        className="px-5 py-2 rounded-lg border border-white/10 bg-white/[0.03] text-sm text-white hover:border-red-500/40 hover:text-red-300 transition"
                      >
                        Github
                      </a>
                    )}

                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noreferrer"
                        className="px-5 py-2 rounded-lg border border-red-500/20 bg-red-500/10 text-sm text-red-300 hover:bg-red-500/20 transition"
                      >
                        Live Demo
                      </a>
                    )}

                    <button
                      onClick={() => {
                        setSelectedProject(project);
                        setCurrentImage(0);
                      }}
                      className="px-5 py-2 rounded-lg bg-red-600 text-white text-sm hover:bg-red-700 transition"
                    >
                      Voir plus
                    </button>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>

        {/* MODAL */}
        <AnimatePresence>
          {selectedProject && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[999] bg-black/70 backdrop-blur-md flex items-center justify-center p-6"
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.92, y: 40 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.92 }}
                transition={{ duration: 0.4 }}
                className="relative w-full max-w-5xl overflow-hidden rounded-xl border border-white/10 bg-[#0B0B0F]"
              >
                {/* close */}
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-5 right-5 z-20 w-11 h-11 rounded-full bg-black/50 border border-white/10 flex items-center justify-center text-white hover:border-red-500/40 hover:text-red-400 transition"
                >
                  <X size={18} />
                </button>

                {/* image */}
                <div className="relative h-[500px]">
                  <img
                    src={
                      selectedProject.screenshots
                        ? selectedProject.screenshots[currentImage]
                        : selectedProject.image
                    }
                    alt={selectedProject.title}
                    className="w-full h-full object-contain transition duration-500"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0F] via-black/10 to-transparent" />

                  <div className="absolute bottom-8 left-8">
                    <h2 className="mt-3 text-3xl font-black text-white">
                      {selectedProject.title}
                    </h2>
                    <h2 className="mt-2 text-base text-gray-300 uppercase">
                      {selectedProject.category}
                    </h2>
                  </div>

                  {selectedProject.screenshots &&
                    selectedProject.screenshots.length > 1 && (
                      <>
                        <button
                          onClick={() =>
                            setCurrentImage((prev) =>
                              prev === 0
                                ? selectedProject.screenshots.length - 1
                                : prev - 1,
                            )
                          }
                          className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-black/50 border border-white/10 flex items-center justify-center text-white hover:border-red-500/40"
                        >
                          <ChevronLeft size={20} />
                        </button>

                        <button
                          onClick={() =>
                            setCurrentImage((prev) =>
                              prev === selectedProject.screenshots.length - 1
                                ? 0
                                : prev + 1,
                            )
                          }
                          className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-black/50 border border-white/10 flex items-center justify-center text-white hover:border-red-500/40"
                        >
                          <ChevronRight size={20} />
                        </button>
                      </>
                    )}
                </div>

                {/* content */}
                <div className="p-4">
                  <p className="text-gray-400 leading-8 text-[15px]">
                    {selectedProject.description}
                  </p>

                  {/* tech */}
                  <div className="mt-4 flex flex-wrap gap-3">
                    {selectedProject.tech.map((item, index) => (
                      <div
                        key={index}
                        className="px-4 py-2 rounded-full border border-red-500/20 bg-red-500/10 text-red-300 text-xs uppercase tracking-[0.18em]"
                      >
                        {item}
                      </div>
                    ))}
                  </div>

                  {/* links */}
                  <div className="mt-4 flex flex-wrap gap-4">
                    {selectedProject.github && (
                      <a
                        href={selectedProject.github}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-3 px-6 py-3 rounded-full border border-white/10 bg-white/[0.03] text-white hover:border-red-500/40 hover:text-red-300 transition"
                      >
                        Github
                      </a>
                    )}

                    {selectedProject.live && (
                      <a
                        href={selectedProject.live}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-red-600 text-white hover:bg-red-700 transition"
                      >
                        Voir le site
                        <ArrowUpRight size={16} />
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </section>
    </FadeIn>
  );
}
