import { useCallback } from "react";
import Particles from "react-tsparticles";
// import particlesConfig from "./config/particles-config"
import { loadFull } from "tsparticles"; 

const ParticlesBackground = () => {
    const particlesInit = useCallback(async engine => {
        console.log(engine);
        await loadFull(engine);
    }, []);
    const particlesLoaded = useCallback(async container => {
        await console.log(container);
    }, []);
  return (
    <Particles id="tsparticles"  init={particlesInit}
    loaded={particlesLoaded}
    options={{
        background: {
            color: {
                value: "tranparent",
            },
        },
        fpsLimit: 120,
        interactivity: {
            events: {
                onClick: {
                    enable: true,
                    mode: "push",
                },
                onHover: {
                    enable: true,
                    mode: "repulse",
                },
                resize: true,
            },
            modes: {
                push: {
                    quantity: 1,
                },
                repulse: {
                    distance: 200,
                    duration: 0.4,
                },
            },
        },
        particles: {
            color: {
                value: "#9a03ff",
            },
            links: {
                color: "#0ef",
                distance: 150,
                enable: true,
                opacity: 0.5,
                width: 1,
            },
            move: {
                direction: "none",
                enable: true,
                outModes: {
                    default: "bounce",
                },
                random: false,
                speed: 2,
                straight: false,
            },
            number: {
                density: {
                    enable: true,
                    area: 800,
                },
                value: 60,
            },
            opacity: {
                value: 0.5,
            },
            shape: {
                type: "circle",
            },
            size: {
                value: { min: 1, max: 5 },
            },
        },
        detectRetina: true,
    }} />
   
  )
}

export default ParticlesBackground