'use client';

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
    "about": {
        "title": "About",
        "teaser": [
            `A ${getAge()}-year-old tech enthusiast based in Trondheim, Norway. It all began with LEGO bricks and evolved through LEGO Technic and Minecraft to Python and TypeScript. Building, whether physical or digital, has always been at the core of what I enjoy.`,
            "Today, my focus is on solving real-world problems through technology. I’m driven by the balance between functionality and design, creating solutions that don’t just perform, but feel cohesive and intuitive. Outside of development, I spend time exploring Norway’s landscapes, exploring with friends, or staying current on the latest in tech and design."
        ],
        "invitation": [
            "Learn more about the person behind the projects and explore the journey so far."
        ],
        "redirect": "/about",
        "buttonText": "Learn More About Me"
    },
    "career": {
        "title": "Career",
        "teaser": [
            "From early freelance projects to managing complex tech initiatives, each role has added a new layer of skills and insights. These experiences, from developing custom solutions to leading teams, have shaped a comprehensive approach to technology and problem-solving.",
            "Specializing in full-stack development, database architecture, and effective workflows, I focus on delivering meaningful, scalable solutions. With each project, I prioritize staying at the forefront of technology trends, ensuring that my work is both innovative and impactful."
        ],
        "invitation": [
            "Explore my career journey and the experiences that continue to shape my approach."
        ],
        "redirect": "/career",
        "buttonText": "Explore My Career Journey"
    },
    "projects": {
        "title": "Projects",
        "teaser": [
            "Each project represents a commitment to tackling unique challenges and building efficient, impactful solutions. From intuitive UI/UX to solid backend systems, my work is driven by a focus on both form and function.",
            "Behind every project lies a story—the initial challenge, the strategic approach, and the technical design that brought it to life. Dive into these projects to understand how creativity and engineering come together to build tools that last."
        ],
        "invitation": [
            "Discover the work that defines my approach to technology and innovation."
        ],
        "redirect": "/projects",
        "buttonText": "Explore My Projects"
    },
    "skills": {
        "title": "Skills",
        "teaser": [
            "Bringing together a solid foundation in web development, I work across both frontend and backend technologies with a focus on performance, security, and scalability. My skill set spans from modern front-end frameworks like React and Next.js to backend solutions that ensure a seamless flow from start to finish.",
            "Effective version control, testing, and team collaboration are at the core of my process, ensuring each project meets both technical and user-focused standards. Whether in solo development or as part of a team, I’m committed to continuous improvement and the pursuit of quality in every project."
        ],
        "invitation": [
            "Explore the tools and technologies that form the foundation of my work."
        ],
        "redirect": "/skills",
        "buttonText": "See My Full Skillset"
    }
}

export default landingPageText;