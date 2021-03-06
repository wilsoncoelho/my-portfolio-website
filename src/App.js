import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import AboutMe from "./components/AboutMe"
import Services from "./components/Services"
import logo from "../src/wall-and-laptop-background.jpg";
import Particles from "react-particles-js";
import Experience from "./components/Experience";
import Portfolio from "./components/Potrfolio"

function App() {
  return (
    <>
 
      <div className="tsparticles-canvas-el">
        {/* <Particles className="particles-canvas"
          params={{
            particles: {
              number: {
                value: 160,
                density: {
                  enable: false,
                },
              },
              color:{
                value: "#f9ab00"
              },
              size: {
                value: 3,
                random: true,
                anim: {
                  speed: 4,
                  size_min: 0.3,
                },
              },
              line_linked: {
                enable: false,
              },
              move: {
                random: true,
                speed: 1,
                direction: "top",
                out_mode: "out",
              },
            },
            interactivity: {
              events: {
                onhover: {
                  enable: true,
                  mode: "bubble",
                },
                onclick: {
                  enable: true,
                  mode: "repulse",
                },
              },
              modes: {
                bubble: {
                  distance: 250,
                  duration: 2,
                  size: 0,
                  opacity: 0,
                
                },
                repulse: {
                  distance: 400,
                  duration: 4,
                },
              },
            },
          }}
        /> */}

<Particles
        className="particles-canvas"
        params={{
          particles: {
            number: {
              value: 30,
              density: {
                enable: true,
                value_area: 900
              }
            },
            shape: {
              type: "circle",
              stroke: {
                width: 6,
                color: "#f9ab00"
              }
            }
          }
        }}
      />
      </div>

      <Navbar />
      <Header />
      <AboutMe/>
      <Services/>
      <Experience/>
      <Portfolio/>
  
    </>
  );
}

export default App;
