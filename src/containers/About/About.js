import { Fragment } from "react";
import How from "../../components/Covid19/How/How";
import What from "../../components/Covid19/What/What";
import Prevention from "../../components/Covid19/Prevention/Prevention";
import Symptoms from "../../components/Covid19/Symptoms/Symptoms";

const About = () => {
  return (
    <Fragment>
      <What />
      <How />
      <Symptoms />
      <Prevention />
    </Fragment>
  );
};

export default About;
