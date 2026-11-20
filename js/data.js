/**
 * Single source of truth for all editable portfolio content.
 */
export const portfolioData = {
  personalInfo: {
    name: "Shawon Gazi",
    headline: "Computer Science Student | Aspiring Software Developer",
    location: "Dhaka, Bangladesh",
    email: "gazishawon999@gmail.com",

    profileImage: "assets/images/profile.jpg",
    profileImageAlt: "Professional portrait of Shawon Gazi",

    introduction:
      "I am a Computer Science and Engineering student passionate about web development and software engineering. I enjoy building practical applications, exploring new technologies, and solving problems through programming.",

    about: [
      "I am pursuing a Bachelor of Science in Computer Science and Engineering at Eastern University, Bangladesh.",
      "My programming journey started with learning programming fundamentals and gradually expanded into web development. I have experience working with HTML, CSS, JavaScript, and modern frontend technologies.",
      "Currently, I am improving my skills in React, TypeScript, and full-stack web development by building practical projects.",
      "My goal is to become a skilled software developer and contribute to meaningful real-world applications.",
    ],

    interests: ["Web development", "Software engineering"],
    resumeUrl: "assets/Shawon_Gazi_Resume_Updated.pdf",
    availability: null,

    // NEW: Words that rotate in the hero typing effect
    typingItems: [
      "JavaScript",
      "React.js",
      "Next.js",
      "TypeScript",
      "Node.js",
      "MongoDB",
    ],
  },

  socialLinks: {
    github: "https://github.com/gazishawon999/",
    linkedin: "https://www.linkedin.com/in/gazishawon999/",
  },

  education: [
    {
      id: "university",
      level: "University",
      institution: "Eastern University",
      qualification: "B.Sc. in Computer Science & Engineering",
      details: [
        { label: "CGPA", value: "3.29" },
        { label: "Expected Graduation", value: "2027" },
      ],
    },
    {
      id: "hsc",
      level: "HSC",
      institution: "Aman Ullah College",
      qualification: "Science",
      details: [
        { label: "GPA", value: "4.75" },
        { label: "Passing Year", value: "2021" },
      ],
    },
    {
      id: "ssc",
      level: "SSC",
      institution: "Chenchri Ram Pur Secondary School",
      qualification: "Science",
      details: [
        { label: "GPA", value: "4.50" },
        { label: "Passing Year", value: "2019" },
      ],
    },
  ],

  skills: [
    {
      id: "languages",
      category: "Programming Languages",
      icon: "code",
      status: "worked-with",
      items: ["C", "Java", "JavaScript"],
    },
    {
      id: "frontend",
      category: "Frontend",
      icon: "layout",
      status: "worked-with",
      items: ["HTML5", "CSS3", "JavaScript", "React.js"],
    },
    {
      id: "backend",
      category: "Backend",
      icon: "server",
      status: "worked-with",
      items: ["Node.js", "Express.js"],
    },
    {
      id: "database",
      category: "Database",
      icon: "database",
      status: "worked-with",
      items: ["MySQL", "MongoDB"],
    },
    {
      id: "tools",
      category: "Development Tools",
      icon: "terminal",
      status: "worked-with",
      items: ["Git", "GitHub", "Visual Studio Code"],
    },
    {
      id: "learning",
      category: "Currently Learning",
      icon: "sparkles",
      status: "learning",
      items: ["TypeScript", "Next.js", "Full Stack Web Development"],
    },
  ],

  projects: [
    {
      id: "studiospace",
      index: "01",
      title: "StudioSpace",
      description:
        "A full-stack workspace and studio booking platform featuring user authentication, studio management, booking management, and user dashboards.",
      image: "assets/images/studiospace.png",
      imageAlt: "StudioSpace booking platform interface",
      technologies: [
        "Next.js",
        "TypeScript",
        "Tailwind CSS",
        "shadcn/ui",
        "Node.js",
        "Express.js",
        "MongoDB",
        "Better Auth",
        "JWT",
      ],
      links: {
        live: "https://studiospace-client-orpin.vercel.app",
        github: "https://github.com/gazishawon999/studiospace-client",
      },
    },
    {
      id: "bazardor",
      index: "02",
      title: "BazarDor",
      description:
        "A Bengali daily market price tracking application that allows users to explore products, categories, and market-related information.",
      image: "assets/images/bazardor.png",
      imageAlt: "BazarDor market price tracking app interface",
      technologies: [
        "Next.js",
        "React",
        "TypeScript",
        "Tailwind CSS",
        "API Integration",
      ],
      links: {
        live: "https://bazar-dor-h23v.vercel.app/",
        github: "https://github.com/gazishawon999/bazar-dor",
      },
    },
    {
      id: "nexmeet-video-conferencing",
      index: "03",
      title: "🎥 NexMeet — Private Video Conferencing Platform",
      description:
        "A real-time video conferencing platform featuring private meeting rooms, HD video calls, screen sharing, live chat, and advanced host controls—all without requiring user registration or login.",
      image: "assets/images/nexmeet-video-conferencing.png",
      imageAlt: "NexMeet video conferencing platform interface",
      technologies: [
        "React",
        "Next.js",
        "TypeScript",
        "Tailwind CSS",
        "WebRTC",
        "LiveKit",
        "vercel",
      ],
      links: {
        live: "https://my-meet-app-nu.vercel.app/",
        github: "https://github.com/gazishawon999/my-meet-app",
      },
    },

    {
      id: "fitness-management-system",
      index: "04",
      title: "Fitness Management System",
      description:
        "Fitness Management is a modern web application that helps users plan workouts, manage fitness activities, and track progress through personalized workout plans and an intuitive interface.",
      image: "assets/images/fitness-management-system.png",
      imageAlt: "Fitness Management System interface",
      technologies: [
        "Next.js",
        "React",
        "JavaScript",
        "Tailwind CSS",
        "Node.js",
        "REST API",
      ],
      links: {
        live: "https://fitness-management-system.vercel.app/",
        github: "https://github.com/gazishawon999/fitness-management-system",
      },
    },
  ],

  learningJourney: [
    {
      id: "fundamentals",
      title: "Programming Fundamentals",
      description:
        "Started with the basics of programming while learning C and Java.",
    },
    {
      id: "web-foundations",
      title: "Web Development Foundations",
      description:
        "Moved into HTML, CSS, and JavaScript and began building practical interfaces.",
    },
    {
      id: "modern-frontend",
      title: "Modern Frontend",
      description:
        "Explored React and component-based development through hands-on projects.",
    },
    {
      id: "full-stack",
      title: "Full-Stack Exploration",
      description:
        "Currently improving TypeScript, Next.js, and full-stack development by building practical projects.",
    },
  ],
};
