import React from 'react';
import Navbar from '../components/General/Navbar';

const ProjectsPage = () => {
    return (
        <div>
            <Navbar visible={undefined} sendOverLayStatus={undefined}/> {/* Pass navbar visibility state */}
            <h1>Projects</h1>
            {/* Page content */}
        </div>
    );
};

export default ProjectsPage;