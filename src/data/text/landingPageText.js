'use client';

const getAge = () => {
    const today = new Date();
    const birthday = new Date();
    birthday.setFullYear(2003, 4, 30);

    return today.getFullYear() - birthday.getFullYear()
}

const landingPageText = {
    "about": {
        "title": "About",
        "teaser": [
            "Hello! I'm a " + getAge() + "-year-old based in Trondheim, Norway. With a passion for technology and problem-solving, my journey in development began with a fascination for how things work and evolved into a career in building solutions that make a difference.",
            "Growing up, I was captivated by both creative and technical pursuits. This dual interest led me to pursue web development, where I get to blend the logical and imaginative aspects of design and coding. My background in software development has given me a strong foundation in full-stack technology, and my curiosity drives me to continually learn and improve.",
            "Outside of work, I’m a collaborative person who values teamwork, whether it’s in professional settings or during personal projects. I enjoy spending my free time exploring new tech trends, reading, or enjoying Norway's beautiful landscapes.",
        ],
        "invitation": [
            "Want to know more? Dive into my story and get to know the person behind the code."
        ],
        "redirect": "/about",
        "buttonText": "Learn More About Me"
    },
    "career": {
        "title": "Career",
        "teaser": [
            "My career has been shaped by an unwavering passion for technology and problem-solving. From my early experiences in software development to leading complex projects, I've cultivated a skill set that spans various domains and industries.",
            "With experience in full-stack development, database management, and team leadership, I've been privileged to work on projects that bridge the gap between technical innovation and practical solutions. Each role has deepened my understanding of effective workflows, cross-functional collaboration, and client-focused delivery.",
            "As I’ve progressed, I’ve prioritized learning and adapting, keeping up with the latest in technology, architecture, and development standards. My career path reflects a commitment to continuous growth and impact-driven work, contributing value across teams and projects alike.",
        ],
        "invitation": [
            "Take a closer look at the experiences, milestones, and accomplishments that define my career.",
        ],
        "redirect": "/career",
        "buttonText": "Explore My Career Journey",
    },
    "projects": {
        "title": "Projects",
        "teaser": [
            "Each project is crafted to push boundaries, tackle real-world challenges, and deliver purposeful results. These are more than just code—each one represents a unique solution to a complex problem, where cutting-edge technology and creative vision come together to transform ideas into reality. My work showcases both the functionality and finesse needed to bring clarity to even the most intricate concepts.",
            "Dive into the stories behind the code, uncover the thought processes that solved pressing challenges, and explore how design and efficiency blend to form impactful results. Each project is a journey of innovation and skill, reflecting my dedication to clean, reliable, and powerful solutions that stand the test of time.",
            "The journey awaits—each project inviting you to explore the depth of creativity, logic, and technical skill. ",
        ],
        "invitation": [
            "Are you ready to dive in and see where it leads?",
        ],
        "redirect": "/projects",
        "buttonText": "Explore My Projects",
    }, 
    "skills": {
        "title": "Skills",
        "teaser": [
"Combining creativity with functionality, I bring expertise in modern web development—from responsive frontends to scalable backend systems. Each solution is crafted with a focus on performance, security, and longevity.",
"My toolkit includes powerful frameworks and design principles that drive today’s tech. This space highlights my work with front-end frameworks like React and Next.js, alongside backend development, database management, and efficient data flow.",
"With a strong foundation in solo and team-based projects, I value Git version control, testing, and streamlined workflows. Effective teamwork and integration are core to my approach, from planning to deployment.",
        ],
        "invitation": [
            "Discover the technologies and practices that fuel my dedication to web development excellence."
        ],
        "redirect": "/skills",
        "buttonText": "See My Full Skillset"
    }
}

export default landingPageText;