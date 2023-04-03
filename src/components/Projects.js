import { Component } from 'react';
import { motion } from 'framer-motion';

import ProjectCard from './ProjectCard';
import {projects} from "../data"

class Projects extends Component {
    render() {
        return (
            <section style={{ backgroundColor: "#080823" }}>
                <h1 className="text-white text-center">Projects</h1>
                <br/>
                <motion.div className="d-flex flex-wrap justify-content-around row-gap-5">
                    {projects.map((project) => (
                        <ProjectCard project={project} />
                    ))}
                </motion.div>
            </section>
        );
    }
}

export default Projects;