import { Fragment, useEffect } from "react";
import How from "../../components/Covid19/How/How";
import What from "../../components/Covid19/What/What";
import Prevention from "../../components/Covid19/Prevention/Prevention";
import Symptoms from "../../components/Covid19/Symptoms/Symptoms";
import Aos from "aos";
import "aos/dist/aos.css";
const About = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <Fragment>
      <What />
      <How />
      <Symptoms data-aos="fade-up" />
      <Prevention />
    </Fragment>
  );
};

export default About;
