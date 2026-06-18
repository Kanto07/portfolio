import socobis from "../assets/socobis.png";
import socobis1 from "../assets/socobis1.png";
import socobis2 from "../assets/socobis2.png";
import socobis3 from "../assets/socobis3.png";

import elend from "../assets/elend.png";

import terri1 from "../assets/terri1.png";
import terri2 from "../assets/terri2.png";
import terri3 from "../assets/terri3.png";

import coiffure from "../assets/coiffure.png";

import qic1 from "../assets/qic_login.png";
import qic2 from "../assets/qic_analyse.png";
import qic3 from "../assets/qic_analyse1.png";
import qic4 from "../assets/qic_dossier.png";
import qic5 from "../assets/qic_funnel1.png";
import qic6 from "../assets/qic_opportunites.png";
import qic7 from "../assets/qic_opportunites_details.png";

import mobile from "../assets/mobile.png";
import mobile1 from "../assets/mobile1.png";
import mobile2 from "../assets/mobile2.png";
import mobile3 from "../assets/mobile3.png";
import mobile4 from "../assets/mobile4.png";
import mobile5 from "../assets/mobile5.png";
import mobile6 from "../assets/mobile6.png";

import boq from "../assets/boq.png";
import boq1 from "../assets/boq1.png";
import boq2 from "../assets/boq2.png";
import boq3 from "../assets/boq3.png";
import boq4 from "../assets/boq4.png";
import boq5 from "../assets/boq5.png";

export const projects = [
  {
    id: 1,
    title: "Gescommande",
    type: "Projet en entreprise",
    category: "socobis",
    image: socobis,
    description:
      "Développement d'une application web de gestion des commandes clients avec enregistrement, suivi et gestion des opérations commerciales.",

    tech: ["HTML5", "Tailwind CSS", "PHP", "MySQL", "JavaScript"],
    github: "https://github.com/Kanto07/gescommande",
    live: "",
    screenshots: [socobis1, socobis2, socobis3],
  },

  {
    id: 2,
    title: "Maitso Milalao",
    type: "Projet Personnel",
    category: "Application mobile",
    image: mobile,

    description:
      "Application mobile et desktop permettant la gestion des informations des membres d'une organisation de scoutisme avec centralisation des données via Firebase.",

    tech: ["React Native", "Firebase", "Expo"],

    github: "https://github.com/Kanto07/maitso-milalao.git",
    live: "",
    screenshots: [mobile1, mobile2, mobile3, mobile4, mobile5, mobile6],
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
    title: "Gestion de présence",
    type: "Projet Personnel",
    category: "Ecole de musique",
    image: terri1,

    description:
      "Logiciel de gestion développé pour une école de musique permettant le suivi des paiements des élèves par mois et par année, la gestion des dépenses et des charges de l'établissement ainsi que l'analyse des bénéfices financiers.",

    tech: ["C#", "entity framework", "SQL Server", "SQL"],

    github: "https://github.com/Kanto07/gestion-de-presence.git",
    live: "",
    screenshots: [terri1, terri2, terri3],
  },
  {
    id: 5,
    title: "Salon de Coiffure (Style Bruxelles Palermo)",
    type: "Projet en entreprise",
    category: "MG-Consulting IT&ACT",
    image: coiffure,

    description:
      "Développement d'un site vitrine moderne pour un salon de coiffure en Belgique avec optimisation responsive et intégration d'une interface élégante.",

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
      "Participation au développement d'une application métier professionnelle.",

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
    live: "https://app-qic.be",
    screenshots: [qic1, qic2, qic3, qic4, qic5, qic6, qic7],
  },

  {
    id: 7,
    title: "Inventory-issue",
    type: "Projet de stage",
    category: "I'TWOCOM & SERVICE",
    image: boq,

    description:
      "Application qui consiste à créer un logiciel qui gérer la sortie de stock dans une société cible",

    tech: ["C#", "entity framework", "SQL Server", "SQL"],
    github: "",
    live: "",
    screenshots: [boq, boq1, boq2, boq3, boq4, boq5],
  },
];
