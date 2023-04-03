import { useEffect, useState } from "react";
import { motion } from "framer-motion";

import { skillbubbles } from "../data";

const Skills = () => {
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

    const desktopDrag = { top: -20, left: -20, right: 20, bottom: 20 };
    const mobileDrag = { top: -1, left: -1, right: 1, bottom: 1 };

    return (
        <section style={{ backgroundColor: "#080823" }}>
            <h1 className="text-white text-center">Skills</h1>
            <br/>
            <motion.div className="d-flex flex-wrap justify-content-around gap-5 mx-auto" style={{ maxWidth: isMobile ? "100%" : "55%" }}>
                {skillbubbles.map((skill, index) => {
                    return (
                        <motion.button key={index} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} drag dragConstraints={isMobile ? mobileDrag : desktopDrag} className="rounded-circle bg-dark-subtle" style={{ width: "100px", height: "100px" }}>
                            <img src={skill} alt="skill" className="rounded-circle" style={{ maxWidth: "100%", maxHeight: "100%" }} />
                        </motion.button>
                    );
                })}
            </motion.div>
            <br/><br/><br/>
        </section>
    );
}

export default Skills;