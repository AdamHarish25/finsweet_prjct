/* eslint-disable */
import AboutP_1 from "./About/Page-1";
import AboutP_2 from "./About/Page-2";
import AboutP_3 from './About/Page-3'
import AboutP_4 from "./About/Page-4";

const About = () => {
  const className = {
    container: "w-screen h-auto font-Poppins py-10",
  };

  return (
    <div className={className.container}>
      <AboutP_1 />
      <AboutP_2 />
      <AboutP_3 />
      <AboutP_4 />
    </div>
  );
};

export default About;
