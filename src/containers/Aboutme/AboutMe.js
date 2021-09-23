import classes from "./AboutMe.module.scss";
import { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
const AboutMe = () => {
  const [intro, setIntro] = useState("");
  AOS.init({
    useClassNames: true,
    initClassName: false,
    animatedClassName: "animated",
    duration: 2000,
  });
  useEffect(() => {
    let arrName = "My name is Nguyet. I'm a Frontend Developer.";

    const setIn = setTimeout(() => {
      let name = "";
      for (let i = 0; i < arrName.length; i++) {
        name += arrName[i];
        let show = name + "|";
        setTimeout(() => setIntro(show), i * 200);
      }
      setTimeout(() => setIntro(name), arrName.length * 200);
    });
    return () => clearTimeout(setIn);
  }, []);
  useEffect(() => {
    let arrName = "My name is Nguyet. I'm a Frontend Developer.";

    const setIn = setInterval(() => {
      let name = "";
      for (let i = 0; i < arrName.length; i++) {
        name += arrName[i];
        let show = name + "|";
        setTimeout(() => setIntro(show), i * 200);
      }
      setTimeout(() => setIntro(name), arrName.length * 200);
    }, (arrName.length + 1) * 200);
    return () => clearTimeout(setIn);
  }, []);

  return (
    <div className={classes.container} data-aos="fade-up">
      <div className={classes.introduction}>
        <div className={classes.text}>
          <h1>Hello,</h1>
          <h1>{intro}</h1>
        </div>
        <ul>
          <li>
            <a
              href="https://www.facebook.com/nguyetthoicute/"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fab fa-facebook"></i>
            </a>
          </li>

          <li>
            <a
              href="https://github.com/nguyetdoan"
              target="_blank"
              rel="noreferrer"
            >
              <i class="fab fa-github"></i>
            </a>
          </li>
          <li>
            <a
              href="https://github.com/nguyetdoan"
              target="_blank"
              rel="noreferrer"
            >
              <i class="fab fa-linkedin"></i>
            </a>
          </li>
        </ul>
      </div>
      <img src="assets/avt.png" alt="avatar" />
    </div>
  );
};

export default AboutMe;
