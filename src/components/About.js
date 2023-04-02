import * as React from "react";
import { useState } from "react";
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

    const styles = {
        section: { backgroundColor: "#080823" }
    }

    return (
        <section className="d-flex justify-content-center" style={styles.section}>
            <div style={{ marginLeft: "100px", marginTop: "30px" }}>
                <h1 className="text-white">About Me</h1>
                <div className="text-white" style={{ marginTop: "20px", width: "70%" }}>
                    I'm a full stack developer and have experience in developing web applications using ReactJS, NodeJS, ExpressJS, MongoDB, and MySQL.
                    I'm also a competitive programmer and have participated in various coding competitions like Google Kick Start and Meta Hacker Cup. <br/>
                    I'm currently pursuing my Bachelors in Computer Science and Design from IIIT-Delhi.
                </div>
                <br />
            </div>
            <div style={{ marginTop: "60px"}}>
                <svg width="400" height="400">
                    <g transform="scale(10 10)">
                        <motion.path fill={fill} d={path} />
                    </g>
                </svg>
            </div>
        </section>
    );
}

export default About;