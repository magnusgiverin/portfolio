import React, { useEffect, useState } from 'react';

const CareerPage = () => {
    const [slideIn, setSlideIn] = useState(false);

    useEffect(() => {
        setSlideIn(true); // Trigger slide-in when component mounts
    }, []);

    return (
        <div>
            <h1>Career</h1>
            {/* Page content */}
        </div>
    );
};

export default CareerPage;