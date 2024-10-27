import React, { useEffect, useState } from 'react';

const AboutPage = () => {
    const [slideIn, setSlideIn] = useState(false);

    useEffect(() => {
        setSlideIn(true); // Trigger slide-in when component mounts
    }, []);

    return (
        <div>
            <h1>About</h1>
            {/* Page content */}
        </div>
    );
};

export default AboutPage;