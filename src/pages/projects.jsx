import React, { useEffect, useState } from 'react';

const ProjectsPage = () => {
    const [slideIn, setSlideIn] = useState(false);

    useEffect(() => {
        setSlideIn(true); // Trigger slide-in when component mounts
    }, []);

    return (
        <div>
            <h1>Projects</h1>
            {/* Page content */}
        </div>
    );
};

export default ProjectsPage;