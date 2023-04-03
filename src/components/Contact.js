import { useState, useEffect } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import { motion } from 'framer-motion';

import contact from '../assets/contact.svg';

const Contact = () => {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const mediaQuery = window.matchMedia("(max-width: 750px)");

        setIsMobile(mediaQuery.matches);

        const handleMediaQueryChange = (event) => {
            setIsMobile(event.matches);
        };

        mediaQuery.addEventListener("change", handleMediaQueryChange);

        return () => {
            mediaQuery.removeEventListener("change", handleMediaQueryChange);
        };
    }, []);

    const RenderImage = () => {
        if (!isMobile) {
            return (
                <motion.div initial={{ opacity: 0, x: 100 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.7 }}>
                    <motion.div animate={{ scale: [1, 1.1, 1] }} transition={{ duration: 2, repeat: Infinity }}>
                        <img src={contact} alt="contact" style={{ width: "400px", height: "300px" }} />
                    </motion.div>
                </motion.div>);
        }
    }

    return (
        <div id="Contact" style={{ backgroundColor: "#080823" }}>
            <div className="d-flex justify-content-center column-gap-5" style={{ paddingLeft: "20px", paddingRight: "20px" }}>
                <motion.div initial={{ opacity: 0, x: isMobile ? 0 : -100, y: isMobile ? 100 : 0 }} whileInView={{ opacity: 1, x: 0, y: 0 }} transition={{ duration: 0.7 }} className="rounded" style={{ backgroundColor: "#1F1F1F", width: "300px", padding: "20px" }}>
                    <h1 className="text-white">Get in touch</h1>
                    <Form>
                        <Form.Group className="mb-3">
                            <Form.Label className="text-white">Name</Form.Label>
                            <Form.Control type="name" placeholder="Enter your name" />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label className="text-white">Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter your email" />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label className="text-white">Message</Form.Label>
                            <FloatingLabel label="Type your message here...">
                                <Form.Control as="textarea" placeholder="Type your message here..." style={{ height: '150px' }} />
                            </FloatingLabel>
                        </Form.Group>
                        <Button variant="primary" type="submit">Send</Button>
                    </Form>
                </motion.div>
                <RenderImage />
            </div>
            <br/><br />
        </div>
    );
};

export default Contact;