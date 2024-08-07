import { useRef } from "react";
import { MdOutlineMail } from "react-icons/md";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { RiJavascriptFill } from "react-icons/ri";
import { BiLogoTypescript } from "react-icons/bi";
import { FaReact, FaWordpressSimple, FaHtml5, FaNodeJs } from "react-icons/fa";
import { IoLogoCss3 } from "react-icons/io";
import { BiLogoPostgresql } from "react-icons/bi";
import todo from "../images/todo.png";
import graph from "../images/grapht.png";
import cat from "../images/cat.jpg";
import "../App.css";

const Nav = () => {
  const sectionRef1 = useRef(null);
  const sectionRef2 = useRef(null);
  const sectionRef3 = useRef(null);

  const autoScroll = (ref) => {
    if (ref && ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const ContactButton = () => {
    return (
      <div className="contact-button">
        <a href="mailto:Jessiromo06@gmail.com">
          <MdOutlineMail color="white" />
        </a>
      </div>
    );
  };

  return (
    <div>
      <header>
        <div className="navbar">
          <ul id="navs">
            <li className="nav">
              <button
                onClick={() => autoScroll(sectionRef1)}
                className="buttons"
              >
                About
              </button>
            </li>
            <li className="nav">
              <button
                onClick={() => autoScroll(sectionRef2)}
                className="buttons"
              >
                Projects
              </button>
            </li>
            <li className="nav">
              <button
                onClick={() => autoScroll(sectionRef3)}
                className="buttons"
              >
                Contact
              </button>
            </li>
          </ul>
        </div>
      </header>
      <div ref={sectionRef1} className="about-section">
        <div className="about">
          <h1 className="headers">About</h1>
          <div className="about-content">
            <h2>Jessica Romo</h2>
            <h3>Frontend Web Developer</h3>
            <div className="skills-icons">
              <RiJavascriptFill id="jsl" />
              <BiLogoTypescript id="tsl" />
              <FaReact id="rl" />
              <FaWordpressSimple id="wpsl" />
              <FaHtml5 id="htmll" />
              <IoLogoCss3 id="cssl" />
              <FaNodeJs id="njsl" />
              <BiLogoPostgresql id="pgl" />
            </div>
          </div>
        </div>
      </div>
      <div ref={sectionRef2} className="projects-section">
        <h1 className="headers">Projects</h1>
        <div className="proj">
          <img src={todo} alt="Todo" className="pic" />
          <div className="todotext">
            <h3>Random Todo</h3>
            <p>
              Helpful web app for indecisive people that have a lot to do and
              don't know where to start!
            </p>
          </div>
        </div>
        <div className="proj">
          <img src={graph} alt="Graph" className="pic" />
          <div className="todotext">
            <h3>Graph Traversal</h3>
            <p>Visualizer for graph traversal algorithms</p>
          </div>
        </div>
        <div className="proj">
          <img src={cat} alt="Cat" className="pic" />
          <div className="todotext">
            <h3>MyMix</h3>
            <p>
              Fun web app utilizing the Spotify API to display user's top tracks
              tracks in the style of an early 2000s-esque mix tape
            </p>
          </div>
        </div>
      </div>
      <div ref={sectionRef3} className="contact-section">
        <h1 className="headers">Get in Touch!</h1>
        <div className="contactIcons">
          <div className="emailInfo">
            <ContactButton className="emailIcon" />
          </div>
          <div className="gitinfo">
            <a
              href="https://github.com/Jessromo"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub className="gitIcon" />
            </a>
          </div>
          <div className="linkedinfo">
            <a
              href="https://www.linkedin.com/in/jessica-romo-607083273"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin className="linkedIcon" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nav;
