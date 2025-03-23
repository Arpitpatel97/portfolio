import React from "react";
import PageHeader from "../../components/pageHeader";
import { BsInfoCircleFill } from "react-icons/bs";
import { Animate } from "react-simple-animate";
import { FaReact, FaDatabase, FaNodeJs, FaDev } from "react-icons/fa";
import { DiApple, DiAndroid } from "react-icons/di";
import "./style.scss";
const personalDetails = [
  {
    label: "name :",
    value: "Arpit Patel",
  },
  {
    label: "Age :",
    value: "22",
  },
  {
    label: "address :",
    value: "kanpur, nagar",
  },
  {
    label: "email :",
    value: "arpitpatelk993@gmail.com",
  },
  {
    label: "Contact :",
    value: "6005675120",
  }
];

const jobSummary =
  "As a passionate and driven Full Stack Developer, I specialize in building dynamic, responsive, and user-friendly web applications. With a solid foundation in both front-end and back-end development, I have honed my skills in a variety of technologies including JavaScript, HTML, CSS, React, Node.js, and databases like MongoDB and MySQL. I thrive in creating seamless and efficient experiences for users while ensuring robust functionality on the server side ";

const About = () => {
  return (
    <section id="about" className="about">
      <PageHeader headerText="About Me" icon={<BsInfoCircleFill size={40} />} />
      <div className="about__content">
        <div />
        <div className="about__content__personalWrapper">
          <Animate
            play
            duration={1.5}
            delay={1}
            start={{
              transform: "translatex(-900px)",
            }}
            end={{
              transform: "translateY(0px)",
            }}
          >
            <h3>Full Stack Developer</h3>
            <p>{jobSummary}</p>
          </Animate>
          <Animate
            play
            duration={1.5}
            delay={1}
            start={{
              transform: "translatex(500px)",
            }}
            end={{
              transform: "translateY(0px)",
            }}
          >
            <h3 className="personal__details__title">Personal Information</h3>
            <ul>
              {personalDetails.map((item, i) => {
                return (
                  <li key={i}>
                    <span className="title">{item.label}</span>
                    <span className="value">{item.value}</span>
                  </li>
                );
              })}
            </ul>
          </Animate>
        </div>
        <div className="about__content__servicesWrapper">
        <Animate
            play
            duration={1.5}
            delay={1}
            start={{
              transform: "translatex(500px)",
            }}
            end={{
              transform: "translateY(0px)",
            }}
          >
          <div className="about__content__servicesWrapper__innercontent">
            <div>
              <FaDev size={60} color="var( --yellow-theme-main-color)" />
            </div>
            <div>
              <FaDatabase size={60} color="var( --yellow-theme-main-color)" />
            </div>
            <div>
              <DiAndroid size={60} color="var( --yellow-theme-main-color)" />
            </div>
            <div>
              <DiApple size={60} color="var( --yellow-theme-main-color)" />
            </div>
          </div>
          </Animate>
        </div>
      </div>
    </section>
  );
};

export default About;
