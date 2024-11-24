import React, { useRef } from 'react';
import IntroPage from '../components/General/IntroPage';
import Footer from '../components/General/Footer';
import ProjectsIntro from '../components/ProjectsPage/ProjectsIntro';
import ProjectDetails from '../components/ProjectsPage/ProjectDetails';

const ProjectsPage = () => {
    const projectsIntroRef = useRef(null);

    return (
        <>
            <IntroPage
                scrollToRef={projectsIntroRef}
                mainText={"PROJECTS"}
                subText={"Read about what I've done in my free time"}
            />
            <div ref={projectsIntroRef}>
                <ProjectsIntro />
            </div>
            <ProjectDetails />
            <Footer />
        </>
    );
};

export default ProjectsPage;