'use client';

import { useRef } from "react";
import AboutIntroComponent from "../components/AboutPage/AboutIntroComponent";
import EducationComponent from "../components/AboutPage/EducationComponent";
import TimelineComponent from "../components/AboutPage/TimelineComponent";
import Footer from "../components/Footer/Footer";
import GeneralAbouComponent from "../components/AboutPage/GeneralAboutComponent";
import MapComponent from "../components/AboutPage/MapComponent";

const AboutPage = () => {
    const generalAboutComponentRef = useRef(null);

    return (
        <>
            <AboutIntroComponent scrollToRef={generalAboutComponentRef}/>
            <div ref={generalAboutComponentRef}>
                <GeneralAbouComponent/>
            </div>
            <TimelineComponent />
            <MapComponent/>
            <EducationComponent />
            <Footer />
        </>
    );
};

export default AboutPage;