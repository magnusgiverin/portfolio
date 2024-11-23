import React, { useRef } from 'react';
import IntroPage from '../components/General/IntroPage';
import CareerComponent from '../components/CareerPage/CareerComponent';
import Footer from '../components/General/Footer';

const CareerPage = () => {
    const careerComponentRef = useRef(null);

    return (
        <>
            <IntroPage
                scrollToRef={careerComponentRef}
                mainText={"CAREER"}
                subText={"Learn about my professional experiences so far"}
            />
            <div ref={careerComponentRef}>
                <CareerComponent />
            </div>
            <Footer />
        </>
    );
};

export default CareerPage;