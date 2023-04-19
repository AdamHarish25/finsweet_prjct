import AboutI2 from '../../Attachments/Images/AboutI2.png';

const AboutP_2 = () => {
    const className = {
      container: "w-screen h-screen px-20 flex flex-col ",
      cardBox: "w-full grid grid-cols-2 place-items-center gap-8 bg-light-creme text-dark-blue p-20 relative",
      title: "text-4xl font-semibold",
      sectTitle: "font-semibold absolute top-10 left-20",
      card: "space-y-6"
    };

    return (
      <div className={className.container}>
        <div className={className.cardBox}>
          <h5 className={className.sectTitle}>Who we are</h5>
          <div className={className.card}>
            <h1 className={className.title}>Goal Focused</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
          <div className={className.card}>
            <h1 className={className.title}>Continuous Improvement</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
        </div>
        <img src={AboutI2} alt="an Img" className="w-full" />
      </div>
    );
} 

export default AboutP_2