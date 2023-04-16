import { FaArrowRight } from "react-icons/fa";
import { DataStorage } from "../../Datas/DataStorage";
import { Link } from "react-router-dom";

const HomeP_8 = () => {
    const className = {
      container: "w-screen h-auto p-20 space-y-10",
      cardBox: "w-full h-full grid grid-cols-3 gap-8",
      card: "space-y-7 w-full",
      cardParagraph: "space-y-4",
      cardDate: "font-medium text-gray-500",
      cardTitle: "text-2xl font-medium",
      cardSubtitle: "text-gray-500",
      cardLink:
        "flex items-center gap-4 text-[#282938] font-medium hover:gap-6 transform duration-300 w-fit",
    };

    var Data = DataStorage.home.page7CardList

    return (
      <div className={className.container}>
        <h1 className="text-4xl font-medium">Our blog</h1>
        <div className={className.cardBox}>
          {Data.map((data, index) => (
            <div key={index} className={className.card}>
              <img
                src={data.image}
                alt={`img of ${data.datePosted}`}
                className="w-full"
              />
              <div className={className.cardParagraph}>
                <p className={className.cardDate}>{data.datePosted}</p>
                <h1 className={className.cardTitle}>{data.title}</h1>
                <p className={className.cardSubtitle}>{data.subtitle}</p>
              </div>
              <Link
                to={data.link}
                className={className.cardLink}
              >
                Read More <FaArrowRight />
              </Link>
            </div>
          ))}
        </div>
      </div>
    );
}

export default HomeP_8