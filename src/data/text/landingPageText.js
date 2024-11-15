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
            `I'm a ${getAge()}-year-old developer based in Trondheim, Norway, with a passion for solving problems through technology.`,
            "My focus lies in creating functional, user-friendly solutions that balance performance with design."
        ],
        "redirect": "/about",
        "buttonText": "Learn More About Me"
    },
    "career": {
        "title": "Career",
        "teaser": [
            "I’ve led projects from freelance work to managing complex tech initiatives, building practical and scalable solutions.",
            "With expertise in full-stack development and database architecture, I prioritize innovation and efficiency."
        ],
        "redirect": "/career",
        "buttonText": "Explore My Career Journey"
    },
    "projects": {
        "title": "Projects",
        "teaser": [
            "Each project showcases my ability to design efficient systems and intuitive interfaces that solve real-world problems.",
            "Explore how engineering and creativity come together to deliver impactful solutions."
        ],
        "redirect": "/projects",
        "buttonText": "Explore My Projects"
    },
    "skills": {
        "title": "Skills",
        "teaser": [
            "I specialize in building performant web applications using React, Next.js, and scalable backend technologies.",
            "Version control, testing, and collaboration drive my approach to delivering quality results."
        ],
        "redirect": "/skills",
        "buttonText": "See My Full Skillset"
    }
}

export default landingPageText;
