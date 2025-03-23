import React from "react";
import "./style.scss";
import { useNavigate } from "react-router-dom";
import { Animate } from "react-simple-animate";
const Home = () => {
  const navigate = useNavigate();

  const navigatetocontactpage = () => {
    navigate("/contact");
  };
  return (
    <section id="home" className="home">
      <div className="home__text__wrapper">
        <h1>
          hello, I'm Arpit Patel
          <br />A Full Stack Developer
        </h1>
      </div>
      <Animate 
      play
      duration={1.5}
      delay={1}
      start={{
        transform:'translateY(550px)'
      }}
      end={{
        transform:'translateY(0px)'
      }}
      >
        <div className="home__contact-me">
          <button onClick={navigatetocontactpage}>Contact Me</button>
        </div>
      </Animate>
    </section>
  );
};

export default Home;
