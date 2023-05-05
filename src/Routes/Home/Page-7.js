import { Link } from "react-router-dom";
import { FaArrowRight } from 'react-icons/fa'

const HomeP_7 = () => {
    const className = {
      container: "w-screen h-screen py-20 px-28 font-Poppins",
      innerContainer: "w-full h-full grid grid-cols-2",
      headers:
        "h-full w-full bg-formBG bg-cover bg-no-repeat bg-blend-darken bg-[#1c1e5385] flex flex-col gap-4 px-16 py-28 justify-start text-white",
      headerTitle: "text-[38px] font-semibold",
      formContainer: "w-full h-full bg-solid-dark-blue space-y-7 px-20 py-14",
      formHeaderBox: "text-white space-y-5 w-4/5",
      formHeader: "text-3xl font-medium",
      formSubHeader: "text-sm",
      formInput:
        "placeholder-gray-500 p-4 w-full bg-transparent border-2 border-[#ffffff10] rounded-xl focus:border-blue-300 outline-none",
      form: "flex flex-col gap-5 w-full text-white font-Poppins",
      formButton:
        "w-full mt-6 py-5 font-medium hover:bg-thick-creamy bg-bright-creamy transition-colors duration-300 text-black rounded-full",
      formLink:
        "flex items-center gap-3 text-white hover:gap-5 transform duration-300",
    };

    return (
      <div className={className.container}>
        <div className={className.innerContainer}>
          <div className={className.headers}>
            <h1 className={className.headerTitle}>
              Building stellar <br /> websites for <br />
              early startups
            </h1>
            <p className="text-sm">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed{" "}
              <br />
              do eiusmod tempor incididunt ut labore <br />
              et dolore magna aliqua ut enim.
            </p>
          </div>
          <div className={className.formContainer}>
            <div className={className.formHeaderBox}>
              <h1 className={className.formHeader}>Send Inquiry</h1>
              <p className={className.formSubHeader}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore.
              </p>
            </div>
            <form className={className.form}>
              <input
                type="text"
                placeholder="Your Name"
                className={className.formInput}
              />
              <input
                type="email"
                placeholder="Email"
                className={className.formInput}
              />
              <input
                type="url"
                placeholder="Paste your Figma design URL"
                className={className.formInput}
              />

              <button type="submit" className={className.formButton}>
                Send an Inquiry
              </button>
            </form>
            <div className="w-full flex justify-center">
              <Link
                to={`/Contact`}
                className={className.formLink}
              >
                Get in touch with us <FaArrowRight />
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
};

export default HomeP_7;
