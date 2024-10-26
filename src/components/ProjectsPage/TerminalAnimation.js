import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router'; // Import useRouter from Next.js
import styles from './TerminalAnimation.module.css';

const TerminalAnimation = () => {
    const router = useRouter(); // Initialize useRouter
    const [displayedText, setDisplayedText] = useState('');
    const [currentLine, setCurrentLine] = useState(0);
    const [currentCharIndex, setCurrentCharIndex] = useState(0);
    const [isFinished, setIsFinished] = useState(false);
    const [additionalCharIndex, setAdditionalCharIndex] = useState(0); // Manage additionalCharIndex with useState

    // Function to generate a random date and time within the last 3 days
    const getRandomDateTime = () => {
        const now = new Date();
        const randomDaysAgo = Math.floor(Math.random() * 3) + 1; // Random number between 1 and 3
        const randomDate = new Date(now.getTime() - randomDaysAgo * 24 * 60 * 60 * 1000); // Subtract days in milliseconds

        // Generate random hours, minutes, and seconds
        const randomHours = Math.floor(Math.random() * 24);
        const randomMinutes = Math.floor(Math.random() * 60);
        const randomSeconds = Math.floor(Math.random() * 60);

        // Set the random time on the random date
        randomDate.setHours(randomHours, randomMinutes, randomSeconds);

        return randomDate;
    };

    // Get the random date and time for last login
    const randomDateTime = getRandomDateTime();
    const formattedDate = randomDateTime.toDateString();
    const formattedTime = randomDateTime.toTimeString().split(' ')[0];

    // Get current date and time for restored session
    const currentDate = new Date();
    const restoredDate = currentDate.toDateString();
    const restoredTime = currentDate.toTimeString().split(' ')[0];

    const consoleOutput = `Last login: ${formattedDate} ${formattedTime} on console\nRestored session: ${restoredDate} ${restoredTime} CEST ${currentDate.getFullYear()}\nmagnus@Magnuss-MacBook-Pro / % `;
    const followUpCommand = ' cd projects'; // Add a space before 'cd'

    const lines = consoleOutput.trim().split('\n');

    const typingDelay = 10;
    const newlineDelay = 500;

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
                    // Check if not the last line before adding a newline
                    if (currentLine < lines.length - 1) {
                        setDisplayedText((prev) => prev + '\n'); // Add newline only between lines
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
        let typeCommand; // Declare typeCommand here for cleanup

        if (isFinished) {
            followUpTypingTimeout = setTimeout(() => {
                typeCommand = setInterval(() => {
                    if (additionalCharIndex < followUpCommand.length) {
                        setDisplayedText((prev) => prev + followUpCommand[additionalCharIndex]);
                        setAdditionalCharIndex((prev) => prev + 1); // Increment additionalCharIndex
                    } else {
                        clearInterval(typeCommand);
                        // Automatically add a newline
                        setDisplayedText((prev) => prev + '\n'); // Add newline

                        // Delay before redirecting
                        setTimeout(() => {
                            const redirectUrl = '/projects'; // Specify the URL to redirect to
                            router.push(redirectUrl); // Redirect the user
                        }, 1000); // Adjust the delay (in milliseconds) as needed
                    }
                }, typingDelay);
            }, Math.random() * 200 + 75);
        }

        // Cleanup function for setInterval
        return () => {
            clearTimeout(followUpTypingTimeout);
            clearInterval(typeCommand);
        };
    }, [isFinished, additionalCharIndex, followUpCommand]); // Depend on these states

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
