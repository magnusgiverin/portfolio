import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import styles from './TerminalAnimation.module.css';

const getRandomDateTime = () => {
    const now = new Date();
    const randomDaysAgo = Math.floor(Math.random() * 3) + 1;
    const randomDate = new Date(now.getTime() - randomDaysAgo * 24 * 60 * 60 * 1000);
    randomDate.setHours(Math.floor(Math.random() * 24), Math.floor(Math.random() * 60), Math.floor(Math.random() * 60));
    return randomDate;
};

const randomDateTime = getRandomDateTime();
const formattedDate = randomDateTime.toDateString();
const formattedTime = randomDateTime.toTimeString().split(' ')[0];
const currentDate = new Date();
const restoredDate = currentDate.toDateString();
const restoredTime = currentDate.toTimeString().split(' ')[0];

const TerminalAnimation = () => {
    const router = useRouter();
    const [displayedText, setDisplayedText] = useState('');
    const [currentLine, setCurrentLine] = useState(0);
    const [currentCharIndex, setCurrentCharIndex] = useState(0);
    const [isFinished, setIsFinished] = useState(false);
    const [additionalCharIndex, setAdditionalCharIndex] = useState(0);
    const [isRedirecting, setIsRedirecting] = useState(false);
    const [dotCount, setDotCount] = useState(0); // For the dot animation

    const consoleOutput = `Last login: ${formattedDate} ${formattedTime} on console\nRestored session: ${restoredDate} ${restoredTime} CEST ${currentDate.getFullYear()}\nmagnus@Magnuss-MacBook-Pro / % `;
    const followUpCommand = 'cd projects';

    const lines = consoleOutput.split('\n');
    const typingDelay = 10;
    const newlineDelay = 400;

    useEffect(() => {
        let typingTimeout;

        if (currentLine < lines.length) {
            const line = lines[currentLine];

            if (currentCharIndex < line.length) {
                typingTimeout = setTimeout(() => {
                    setDisplayedText((prev) => prev + line[currentCharIndex]);
                    setCurrentCharIndex((prev) => prev + 1);
                }, typingDelay);
            } else {
                typingTimeout = setTimeout(() => {
                    if (currentLine < lines.length - 1) {
                        setDisplayedText((prev) => prev + '\n');
                    }
                    setCurrentLine((prev) => prev + 1);
                    setCurrentCharIndex(0);

                    if (currentLine === lines.length - 1) {
                        setIsFinished(true);
                    }
                }, newlineDelay);
            }
        }

        return () => clearTimeout(typingTimeout);
    }, [currentLine, currentCharIndex, lines]);

    useEffect(() => {
        let followUpTypingTimeout;
        let typeCommand;

        if (isFinished) {
            followUpTypingTimeout = setTimeout(() => {
                typeCommand = setInterval(() => {
                    if (additionalCharIndex < followUpCommand.length) {
                        setDisplayedText((prev) => prev + followUpCommand[additionalCharIndex]);
                        setAdditionalCharIndex((prev) => prev + 1);
                    } else {
                        clearInterval(typeCommand);
                        setDisplayedText((prev) => prev + '\n> redirecting'); // Add redirecting text
                        setIsRedirecting(true); // Start dot animation
                    }
                }, typingDelay);
            }, Math.random() * 200 + 75);
        }

        return () => {
            clearTimeout(followUpTypingTimeout);
            clearInterval(typeCommand);
        };
    }, [isFinished, additionalCharIndex]);

    useEffect(() => {
        let dotInterval;

        if (isRedirecting) {
            dotInterval = setInterval(() => {
                setDisplayedText((prev) => prev + '.');
                setDotCount((prev) => prev + 1);

                if (dotCount === 3) {
                    setDotCount(0);
                    const redirectUrl = '/projects';
                    router.push(redirectUrl);
                }
            }, 600);
        }

        return () => clearInterval(dotInterval);
    }, [isRedirecting, dotCount]);

    return (
        <div className={styles.darkScreen}>
            <pre className={styles.consoleOutput}>
                {displayedText}
                <span className={styles.blinkingCursor}>|</span>
            </pre>
        </div>
    );
};

export default TerminalAnimation;
