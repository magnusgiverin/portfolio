import React from 'react';
import Navbar from '../components/Navbar/Navbar';

const ProjectsPage = () => {
    return (
        <div>
            <Navbar/> {/* Pass navbar visibility state */}
            <h1>Projects</h1>
            {/* Page content */}
        </div>
    );
};

export default ProjectsPage;