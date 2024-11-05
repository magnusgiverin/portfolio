import React, { useEffect, useState } from 'react';

const SkillsPage = () => {
    const [slideIn, setSlideIn] = useState(false);

    useEffect(() => {
        setSlideIn(true); // Trigger slide-in when component mounts
    }, []);

    return (
        <div>
            <h1>Skills</h1>
            {/* Page content */}
        </div>
    );
};

export default SkillsPage;