import AboutI1 from '../../Attachments/Images/AboutI1.png'

const AboutP_1 = () => {
    const className = {
      container: "w-screen h-screen grid grid-cols-2 py-10 px-20",
      paragraphBox: "text-dark-blue h-full flex w-full flex-col gap-5 justify-center",
      title: "text-5xl font-semibold",
      sectionTitle: "font-medium",
      subtitle: "text-sm",
      imageBox: "w-full h-full flex items-center justify-center"
    };

    return (
      <div className={className.container}>
        <div className={className.paragraphBox}>
          <p className={className.sectionTitle}>About Us</p>
          <h1 className={className.title}>
            Our designs solve <br />
            problems
          </h1>
          <p className={className.subtitle}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed <br/>do
            eiusmod tempor incididunt ut labore et dolore magna <br/>aliqua. Ut enim
            ad minim veniam.
          </p>
        </div>
        <div className={className.imageBox}>
            <img src={AboutI1} alt="an Img"/> 
        </div>
      </div>
    );
}

export default AboutP_1