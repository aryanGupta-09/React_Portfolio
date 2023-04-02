import { Component } from 'react';
import { motion } from "framer-motion"
import background from '../assets/background.jpg';
import PCCanvas from './canvas/PC';

const styles = {
    section: { backgroundImage: `url(${background})`, backgroundSize: "cover" },
    intro: { top: "120px", left: "70px" },
    name: { color: "#6535d0", display: "inline" },
    border: { width: "25px", height: "50px", bottom: "10px", right: "70px" },
    circle: { width: "12px", height: "12px", marginTop: "5px" }
}

class Hero extends Component {
    render() {
        return (<section className="vh-100 position-relative" style={styles.section}>
            <div className="position-absolute" style={styles.intro}>
                <h1 className="text-white" style={{ display: "inline" }}>Hey there, I'm </h1>
                <h1 style={styles.name}>Aryan</h1>
                <p className="text-white fs-5" style={{ marginTop: "10px" }}>I engage in competitive programming <br /> and develop web applications</p>
            </div>
            <PCCanvas />
            <div>
                <a href="#About">
                    <div className="border border-white rounded-pill position-absolute" style={styles.border}>
                        <motion.div className="bg-white opacity-75 rounded-circle mx-auto"
                            style={styles.circle}
                            animate={{ y: [0, 28] }} transition={{ duration: 1.4, repeat: Infinity, repeatType: "loop" }} />
                    </div>
                </a>
            </div>
        </section>);
    }
}

export default Hero;