import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Production et réalisation des films documentaire(création et commande)",
      icon: web,
    },
    {
      title: " Production et réalisation de fiction (création et commande)",
      icon: mobile,
    },
    {
      title: "Production et réalisation spot publicitaire, clip vidéo",
      icon: backend,
    },
    {
      title: "service de marketing ",
      icon: creator,
    },
    {
      title:"service évènementiel",
      icon:web ,
    },
    {
      title:"Le jeux d'acteur",
      icon:web ,
    },
    {
      title:" service de communication qui comprend le design, le graphisme, photographie, etc.",
      icon: web,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
    {
      name: "docker",
      icon: docker,
    },
  ];
  
  const experiences = [
    {
      title: "Le management",
      company_name: "",
      icon: meta,
      iconBg: "#383E56",
      date: "March 2020 - April 2021",
      points: [
        "Planifier le tournage",
        "Obtenir les autorisations nécessaires auprès de l'Aviation Civile.",
      ],
    },
    {
      title: "L'agencement",
      company_name: "",
      icon: meta,
      iconBg: "#E6DEDD",
      date: "Jan 2021 - Feb 2022",
      points: [
        "Locations",
        "logistique",
        "repérage des lieux",
      ],
    },
    {
      title: "Création du scénario",
      company_name: "",
      icon: meta,
      iconBg: "#383E56",
      date: "Jan 2022 - Jan 2023",
      points: [
        "Ecriture et voix-off.",
      ],
    },
    {
      title: "Réalisation/Production",
      company_name: "",
      icon: meta,
      iconBg: "#E6DEDD",
      date: "Jan 2023 - Present",
      points: [
        "Prise de séquences",
        "Interviews",
        "Plans aériens",
      ],
    },
    {
      title: "Post-production ",
      company_name: "",
      icon: meta,
      iconBg: "#E6DEDD",
      date: "Jan 2023 - Present",
      points: [
        "Montage",
        "Effets spéciaux",
        "Bruitages",
        "Intégration de la voix-off.",
      ],
    },
    {
      title: "Production executive",
      company_name: "",
      icon: meta,
      iconBg: "#E6DEDD",
      date: "Jan 2023 - Present",
      points: [
        "Accompagnement du client dans la réalisation de son projet audiovisuel.",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "2014-2015",
      descriptions:
        ["Production du film documentaire The springboard"],
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://github.com/",
    },
    {
      name: "2013",
      descriptions:[
        "Production de SANA  un film de floriane KANEZA",

        "Production de WELCOME HOME un film de Joseph NDAYISENGA",
        
        "Production de INSIMBABISAKA un film documentaire de Olivier ITURERERE",
        
        "Production du film documentaire KILO 8 de Olivier ITURERERE",
      ],
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "restapi",
          color: "green-text-gradient",
        },
        {
          name: "scss",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/",
    },
    {
      name: "2012",
      descriptions:
        "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "supabase",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };
  