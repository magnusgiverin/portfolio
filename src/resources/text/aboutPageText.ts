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

const aboutPageText = {
    general: {
        header: "About me",
        columns: [
            {
                title: getAge(),
                subtitle: "Years old",
                description: "I am " + getAge() + " years old, and in this short time, I have had the opportunity to work on several exciting projects. I am proud of what I have achieved so far and look forward to growing further both professionally and personally."
            },
            {
                title: "3",
                subtitle: "Industries",
                description: "My experience spans multiple industries, including technology, education, and administration. I have gained insight into how technology can transform organizations and have been a driving force in making this possible."
            },
            {
                title: "9+",
                subtitle: "Years Abroad",
                description: "British-Norwegian dual national with 9 years abroad in Mexico, Sudan, the UK, and Indonesia. Fluent in Norwegian, English, and Spanish. Passionate about problem-solving, teamwork, and applying knowledge to drive innovation and societal impact."
            }
        ],
        sections: [
            {
              title: "Who is Magnus?",
              description: 
                "I am a technology-driven leader with a strong background in IT development and process improvement. Passionate about leveraging technology to streamline work processes, I have had the privilege of contributing to innovative solutions across various sectors."
            },
            {
                title: "What Drives Me",
                description: 
                  "At the core of everything I do is a passion for technology, innovation, and meaningful impact. I’m committed to creating solutions that not only drive efficiency but also empower people to work smarter and connect better. This section delves deeper into the values I stand for, the causes that inspire me, and the principles guiding my professional journey.",
                link: "/about#passions"
            },
            {
                title: "Living Abroad: A World of Perspectives",
                description: 
                "Having lived in countries across Europe, Asia, Africa, and the Americas, I’ve had the unique opportunity to immerse myself in diverse cultures and work with individuals from varied backgrounds. This global perspective has shaped my ability to adapt, collaborate effectively, and approach challenges with an open mind, fostering inclusive and innovative solutions.",
                link: "/about#timeline"
            },
            {
                title: "Education and Professional Growth",
                description: 
                "My academic journey began at Greengates International School in Mexico City, where I completed my IGCSEs with high marks. Later, I pursued higher education at NTNU in Trondheim, Norway, starting with Electrical Engineering before discovering my true passion in Computer Engineering. This shift allowed me to delve deeper into programming, systems design, and technology, equipping me with the skills to address modern challenges.",
                link: "/about#education"
            },
          ]
          
    },
    timeline: {
        title: "My timeline",
        intro: " A journey through significant moments and milestones.",
        events: [
            {
              year: "2003 - 2005",
              title: "JAKARTA",
              text: "I was born in Indonesia and spent my early childhood there. While my memories from that time are faint, I feel a deep connection to the country. My parents lived there during my university years, and this bond with Indonesia continues to influence me. Despite my young age at the time, the sense of belonging to the country remains strong.",
              section: "jakarta-section",
              icon: "pregnant_woman",
              position: "left"
            },
            {
              year: "2005 - 2007",
              title: "LONDON",
              text: "Though I was very young during our time in London, I have fond memories of hearing my parents speak about our life there. Though my personal recollections are limited, the city remains significant in my life. I often visit, as I have family in the area, and I wonder how life might have unfolded had we stayed longer.",
              section: "london-section",
              icon: "child_friendly",
              position: "right"
            },
            {
              year: "2007 - 2009",
              title: "OSLO",
              text: "I began my education in Oslo, where I had my first real experience with snow and the cold. The winters were enchanting, and I embraced the new lifestyle. It was here that I first encountered the Norwegian language and culture. Although I initially struggled with my accent, I gradually adjusted and grew to appreciate the country as home.",
              section: "oslo-section",
              icon: "toys",
              position: "right"
            },
            {
              year: "2009 - 2011",
              title: "KHARTOUM",
              text: "My time in Sudan was marked by the challenges of a country in turmoil. Despite the difficult circumstances, I found immense value in my experiences. Attending the Khartoum International Community School (KICS) exposed me to diverse cultures, and I had the opportunity to take part in unique activities like a safari and camping along the Nile. Those formative years were an eye-opening journey of personal growth and resilience.",
              section: "khartoum-section",
              icon: "sunny",
              position: "left"
            },
            {
              year: "2011 - 2017",
              title: "OSLO",
              text: "Returning to Oslo after several years abroad was a bit of a cultural adjustment. Having lost some of my language skills, I felt like an outsider at first, but over time I adapted. Secondary school marked a significant turning point, where I made lasting friendships and began to reconnect with my Norwegian heritage. It was here that I learned the true meaning of belonging and community.",
              section: "oslo-section",
              icon: "ac_unit",
              position: "left"
            },
            {
              year: "2017 - 2021",
              title: "MEXICO CITY",
              text: "The transition to Mexico City was a challenging one, especially as I was old enough to feel the weight of leaving behind friends and familiar surroundings. However, the experience proved invaluable. I immersed myself in a rich, diverse culture, forging meaningful relationships with people from around the world. My time at Greengates International School, where I completed my IGCSEs and the IB, was a period of academic and personal growth, while also achieving high grades in the process.",
              section: "mexico-city-section",
              icon: "beach_access",
              position: "right"
            },
            {
              year: "2021 - Present",
              title: "TRONDHEIM",
              text: "Upon moving to Trondheim, I began a degree in Electrical Engineering (MTELSYS). However, I quickly realized that my true interests lay elsewhere, particularly in programming. The decision to switch to Computer Engineering (MTDT) was a turning point in my life. I found a new passion in software development, and I am now fully dedicated to pursuing a career in this field. My journey in technology is just beginning, and I am excited for the opportunities ahead.",
              section: "trondheim-section",
              icon: "terminal",
              position: "left"
            }
          ]
    }
}

export default aboutPageText;
