import { Component } from 'react';
import { motion } from "framer-motion"
import background from '../assets/background.jpg';
import PCCanvas from './canvas/PC';

class Hero extends Component {
    render() {
        return (<section className="vh-100 position-relative" style={{ backgroundImage: `url(${background})`, backgroundSize: "cover" }}>
            <div className="position-absolute" style={{ top: "120px", left: "70px" }}>
                <h1 className="text-white" style={{ display: "inline" }}>Hey there, I'm </h1>
                <h1 style={{ color: "#6535d0", display: "inline" }}>Aryan</h1>
                <p className="text-white fs-5" style={{ marginTop: "10px" }}>I engage in competitive programming <br /> and develop web applications</p>
            </div>
            <PCCanvas />
            <div>
                <a href="#About">
                    <div className="border border-white rounded-pill position-absolute" style={{ width: "25px", height: "50px", bottom: "10px", right: "70px" }}>
                        <motion.div className="bg-white opacity-75 rounded-circle mx-auto"
                            style={{ width: "12px", height: "12px", marginTop: "5px" }}
                            animate={{ y: [0, 28] }} transition={{ duration: 1.4, repeat: Infinity, repeatType: "loop" }} />
                    </div>
                </a>
            </div>
        </section>);
    }
}

export default Hero;