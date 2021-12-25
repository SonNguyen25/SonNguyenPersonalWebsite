import React from "react";
import Typical from "react-typical";
import "./Profile.css";
import Particles from "react-tsparticles";

export default function profile() {
  return (
    <div className="profile-container">
      <div className="particles-container">
      <Particles className="particles"
        options={{
          autoPlay: true,
          background: {
            color: { value: "#567698" },
            image:
              "linear-gradient(90deg, hsla(328, 75%, 45%, 1) 0%, hsla(269, 85%, 41%, 1) 100%)",
            position: "",
            repeat: "",
            size: "",
            opacity: 1,
          },
          backgroundMask: {
            composite: "destination-out",
            cover: { color: { value: "#fff" }, opacity: 1 },
            enable: false,
          },
          backgroundMode: { enable: true, zIndex: -1 },
          detectRetina: true,
          infection: {
            cure: false,
            delay: 0,
            enable: false,
            infections: 0,
            stages: [],
          },
          interactivity: {
            detectsOn: "canvas",
            events: {
              onClick: { enable: true, mode: "repulse" },
              onDiv: { selectors: [], enable: false, mode: [], type: "circle" },
              onHover: {
                enable: true,
                mode: "bubble",
                parallax: { enable: false, force: 2, smooth: 10 },
              },
              resize: true,
            },
            modes: {
              attract: { distance: 200, duration: 0.4, speed: 1 },
              bounce: { distance: 200 },
              bubble: { distance: 250, duration: 2, opacity: 0, size: 0 },
              connect: { distance: 80, links: { opacity: 0.5 }, radius: 60 },
              grab: {
                distance: 400,
                links: { blink: false, consent: false, opacity: 1 },
              },
              light: {
                area: {
                  gradient: {
                    start: { value: "#ffffff" },
                    stop: { value: "#000000" },
                  },
                  radius: 1000,
                },
                shadow: { color: { value: "#000000" }, length: 2000 },
              },
              push: { quantity: 4 },
              remove: { quantity: 2 },
              repulse: { distance: 400, duration: 0.4, speed: 1 },
              slow: { factor: 3, radius: 200 },
              trail: { delay: 1, quantity: 1 },
            },
          },
          manualParticles: [],
          motion: { disable: false, reduce: { factor: 4, value: false } },
          particles: {
            bounce: {
              horizontal: {
                random: { enable: false, minimumValue: 0.1 },
                value: 1,
              },
              vertical: {
                random: { enable: false, minimumValue: 0.1 },
                value: 1,
              },
            },
            collisions: {
              bounce: {
                horizontal: {
                  random: { enable: false, minimumValue: 0.1 },
                  value: 1,
                },
                vertical: {
                  random: { enable: false, minimumValue: 0.1 },
                  value: 1,
                },
              },
              enable: false,
              mode: "bounce",
            },
            color: {
              value: "#ffffff",
              animation: { enable: false, speed: 1, sync: true },
            },
            life: {
              count: 0,
              delay: {
                random: { enable: false, minimumValue: 0 },
                value: 0,
                sync: false,
              },
              duration: {
                random: { enable: false, minimumValue: 0.0001 },
                value: 0,
                sync: false,
              },
            },
            links: {
              blink: false,
              color: { value: "#ffffff" },
              consent: false,
              distance: 150,
              enable: false,
              frequency: 1,
              opacity: 0.4,
              shadow: { blur: 5, color: { value: "#00ff00" }, enable: false },
              triangles: { enable: false, frequency: 1 },
              width: 1,
              warp: false,
            },
            move: {
              angle: { offset: 45, value: 90 },
              attract: { enable: false, rotate: { x: 600, y: 600 } },
              direction: "none",
              distance: 0,
              enable: true,
              gravity: { acceleration: 9.81, enable: false, maxSpeed: 50 },
              noise: {
                delay: { random: { enable: false, minimumValue: 0 }, value: 0 },
                enable: false,
              },
              outModes: {
                default: "out",
                bottom: "out",
                left: "out",
                right: "out",
                top: "out",
              },
              random: true,
              size: false,
              speed: 1,
              straight: false,
              trail: {
                enable: false,
                length: 10,
                fillColor: { value: "#000000" },
              },
              vibrate: false,
              warp: false,
            },
            number: {
              density: { enable: true, area: 800, factor: 1000 },
              limit: 0,
              value: 160,
            },
            opacity: {
              random: { enable: true, minimumValue: 1 },
              value: 1,
              animation: {
                enable: true,
                minimumValue: 0,
                speed: 1,
                sync: false,
              },
            },
            reduceDuplicates: false,
            rotate: {
              random: { enable: false, minimumValue: 0 },
              value: 0,
              animation: { enable: false, speed: 0, sync: false },
              direction: "clockwise",
              path: false,
            },
            shadow: {
              blur: 0,
              color: { value: "#000000" },
              enable: false,
              offset: { x: 0, y: 0 },
            },
            shape: {
              options: {
                polygon: { nb_sides: 5 },
                star: { nb_sides: 5 },
                image: {
                  src: "https://cdn.matteobruni.it/images/particles/github.svg",
                  width: 100,
                  height: 100,
                },
                images: {
                  src: "https://cdn.matteobruni.it/images/particles/github.svg",
                  width: 100,
                  height: 100,
                },
              },
              type: "circle",
            },
            size: {
              random: { enable: true, minimumValue: 1 },
              value: 3,
              animation: {
                destroy: "none",
                enable: false,
                minimumValue: 0.3,
                speed: 4,
                startValue: "max",
                sync: false,
              },
            },
            stroke: {
              width: 0,
              color: {
                value: "#000000",
                animation: { enable: false, speed: 1, sync: true },
              },
            },
            twinkle: {
              lines: { enable: false, frequency: 0.05, opacity: 1 },
              particles: { enable: false, frequency: 0.05, opacity: 1 },
            },
          },
          pauseOnBlur: true,
          pauseOnOutsideViewport: false,
          themes: [],
          
        }}
      />
     
      <div className="profile-parent">
        <div className="profile-details">
          <div className="colz">
            <div className="colz-icon">
              <a href="https://www.linkedin.com/in/bao-son-nguyen-5aa826160/">
                <i className="fa fa-linkedin-square"></i>
              </a>
              <a href="https://github.com/SonNguyen25/">
                <i className="fa fa-github-square"></i>
              </a>
              <a href="mailto:sonnbred2002@gmail.com">
                <i className="fa fa-google"></i>
              </a>
            </div>
          </div>
          <div className="profile-details-name">
            <span className="primary-text">
              {" "}
              Hello World! I'm{" "}
              <span className="highlighted-text">Son Nguyen</span>
            </span>
          </div>
          <div className="profile-details-role">
            <span className="primary text">
              {" "}
              <h1>
                {" "}
                <Typical
                  loop={Infinity}
                  steps={[
                    "Seeking Entry-Level Co-ops + Internship 🧑",
                    1000,
                    "Adventurous Developer 🧗🏻‍♂️",
                    1000,
                    "Aspiring Java Software Engineer 🚀",
                    1000,
                    "Beginner in Web Dev 👶",
                    1000,
                  ]}
                />
              </h1>
              <span className="profile-role-tagline">
                Welcome to my personal website!<br /> I'm a student at Northeastern
                University <br />and this is where I showcase my journey of becoming a
                software engineer!
              </span>
            </span>
          </div>
          <div className="profile-options">
            <button className="btn primary-btn">
              {""}
              Contact Me{" "}
            </button>
            <a href="resume.pdf" download="SonNguyenResume.pdf">
              <button className="btn highlighted-btn">View My Resume</button>
            </a>
          </div>
        </div>
        <div className="profile-picture">
          <div className="profile-picture-background"></div>
        </div>
      </div>
      </div>
    </div>
  );
}
