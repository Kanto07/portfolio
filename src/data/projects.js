import gescom from "../assets/commande_gescom.png";
import elend from "../assets/elend.png";
import terri from "../assets/terri.png";
import coiffure from "../assets/coiffure.png";
import qic1 from "../assets/coiffure.png";
import qic2 from "../assets/coiffure.png";
import qic3 from "../assets/coiffure.png";

export const projects = [
  {
    id: 1,
    title: "Gescommande",
    type: "Projet en entreprise",
    category: "socobis",
    image: gescom,
    description:
      "Développement d'une application web de gestion des commandes clients avec enregistrement, suivi et gestion des opérations commerciales.",

    tech: ["HTML5", "Tailwind CSS", "PHP", "MySQL", "JavaScript"],

    github: "https://github.com/Kanto07/gescommande",

    live: "",
  },

  {
    id: 2,
    title: "Maitso Milalao",
    type: "Projet Personnel",
    category: "Application mobile",
    image: "/images/sampati.jpg",

    description:
      "Application mobile et desktop permettant la gestion des informations des membres d'une organisation de scoutisme avec centralisation des données via Firebase.",

    tech: ["React Native", "Firebase", "Expo"],

    github: "",

    live: "",
  },

  {
    id: 3,
    title: "E-LEND",
    type: "Projet de stage",
    category: "Konecta",
    image: elend,

    description:
      "Application permettant de gérer le prêt et la restitution du matériel au sein d'une entreprise. Garantir un suivi précis des équipements, d'éviter les pertes et d'améliorer la gestion des stocks",

    tech: ["HTML5/CSS3", "Javascript", "MySQL", "PHP"],

    github: "https://github.com/Kanto07/suivi-materiel.git",

    live: "",
  },

  {
    id: 4,
    title: "Benchmark TotalEnergies",
    type: "Projet Personnel",
    category: "Fullstack",
    image: terri,

    description:
      "Projet d'un école de musqiue pour gérer les dépenses et les charges.",

    tech: ["C#", "entity framework", "SQL Server", "SQL"],

    github: "",

    live: "",
  },
  {
    id: 5,
    title: "Style Bruxelles Palermo",
    type: "Projet en entreprise",
    category: "MG-Consulting IT&ACT",
    image: coiffure,

    description:
      "Développement d’un site vitrine moderne pour un salon de coiffure en Belgique avec optimisation responsive et intégration d’une interface élégante.",

    tech: ["Nuxt.js", "Tailwind CSS", "git", "gitlab"],

    github: "",

    live: "https://www.style-bruxelles-palermo.be/",
  },
  {
    id: 6,
    title: "QIC",
    type: "Projet en entreprise",
    category: "MG-Consulting IT&ACT",
    image: qic1,

    description:
      "Participation au développement d’une application métier professionnelle.",

    tech: [
      "Symfony",
      "JavaScript",
      "Tailwind CSS",
      "MySQL",
      "Docker",
      "Git",
      "Gitlab",
    ],

    github: "",

    live: "",

    screenshots: [qic1, qic2, qic3],
  },
];
