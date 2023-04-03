import * as React from "react";
import { useState, useEffect } from "react";
import { svgpaths, svgcolors } from "../data";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { getIndex, useFlubber } from "./use-flubber";

function About() {
    const [pathIndex, setPathIndex] = useState(0);
    const progress = useMotionValue(pathIndex);
    const fill = useTransform(progress, svgpaths.map(getIndex), svgcolors);
    const path = useFlubber(progress, svgpaths);

    React.useEffect(() => {
        const animation = animate(progress, pathIndex, {
            duration: 0.8,
            ease: "easeInOut",
            onComplete: () => {
                if (pathIndex === svgpaths.length - 1) {
                    progress.set(0);
                    setPathIndex(1);
                } else {
                    setPathIndex(pathIndex + 1);
                }
            }
        });

        return () => animation.stop();
    }, [pathIndex, progress]);

    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const mediaQuery = window.matchMedia("(max-width: 1000px)");

        setIsMobile(mediaQuery.matches);

        const handleMediaQueryChange = (event) => {
            setIsMobile(event.matches);
        };

        mediaQuery.addEventListener("change", handleMediaQueryChange);

        return () => {
            mediaQuery.removeEventListener("change", handleMediaQueryChange);
        };
    }, []);

    return (
        <section style={{ backgroundColor: "#080823", paddingLeft: isMobile ? "7%" : "22%", paddingRight: isMobile ? "7%" : "22%", paddingTop: "70px", paddingBottom: "70px" }}>
            <div className="d-flex justify-content-center gap-5 rounded" style={{backgroundColor: "#1F1F1F"}}>
                <div style={{ marginTop: "30px", paddingLeft: "50px", width: isMobile ? "" : "50%" }}>
                    <h1 className="text-white">About Me</h1>
                    <div className="text-white" style={{ marginTop: "20px" }}>
                        I'm a full stack developer and have experience in developing web applications using ReactJS, NodeJS, ExpressJS, MongoDB, and MySQL. <br />
                        I'm also a competitive programmer and have participated in various coding competitions like Google Kick Start and Meta Hacker Cup. <br />
                        I'm currently pursuing my Bachelors in Computer Science and Design from <span>IIIT-Delhi</span>.
                    </div>
                    <br />
                </div>
                <div style={{ marginTop: "40px" }}>
                    <svg width="230" height="250">
                        <g transform="translate(10 10) scale(10 10)">
                            <motion.path fill={fill} d={path} />
                        </g>
                    </svg>
                </div>
            </div>
        </section>
    );
}

export default About;