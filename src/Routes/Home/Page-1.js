import { Link } from 'react-router-dom';
import vector from '../../Attachments/Images/homeVector.svg';
import { FaArrowRight } from 'react-icons/fa';

const HomeP_1 = () => {
    const classname = {
      container: "w-screen h-screen p-10 bg-[#1C1E53] grid grid-cols-2 gap-5 ",
      greetings:
        "h-full w-full flex flex-col justify-center gap-10 font-Poppins text-white px-20",
      title: "text-5xl",
      imageBox: "h-full w-full grid place-items-center",
      buttonBox: "flex items-center gap-10",
      link1: "px-10 py-6 bg-[#FCD980] rounded-full text-black",
      link2: "flex items-center gap-4 transform duration-150 hover:gap-6",
    };


    return (
        <div className={ classname.container  }>
            <div className={ classname.greetings }>
                <strong className={classname.title}>
                    Building stellar <br />
                    websites for early <br />
                    startups
                </strong>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do <br />eiusmod tempor incididunt.
                </p>
                <div className={ classname.buttonBox }>
                    <Link to="/Work" className={classname.link1}>View our work</Link>
                    <Link className={classname.link2} to="/Pricing">View Pricing <FaArrowRight/></Link>
                </div>
            </div>

            <div className={ classname.imageBox }>
                <img src={ vector } alt="A vector-like Img" />
            </div>
        </div>  
    )
};

export default HomeP_1