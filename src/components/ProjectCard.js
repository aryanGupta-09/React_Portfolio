import { Tilt } from 'react-tilt';
import { Card } from 'react-bootstrap';
import { motion } from 'framer-motion';

import github from '../assets/github_icon.svg';

const ProjectCard = (props) => {
    const {project, delay} = props;

    return (
        <motion.div initial={{ opacity: 0, y: 300 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: delay/9 }}>
            <Tilt options={{ max: 45, scale: 1, speed: 450 }} className="rounded" style={{ backgroundColor: "#1F1F1F" }}>
                <Card className="rounded" style={{ backgroundColor: "#1F1F1F", width: "350px", padding: "10px", paddingTop: "15px" }}>
                    <Card.Img variant="top" src={project.image} alt={project.title} className="rounded" style={{ maxWidth: "100%", height: "270px" }} />
                    <Card.Body>
                        <Card.Title className="text-center" style={{ color: "#7449d5" }}>{project.title}</Card.Title>
                        <Card.Text className="text-white text-center">
                            {project.description}
                        </Card.Text>
                        <Card.Link href={project.link} style={{ marginLeft: "135px" }}><img src={github} alt="github-link" className="bg-white rounded-circle" style={{ height: "30px", width: "30px" }} /></Card.Link>
                    </Card.Body>
                </Card>
            </Tilt>
        </motion.div>
    );
}

export default ProjectCard;