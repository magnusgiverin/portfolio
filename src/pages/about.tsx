'use client';

import { useRef } from "react";
import EducationComponent from "../components/AboutPage/EducationComponent";
import TimelineComponent from "../components/AboutPage/TimelineComponent";
import Footer from "../components/General/Footer";
import GeneralAbouComponent from "../components/AboutPage/GeneralAboutComponent";
import MapComponent from "../components/AboutPage/MapComponent";
import IntroPage from "../components/General/IntroPage";

const AboutPage = () => {
    const generalAboutComponentRef = useRef(null);

    return (
        <>
            <IntroPage 
                scrollToRef={generalAboutComponentRef} 
                mainText={"ABOUT"} 
                subText={"Discover my journey, values, and experiences"}
            />
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