"use client";

const projectsPageText = {
  intro: {
    header: "Projects Summarised",
    columns: [
        {
            title: "1",
            subtitle: "Academic project",
            description:
            "I’ve contributed to an academic project focused on technology, sustainability, and social welfare. This project allowed me to apply my problem-solving and teamwork skills to create impactful solutions.",
        },
        {
            title: "3",
            subtitle: "Personal & collaborative projects",
            description:
            "I’ve worked on various personal and collaborative projects, applying my skills in real-world scenarios. These experiences have allowed me to innovate and drive progress both individually and in teams.",
        },
        {
          title: "2",
          subtitle: "Freelance projects",
          description:
            "I’ve completed one freelance project in industries like tech, education, and administration. I helped a business improve their digital presence with tailored solutions. I’m open to new freelance opportunities.",
        },
    ],
    ctaLink: {
      text: "Contact me",
    },
  },
  projects: [
        {
            name: "AI Building Applications",
            description: "A collaborative project between NTNU and Norkart, focusing on streamlining and improving the building application process in Kristiansand Municipality using AI solutions by KartAI (a Norkart project). This semester project involved working with a customer using agile development methods and marked my first official publication by NTNU.",
            github: "https://github.com/kartAI/ntnu-kpro-ai-assistant",
            id: "kartai",
            type: "Academic project",
            tag: "academic",
            skills: ["AI integration", "Agile development", "Customer collaboration", "Publication"],
            notes: "Learned the importance of agile methods and customer collaboration in AI-driven projects.",
            links: [
                {
                    text: "Read the full publication",
                    link: "/documents/Kundestyrt_Prosjekt_Rapport.pdf"
                }
            ]
        },
        {
            name: "Portfolio Website",
            description: "A personal website designed to showcase my skills, projects, and career journey beyond my CV. Built with a modern stack including React, Next.js, CSS, and hosted on Vercel, it offers smooth navigation, animations, and a responsive design.",
            github: "https://github.com/magnusgiverin/portfolio",
            website: "https://giverin.vercel.app",
            id: "portfolio",
            type: "Personal project",
            tag: "personal",
            skills: ["React", "Next.js", "CSS", "Animations", "Responsive", "Vercel", "UI design"],
            notes: "Focused on clean UI design and responsive behavior with modern web technologies. Furthermore, This was the first time i worked with CSS as i only used Tailwind before. This allowed me to expand my skillset as well as being an incredibly effective procrastination project for the Autumn 2024 exam period at NTNU.",
        },
        {
            name: "Bymuseet i Levanger",
            description: "A website developed for the City Museum of Levanger, designed to showcase the museum’s locations, history, and exhibits. The project involved collaboration with the museum’s board to ensure accurate and user-friendly content.",
            github: "https://github.com/magnusgiverin/bymuseet",
            website: "https://bymuseet.com",
            id: "bymuseet",
            type: "Freelance work",
            tag: "freelance",
            skills: ["HTML", "React", "TypeScript", "Tailwind", "Next.js", "Node.js", "Vercel", "Freelancing"],
            notes: "Gained valuable experience in collaborating with clients and delivering user-focused websites. This was my first freelance project, and allowed me to gain insights into the proecesses behind working with a customer, with countless iterations of user-feedback",
        },
        {
            name: "Timeplaner.net",
            description: "A calendar management tool designed for NTNU students to organize and visualize their schedules, integrating multiple NTNU APIs and scraping unavailable data.",
            github: "https://github.com/magnusgiverin/timeplaner",
            website: "https://timeplaner.net",
            id: "timeplaner",
            type: "Personal project",
            tag: "personal",
            skills: ["API integration", "Web scraping", "Web caches", "Python", "Collaboration"],
            notes: "Refined skills in API integration and learned the importance of efficient data scraping and caching techniques. This project came as a result of finding issues with using Python as a frontend tool in the CalOne project. In addition to this, it marked my first solo-project using Typescript and other moderne web development frameworks.",
        },
        {
            name: "NORSTEC web",
            description: "NORSTEC is a collective for students working with space technologies in Norway. I was tasked with elevating their web presence by developing their homepage with a designer to make NORSTEC more accessible for students and the Norwegian space industry.",
            github: "https://github.com/magnusgiverin/norstec-website",
            website: "https://norstec.no",
            id: "norstec",
            type: "Freelance work",
            tag: "freelance",
            skills: ["HTML", "Sanity", "React", "TypeScript", "Tailwind", "Next.js", "Figma", "Freelancing"],
            notes: "Worked with a designer to develop a website which fit the needs of NORSTEC while also being visually appealing. Furthermore, the desire to have a content management system (CMS) allowed me to explore new technologies and make the website easily updatable for NORSTEC.",
        },
        {
            name: "Calone.com",
            description: "A precursor to Timeplaner.net, focused on parsing and interpreting NTNU data using Python. Highlighted challenges of Python’s performance in web development and motivated a shift to a modern stack.",
            website: "https://calone.com",
            id: "calone",
            type: "Collaborative project",
            tag: "personal",
            skills: ["Python", "Data parsing", "Version control", "Collaboration", 'Java'],
            notes: "This project started as a tool for allowing students at NTNU to better generate and maintain their class calendars. As a result of slight creative differences and performance issues with Python in web development, I opted to create an enhanced version ussing proper version control and a more performant tech stack.",
        },
]

};

export default projectsPageText;
