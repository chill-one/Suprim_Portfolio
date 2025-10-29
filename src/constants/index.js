import {
    problem_solving ,
    backend,
    student,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    python,
    tailwind,
    nodejs,
    mongodb,
    git,
    c,
    springboot,
    gmu,
    pixel,
    vw,
    library,
    ScientificTree,
    homeScout,
    vtHack,
    advising,
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
      title: "Web Developer",
      icon: web,
    },
    {
      title: "Problem solver ",
      icon: problem_solving ,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Student",
      icon: student,
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
      name: "Python",
      icon: python,
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
      name: "C",
      icon: c,
    },
    {
      name: "Spring Boot",
      icon: springboot,
    },
  ];
  
  const experiences = [
    {
      title: "Library Volunteer",
      company_name: "Central library",
      icon: library,
      iconBg: "#383E56",
      date: "Jun 2021 - July 2022",
      points: [
        "Assisted in digitizing the library's records for better management of the database. Ensured faster retrieval time, increased by a factor of 30%.",
        "Carried out routine IT maintenance checks weekly with efficiency and system integrity."
      ],
    },

    {
      title: "Service Assistant",
      company_name: "Lindsay Volkswagen",
      icon: vw,
      iconBg: "#E6DEDD",
      date: "Jan 2023 - Present",
      points: [
        "Invoiced and cataloged all the information in a comprehensive database that allowed service advisors to access and review the history of the vehicles efficiently.",
        "Consulted customers to understand vehicle problems and scheduled the appointment for services internally using the CDK and Xtime platforms to offer better customer service and operational efficiency."
      ],
    },

    {
      title: "VT Hackathon",
      company_name: "Virgina Tech Uniersity",
      icon: vtHack,
      iconBg: "#E6DEDD",
      date: "Sep 12 2024 – Sep 14 2024",
      points: [
        "Designed and implemented an AI-powered recommendation engine using Azure OpenAI, integrated with NLP for understanding user preferences and machine learning algorithms to improve the recommendation accuracy over time.",
        "Worked on the actual implementation of the Midnight Blockchain with zero-knowledge proofs/ZK Snarks and smart contracts that enable the confidentiality of data and sensitive user information.",
        "This entailed developing a comprehensive Full Stack Solution using React.js for the front end, allowing for an enhanced user experience, with its backend integrating real-time APIs and a MongoDB database for handling varied datasets.",
        "Identified issues related to real-world challenges: syncing frequently updated data from external APIs and system performance optimization for real-time, personalized recommendations at scale."
      ],
    },
    {
      title: "Computer Science Student",
      company_name: "George Mason University",
      icon: gmu,
      iconBg: "#E6DEDD",
      date: "Aug 2023 - Present",
      points: [
        "Spatial indexing system utilizing a quad tree data structure and optimized through a circular queue for querying efficiency was developed.",
        "Designed an application for book inventory management, patron records, and lending operations by utilizing object-oriented programming.",
        "An engineered dynamic array-based queue management system was used to simulate and optimize restaurant seating efficiency.",
        "Several caching algorithms are implemented with linked lists to demonstrate performance and efficiency differences.",
        "I programmed a checkers game that showcases artificial intelligence opponents, employing advanced algorithms to ensure competitive gameplay."
      ],
    },
    {
      title: "Computer Science Student",
      company_name: "George Mason University",
      icon: gmu,
      iconBg: "#E6DEDD",
      date: "Jan 2023 - Present",
      points: [
        "Spatial indexing system utilizing a quad tree data structure and optimized through a circular queue for querying efficiency was developed.",
        "Designed an application for book inventory management, patron records, and lending operations by utilizing object-oriented programming.",
        "An engineered dynamic array-based queue management system was used to simulate and optimize restaurant seating efficiency.",
        "Several caching algorithms are implemented with linked lists to demonstrate performance and efficiency differences.",
        "I programmed a checkers game that showcases artificial intelligence opponents, employing advanced algorithms to ensure competitive gameplay."
      ],

    }
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
      name: "Home Scout AI",
      description:"Developed an AI-powered real estate platform integrating MongoDB, Azure OpenAI, Midnight Blockchain,React.js, Node.js, and Express.js to provide personalized home recommendations while ensuring data privacy.",
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
          name:"beautiful-soup",
          color:"blue-text-gradient",
        },
        {
          name:"azurai",
          color:"green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: homeScout,
      source_code_link: "https://github.com/BisweshD/RealEstateExtension",
    },
    {
      name: "Scientific Tree",
      description:
        "This project involved several implementations of tree data structure representation along with algorithms for tree traversals, which further helped me understand the linked tree, parent pointer tree, array tree, and merging tree. In this project, I learn using different tree structures, optimizing algorithms for efficiency to meet Big-O requirements, applying good practices in coding like helper methods and good documentation and style of code.",
      tags: [
        {
          name: "java",
          color: "pink-text-gradient",
        },
        {
          name:"java gui",
          color:"blue-text-gradient",
        },
        {
          name:"tress and tress traversal",
          color:"pink-text-gradient",
        },
        {
          name:"data structure",
          color:"green-text-gradient",
        },
        
      ],
      image: ScientificTree,
      source_code_link: "https://github.com/",
      schoolProject: true,
    },
    {
      name: "Academic Advising System",
      description:
        "The project involved creating an academic advising system using graphs and priority queues to perform topological sorts, which taught me an advanced data structure implementation and enhanced my ability to manage and prioritize tasks within a software development context.",
      tags: [
        {
          name: "java",
          color: "pink-text-gradient",
        },
        {
          name:"graph and graph traversal",
          color:"pink-text-gradient",
        },
        {
          name:"data structure",
          color:"green-text-gradient",
        },

      ],
      image: advising,
      source_code_link: "https://github.com/",
      schoolProject: true,
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };