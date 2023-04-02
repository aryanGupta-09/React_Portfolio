import { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

const PC = (props) => {
    const pc = useGLTF("./gaming_desktop_pc/scene.gltf");

    return (<>
        <mesh>
            <hemisphereLight intensity={0.3} groundColor="black" />
            <pointLight intensity={1} />
            <spotLight intensity={1} position={[0, 5, 0]} angle={0.5} penumbra={1} castShadow />
            <primitive object={pc.scene} scale={props.isMobile ? 0.5 : 0.7} position={[0.5, -1.7, -1]} rotation={[0, -0.2, -0.2]} />
        </mesh>
    </>);

}

const PCCanvas = () => {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const mediaQuery = window.matchMedia("(max-width: 700px)");

        setIsMobile(mediaQuery.matches);

        const handleMediaQueryChange = (event) => {
            setIsMobile(event.matches);
        };

        mediaQuery.addEventListener("change", handleMediaQueryChange);

        return () => {
            mediaQuery.removeEventListener("change", handleMediaQueryChange);
        };
    }, []);


    return (<>
        <Canvas frameloop="demand" shadows camera={{ position: [20, 3, 5], fov: 25 }} gl={{ preserveDrawingBuffer: true }}>
            <Suspense>
                <OrbitControls enableZoom={false} maxPolarAngle={Math.PI / 2} minPolarAngle={Math.PI / 2} />
                <PC isMobile={isMobile}/>
            </Suspense>

            <Preload all />
        </Canvas>
    </>);
}

export default PCCanvas;