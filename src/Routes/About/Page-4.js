import AboutI3 from '../../Attachments/Images/AboutI3.png';
import AboutI4 from "../../Attachments/Images/AboutI4.png";

const AboutP_4 = () => {
    const className = {
      container: "w-screen h-auto py-32 px-24 my-10 space-y-28 bg-[#EEF4FA] text-dark-blue font-Poppins",
      card: "w-full flex items-center justify-between",
      paragraphBox: "space-y-6",
      sectTitle: "font-medium",
      title: "text-4xl font-semibold",
    };

    return (
      <div className={className.container}>
        <div className={className.card}>
          <div className={className.paragraphBox}>
            <h5 className={className.sectTitle}>Our Mission</h5>
            <h1 className={className.title}>Inspire, Innovate, Share</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod
              <br /> tempor incididunt ut labore et dolore magna aliqua. Ut enim
              ad minim veniam, <br /> quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
          <img src={AboutI3} alt="an Img" />
        </div>
        <div className={className.card}>
          <img src={AboutI4} alt="an Img" />
          <div className={className.paragraphBox}>
            <h5 className={className.sectTitle}>Our Vision</h5>
            <h1 className={className.title}>Laser focus</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod<br /> tempor incididunt ut labore et dolore magna aliqua. Ut enim
              ad minim veniam, <br /> quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
        </div>
      </div>
    );
}

export default AboutP_4;