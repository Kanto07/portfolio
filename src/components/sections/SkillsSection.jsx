// SkillsSection.jsx

import { motion } from "framer-motion";

import SectionTitle from "../ui/SectionTitle";
import FadeIn from "../animations/FadeIn";

// remplace seulement ton tableau skills par ceci

const skills = [
  {
    category: "Langages",
    items: [
      {
        name: "JavaScript",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
        bg: "bg-[#F7DF1E]/10",
        border: "border-[#F7DF1E]/20",
      },
      {
        name: "PHP",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg",
        bg: "bg-[#777BB4]/10",
        border: "border-[#777BB4]/20",
      },
      {
        name: "HTML / CSS3",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
        bg: "bg-[#E34F26]/10",
        border: "border-[#E34F26]/20",
      },
      {
        name: "C#",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg",
        bg: "bg-[#68217A]/10",
        border: "border-[#68217A]/20",
      },
    ],
  },

  {
    category: "Frameworks",
    items: [
      {
        name: "Symfony",
        logo: "https://symfony.com/logos/symfony_black_03.svg",
        bg: "bg-white/5",
        border: "border-white/10",
        logoBg: "bg-white",
      },
      {
        name: "React JS",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
        bg: "bg-cyan-400/10",
        border: "border-cyan-400/20",
      },
      {
        name: "React Native",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
        bg: "bg-cyan-400/10",
        border: "border-cyan-400/20",
      },
      {
        name: "Tailwind CSS",
        logo: "https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg",
        bg: "bg-cyan-400/10",
        border: "border-cyan-400/20",
      },
    ],
  },

  {
    category: "Bases de données",
    items: [
      {
        name: "MySQL",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
        bg: "bg-[#4479A1]/10",
        border: "border-[#4479A1]/20",
      },
      {
        name: "PostgreSQL",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
        bg: "bg-[#336791]/10",
        border: "border-[#336791]/20",
      },
      {
        name: "SQL Server",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/microsoftsqlserver/microsoftsqlserver-plain.svg",
        bg: "bg-red-500/10",
        border: "border-red-500/20",
      },
    ],
  },

  {
    category: "Outils & Environnements",
    items: [
      {
        name: "Git / GitLab",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
        bg: "bg-[#F05032]/10",
        border: "border-[#F05032]/20",
      },
      {
        name: "Docker",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
        bg: "bg-[#2496ED]/10",
        border: "border-[#2496ED]/20",
      },
    ],
  },
];

export default function SkillsSection() {
  return (
    <section
      id="skills"
      className="relative mt-32 px-6 overflow-hidden bg-gradient-to-b from-[#070B14] to-[#050816]"
    >
      <div className="relative z-10 max-w-7xl mx-auto">
        <FadeIn delay={0.3}>
          <SectionTitle title="Comptétences techniques" />
        </FadeIn>

        <div className="mt-10 space-y-10">
          {skills.map((group, groupIndex) => (
            <motion.div
              key={group.category}
              initial={{
                opacity: 0,
                x: groupIndex % 2 === 0 ? -200 : 200,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              viewport={{
                once: false,
                amount: 0.2,
              }}
              transition={{
                duration: 3,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="relative"
            >
              {/* category */}
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-[1px] bg-red-500" />

                <h3 className="text-white uppercase tracking-[0.3em] text-sm font-semibold">
                  {group.category}
                </h3>
              </div>

              {/* tech grid */}
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
                {group.items.map((tech, index) => (
                  <motion.div
                    key={tech.name}
                    initial={{
                      opacity: 0,
                      y: 40,
                    }}
                    whileInView={{
                      opacity: 1,
                      y: 0,
                    }}
                    viewport={{ once: false }}
                    transition={{
                      duration: 0.5,
                      delay: index * 0.08,
                    }}
                    whileHover={{
                      y: -6,
                      scale: 1.05,
                    }}
                    className="relative flex flex-col items-center text-center"
                  >
                    {/* logo */}
                    <div
                      className={`w-16 h-16 rounded-full flex items-center justify-center border ${tech.border} ${tech.logoBg || "bg-[#0B0F19]"} shadow-[0_0_30px_rgba(255,0,0,0.08)]`}
                    >
                      <img
                        src={tech.logo}
                        alt={tech.name}
                        className="w-8 h-8 object-contain"
                      />
                    </div>

                    {/* name */}
                    <h4 className="mt-3 text-white font-medium tracking-wide text-[11px] uppercase leading-5">
                      {tech.name}
                    </h4>

                    {/* animated line */}
                    <motion.div
                      initial={{ width: 0 }}
                      whileHover={{ width: "100%" }}
                      transition={{ duration: 0.4 }}
                      className="absolute -bottom-2 left-0 h-[2px] bg-gradient-to-r from-red-700 to-red-500"
                    />
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
