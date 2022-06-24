// import { particlesConfig } from "../config/particlesConfig";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

export function ParticlesCom({ about }) {
   const particlesInit = async (main) => {
     console.log(main);

     // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
     // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
     // starting from v2 you can add only the features you need reducing the bundle size
     await loadFull(main);
   };

   const particlesLoaded = (container) => {
     console.log(container);
   };

   return (
     <Particles
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      options={{
        background: {
          color: {
            value: about ? "#000" : "#fff",
          },
        },
        fpsLimit: 120,
        interactivity: {
          events: {
            onClick: {
              enable: about ? false : true,
              mode: "push",
            },
            onHover: {
              enable: about ? false : true,
              mode: "repulse",
            },
            resize: true,
          },
          modes: {
            push: {
              quantity: 4,
            },
            repulse: {
              distance: 200,
              duration: .4,
            },
          },
        },
        particles: {
          color: {
            value: about ? "#fff" : "#000",
          },
          links: {
            color: "#000",
            distance: 150,
            enable: true,
            opacity: 0.5,
            width: 1,
          },
          collisions: {
            enable: true,
          },
          move: {
            direction: "none",
            enable: true,
            outModes: {
              default: "bounce",
            },
            random: false,
            speed: about ? 2 : 5,
            straight: false,
          },
          number: {
            density: {
              enable: true,
              area: 800,
            },
            value: 80,
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
      }}
    />
   );

}