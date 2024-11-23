"use client";

const getAge = () => {
  const today = new Date();
  const birthday = new Date(2003, 4, 30);
  let age = today.getFullYear() - birthday.getFullYear();
  const m = today.getMonth() - birthday.getMonth();
  if (m < 0 || (m === 0 && today.getDate() < birthday.getDate())) {
    age--;
  }
  return age;
};

const landingPageText = {
  information: {
    title: "Introduction",
    introduction: {
        text: "Hello, I'm Magnus Andreas Giverin.",
      },
      cvOverview: {
        text: "This portfolio is intended to expand on my CV with detailed insights into my projects.",
      },
      openForOpportunities: {
        text: "I’m also available for freelance work.",
        links: [
            {
                text: "Read my CV",
                url: "/documents/CV.pdf",
            },
          {
            text: "Career journey summarised",
            url: "#career",
          },
          {
            text: "Overview of Projects",
            url: "#projects",
          }, 
        ],
      },
    sections: [
      {
        title: "Who is Magnus?",
        description:
          "I am a technology-driven leader with a strong background in IT development and process improvement. I am passionate about how technology can improve work processes, and I have had the privilege of working across various sectors to deliver innovative solutions.",
        ctaLink: {
          text: "Read more about me",
          url: "/about#",
        },
      },
      {
        title: "My Journey and Future Goals",
        description:
          "From a young age, I was captivated by technology, which sparked my interest in IT. Over the years, I've gained valuable experience through education and hands-on projects. Reflecting on my journey, I've grown both personally and professionally, and I'm now focused on using my skills to drive impactful solutions that foster efficiency and collaboration across industries.",
        ctaLink: {
          text: "Explore my education",
          url: "/about#education",
        },
      },
    ],
  },
  about: {
    header: "About me",
    columns: [
      {
        title: getAge(),
        subtitle: "Years old",
        description:
          "I am " +
          getAge() +
          " years old, and in this short time, I have had the opportunity to work on several exciting projects. I am proud of what I have achieved so far and look forward to growing further both professionally and personally.",
      },
      {
        title: "3",
        subtitle: "Industries",
        description:
          "My experience spans multiple industries, including technology, education, and administration. I have gained insight into how technology can transform organizations and have been a driving force in making this possible.",
      },
      {
        title: "9+",
        subtitle: "Years Abroad",
        description:
          "British-Norwegian dual national with 9 years abroad in Mexico, Sudan, the UK, and Indonesia. Fluent in Norwegian, English, and Spanish. Passionate about problem-solving, teamwork, and applying knowledge to drive innovation and societal impact.",
      },
    ],
    ctaLink: {
      text: "View my timeline",
      url: "/about#timeline",
    },
    sections: [
      {
        title: "Who is Magnus?",
        description:
          "I am a technology-driven leader with a strong background in IT development and process improvement. I am passionate about how technology can improve work processes, and I have had the privilege of working across various sectors to deliver innovative solutions.",
        ctaLink: {
          text: "Read more about me",
          url: "/about#",
        },
      },
      {
        title: "My Journey and Future Goals",
        description:
          "From a young age, I was captivated by technology, which sparked my interest in IT. Over the years, I've gained valuable experience through education and hands-on projects. Reflecting on my journey, I've grown both personally and professionally, and I'm now focused on using my skills to drive impactful solutions that foster efficiency and collaboration across industries.",
        ctaLink: {
          text: "Explore my education",
          url: "/about#education",
        },
      },
    ],
  },
  career: {
    title: "My Career Journey",
    positions: [
      {
        title: "OSS Engineer Intern",
        company: "Telenor Norway",
        description:
          "Refactored microservices and implemented new customer payment functionality. Conducted risk analysis and presented findings to the Board of Directors.",
        dates: {
          from: "June 2024",
          to: "August 2024",
        },
        location: "Oslo, Norway",
      },
      {
        title: "CIO",
        company: "Orbit NTNU",
        description:
          "Managed two IT teams and oversaw the implementation of a new member management tool while minimizing technical debt.",
        dates: {
          from: "February 2024",
          to: "Present",
        },
        location: "Trondheim, Norway",
      },
      {
        title: "Web Team Leader",
        company: "Orbit NTNU",
        description:
          "Led a team of 6 in developing a new intranet service and connected it to the new IT ground system.",
        dates: {
          from: "August 2023",
          to: "February 2024",
        },
        location: "Trondheim, Norway",
      },
      {
        title: "Full-stack Developer Intern",
        company: "Kommunal Landspensjonskasse (KLP)",
        description:
          "Refactored client-side logic and developed new APIs for the 'pension agreements' page on the KLP website.",
        dates: {
          from: "June 2023",
          to: "August 2023",
        },
        location: "Trondheim, Norway",
      },
      {
        title: "Teaching Assistant",
        company: "Norwegian University of Science and Technology (NTNU)",
        description:
          "Assisted in teaching Object-Oriented Programming, Python, and Advanced Software Engineering courses, and corrected assignments.",
        dates: {
          from: "January 2023",
          to: "Present",
        },
        location: "Trondheim, Norway",
      },
      {
        title: "Design Team Leader",
        company: "DNV Fuel Fighters",
        description:
          "Led a team in designing a hyper-efficient road vehicle for the Shell Eco marathon competition, focusing on aerodynamics and weight-saving measures.",
        dates: {
          from: "August 2021",
          to: "January 2022",
        },
        location: "Trondheim, Norway",
      },
    ],
    ctaLink: {
      text: "Read more my career",
      url: "/career",
    },
  },
  projects: {
    personalProjects: {
      title: "My Personal Projects",
      description:
        "I am always exploring new ideas and taking on personal projects to challenge myself. These projects allow me to experiment with different technologies and concepts, and I enjoy sharing my work with others. Below are some of the projects I’ve been working on.",
    },
    ctaLink: {
      text: "Explore my projects",
      url: "/projects",
    },
    projects: [
      {
        name: "AI Building Applications",
        description:
          "A collaborative project between NTNU and Norkart, focussing around streamlining and improving upon the existing building application process in Kristiansand Municipality using existing AI solutions by KartAI (a Norkart project). This was a semester project which involved all aspects of working with a customer using agile development methods. The project marked my first official publication by NTNU.",
        github: "https://github.com/kartAI/ntnu-kpro-ai-assistant",
        ctaLink: {
          text: "Learn about the KartAI Project",
          url: "/projects#kartai",
        },
        type: "Academic + Collaborative project",
      },
      {
        name: "Portfolio Website",
        description:
          "A personal website designed to showcase my skills, projects, and career journey beyond my CV. This portfolio highlights my work, offering an interactive way for visitors to explore the technologies I work with and the projects I’ve developed. Built with a modern stack including React, Next.js, CSS, and hosted on Vercel, it offers smooth navigation, animations, and a responsive design.",
        github: "https://github.com/magnusgiverin/portfolio",
        ctaLink: {
          text: "Read more about Portfolio",
          url: "/projects#portfolio",
        },
        type: "Personal project",
      },
      {
        name: "Bymuseet i Levanger",
        description:
          "A website developed for the City Museum of Levanger, designed to showcase the museum’s locations, history, and exhibits. The project involved extensive collaboration with the museum’s board to ensure accurate and user-friendly content. Technologies used include HTML, React, Typescript, Tailwind, Next.js, Node.js, and Vercel.",
        github: "https://github.com/magnusgiverin/bymuseet",
        website: "https://bymuseet.com",
        ctaLink: {
          text: "Learn more about Bymuseet",
          url: "/projects#bymuseet",
        },
        type: "Freelance work",
      },
      {
        name: "Timeplaner.net",
        description:
          "A calendar management tool designed for students at NTNU to organize and visualize their schedules. The app integrates with multiple NTNU APIs to provide students with a user-friendly UI for managing their academic calendar. It also includes a feature for scraping data from NTNU websites, ensuring access to unavailable API data, and enables local saving functionality through web caches.",
        github: "https://github.com/magnusgiverin/timeplaner",
        website: "https://timeplaner.net",
        ctaLink: {
          text: "Read about Timeplaner",
          url: "/projects#timeplaner",
        },
        type: "Personal project",
      },
      {
        name: "Calone.com",
        description:
          "A precursor to Timeplaner.net, this project focused on parsing and interpreting NTNU data using Python. It highlighted challenges related to Python’s performance in web development, which motivated the transition to a more modern tech stack. The project also provided experience with version control using Git and working within a small team.",
        website: "https://calone.com",
        ctaLink: {
          text: "Learn more about CalOne",
          url: "/projects#calone",
        },
        type: "Collaborative project",
      },
    ],
  },
  skills: {
    table: {
      programmingLanguages: {
        title: "Programming Languages",
        skills: [
          "Assembly (x86)",
          "C",
          "C++",
          "Java",
          "JavaScript",
          "Kafka",
          "Kotlin",
          "Oz",
          "Python",
          "TypeScript",
        ],
        description:
          "Languages I have used for software development, ranging from low-level to high-level programming.",
      },
      webTechnologies: {
        title: "Web Technologies",
        skills: [
          "CSS",
          "HTML",
          "React",
          "Next",
          "Node",
          "Tailwind",
          "TRPC",
          "Vercel",
        ],
        description:
          "Web technologies and frameworks I use for building modern, interactive, and responsive websites.",
      },
      databaseSystems: {
        title: "Database Systems",
        skills: ["Azure SQL", "FireBase", "MySql", "Prisma", "SQLite"],
        description:
          "Databases I have worked with to store, manage, and query data for applications.",
      },
      cloudTechnologies: {
        title: "Cloud Technologies",
        skills: ["Azure", "Jenkins"],
        description:
          "Cloud platforms and CI/CD tools for deploying and automating cloud-based applications.",
      },
      devOpsVersionControl: {
        title: "DevOps & Version Control",
        skills: ["Git", "Gitea", "GitHub", "GitLab", "Jira"],
        description:
          "Version control systems and DevOps tools for managing source code and project tracking.",
      },
      specializedArea: {
        title: "Specialised Areas",
        skills: [
          "Frontend tools - HTML",
          "React",
          "Next",
          "Node",
          "Tailwind/CSS",
          "Typescript",
        ],
        description:
          "Specialized tools and frameworks I use for frontend web development.",
      },
      mathStatisticalTools: {
        title: "Maths & Statistics Tools",
        skills: ["PandaDF", "MatPlotLib", "NumPy"],
        description:
          "Tools for working with data, performing statistical analysis, and visualizing results.",
      },
    },
    ctaLink: {
      text: "Learn more about my skills",
      url: "/skills",
    },
  },
};

export default landingPageText;
