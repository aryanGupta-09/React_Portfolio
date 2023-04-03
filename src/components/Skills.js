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
        <section id="Skills" style={{ backgroundColor: "#080823" }}>
            <h1 className="text-white text-center">Skills</h1>
            <br />
            <div className="d-flex flex-wrap justify-content-around gap-5 mx-auto" style={{ maxWidth: isMobile ? "100%" : "55%" }}>
                {skillbubbles.map((skill, index) => {
                    return (
                        <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.7, delay: index/25 }}>
                            <motion.button key={index} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} drag dragConstraints={isMobile ? mobileDrag : desktopDrag} className="rounded-circle bg-dark-subtle" style={{ width: "100px", height: "100px" }}>
                                <img src={skill} alt="skill" className="rounded-circle" style={{ maxWidth: "100%", maxHeight: "100%" }} />
                            </motion.button>
                        </motion.div>
                    );
                })}
            </div>
            <br /><br /><br /><br /><br />
        </section>
    );
}

export default Skills;