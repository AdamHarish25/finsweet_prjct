import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import { DataStorage } from "../../Datas/DataStorage";

const HomeP_3 = () => {
  const classname = {
    container: "w-screen h-screen py-10 px-20 my-10 space-y-5 font-Poppins",
    topbar: "grid grid-cols-2 gap-[600px]",
    linkBox: "w-full flex items-center justify-end",
    Link: "flex items-center gap-3 hover:gap-5 transform duration-300",
    topbarTitle: "text-3xl 2xl:text-4xl font-bold w-full",
    cardBox: "w-full h-full flex items-center justify-center gap-5 py-10",
    card1: "relative w-[843px] h-full shadow-md",
    cardImg: "object-cover w-full h-full absolute top-2/4 -translate-y-2/4",
    cardin:
      "h-full bg-gradient-to-tl from-[#1C1E53] to-[#1c1e537c] absolute z-10 flex flex-col justify-end p-10 gap-3 text-white",
    card2: "relative w-[405px] shadow-md",
  };

  var Data = DataStorage.home.page3Cards;

  return (
    <div className={classname.container}>
      <div className={classname.topbar}>
        <h1 className={classname.topbarTitle}>View our Projects</h1>

        <div className={classname.linkBox}>
          <Link className={classname.Link} to={`/Work`}>
            View more <FaArrowRight />
          </Link>
        </div>
      </div>
      <div className={classname.cardBox}>
        <div className={classname.card1}>
          <img src={Data.card1.img} alt="" className={classname.cardImg} />
          <div className={`${classname.cardin} w-[50%]`}>
            <h1 className="text-2xl font-medium">{Data.card1.title}</h1>
            <p className="text-sm">{Data.card1.subtitle}</p>

            <div>
              <Link
                to={`/Work`}
                className={`${classname.Link} text-yellow-500 text-sm my-10`}
              >
                View projects <FaArrowRight />
              </Link>
            </div>
          </div>
        </div>
        <div className="h-full w-auto grid grid-rows-2 gap-5">
          <div className={classname.card2}>
            <img src={Data.card2.img} alt="" className={classname.cardImg} />
            <div className={`${classname.cardin} w-full`}>
              <h1 className="text-2xl font-medium">{Data.card2.title}</h1>
              <Link
                to={`/Work`}
                className={`${classname.Link} text-yellow-500 text-sm my-3`}
              >
                View portfolio <FaArrowRight />
              </Link>
            </div>
          </div>
          <img src={Data.card3} alt="" className="w-[405px] shadow-md" />
        </div>
      </div>
    </div>
  );
};

export default HomeP_3;
