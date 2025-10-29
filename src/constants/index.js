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
    Omniverse,
    docker,
    USD,
    springboot,
    gmu,
    NavalResearchLaboratory,
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
    {
      name: "Omniverse",
      icon: Omniverse,
    },
    {
      name:"Docker",
      icon: docker,
    },
    {
      name:"USD",
      icon: USD,
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
      title: "Service Assistant",
      company_name: "Lindsay Volkswagen",
      icon: vw,
      iconBg: "#E6DEDD",
      date: "Jan 2023 - May 2025",
      points: [
        "Invoiced and cataloged all the information in a comprehensive database that allowed service advisors to access and review the history of the vehicles efficiently.",
        "Consulted customers to understand vehicle problems and scheduled the appointment for services internally using the CDK and Xtime platforms to offer better customer service and operational efficiency."
      ],
    },
    {
      title: "U.S. Naval Research Laboratory SWE Intern",
      company_name: "U.S. Naval Research Laboratory (NRL)",
      icon: NavalResearchLaboratory,
      iconBg: "#E6DEDD",
      date: "May 2025 - Aug 2025",
      points: [
        "Built an Omniverse USD Reference Manager extension to track and sync USD file changes (renames, soft-deletes) to Nucleus with checkpoint restore.",
        "Implemented dependency graph caching for USD references, speeding up lookups and reducing redundant traversals.",
        "Added robust change tracking (watchers, diffing) to prevent broken references and automate recovery flows.",
        "Containerized the dev/runtime with Docker multi-stage builds; standardized local and CI environments.",
        "Set up GitHub Actions CI/CD to build, test, and publish the extension on push/PR with artifact versioning.",
        "Wrote utilities to snapshot/restore paths and manage rename checkpoints across modified USD hierarchies.",
        "Instrumented structured logging and error handling to surface sync failures and edge cases clearly.",
        "Produced engineering diagrams and a 7–10 page technical report summarizing design decisions and results.",
        "Created synthetic datasets for robotic-arm scenarios and adapted pre-trained models to new tasks (transfer learning).",
      ],
    },
    {
      title: "Computer Systems and Programming Undergraduate Teaching Assistant",
      company_name: "George Mason University",
      icon: gmu,
      iconBg: "#E6DEDD",
      date: "Aug 2025 - Present",
      points: [
        "Lead weekly recitations on C, Unix tooling (bash, make), and systems programming fundamentals.",
        "Coach students through pointers, memory management, and debugging with GDB/Valgrind; demystify segfaults and race conditions.",
        "Guide labs on processes & threads (fork/exec, pipes, signals, pthreads) and synchronization (mutexes, condition variables, semaphores).",
        "Provide 1:1 help; triage questions on Ed Discussion/Piazza and write step-by-step troubleshooting guides.",
        "Assist with grading and feedback on programming assignments using checklists, unit tests, and reproducible run scripts.",
        "Promote good practices—Git workflows, code reviews, test-first debugging, and performance profiling.",
        "Collaborate with instructors/TAs to refine recitation materials and improve student learning outcomes.",
      ],
    },

    {
      title: "Computer Science Student",
      company_name: "George Mason University",
      icon: gmu,
      iconBg: "#E6DEDD",
      date: "Aug 2023 - Present",
      points: [
        "Essentials of Computer Science — Built fundamentals in algorithmic thinking and program structure; practiced problem decomposition, basic data structures, and asymptotic reasoning.",
        "Object-Oriented Programming — Applied encapsulation/inheritance/polymorphism, interfaces/abstract classes, and unit testing to design maintainable software.",
        "Intro to Low-level Programming — Wrote systems-level C with pointers and manual memory management; used bitwise ops, stack/heap models, Makefiles, and debugger-driven workflows.",
        "Data Structures — Implemented/analyzed lists, stacks/queues, heaps, hash tables, trees/graphs and algorithms (BFS/DFS, sorting, Dijkstra) with time/space trade-offs.",
        "Computer Systems and Programming — Practiced Unix systems programming: processes (fork/exec), IPC (pipes/signals), files, threads, and synchronization (mutexes/CVs).",
        "Formal Methods and Models (in progress) — Reasoning with logic, automata (DFA/NFA), regular expressions, CFGs, and Turing machines; decidability and complexity.",
        "Operating Systems (in progress) — OS internals: scheduling, virtual memory (paging/segmentation), synchronization/deadlocks, and file system design via labs.",
        "Discrete Mathematics I — Proof techniques (direct/contradiction/induction), propositional/predicate logic, sets/relations/functions, combinatorics, intro graph theory.",
        "Analytic Geometry/Calculus I — Limits/continuity, differentiation & optimization, integration basics, sequences/series and convergence tests.",
        "Analytic Geometry and Calculus II — Techniques of integration, applications, series & power series, and advanced problem solving.",
        "Analytic Geometry/Calculus III — Multivariable calculus: partial derivatives, gradients/Jacobians, multiple integrals, vector fields, and modeling.",
      ],
    }
    ,
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
      source_code_link: "https://github.com/chill-one/RealEstateAIExtension",
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