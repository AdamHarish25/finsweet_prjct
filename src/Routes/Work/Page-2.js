import { useState } from "react";
import { DataStorage } from "../../Datas/DataStorage";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";


const WorkP_2 = () => {
    const [ filtered, setFilter ] = useState("");


    const className = {
      container: "w-screen h-auto p-20 space-y-10",
      filterList: "flex items-center gap-5 justify-center w-full font-medium",
      cardBox: "w-full grid-cols-2 gap-10 grid place-items-center",
      portfolioCard: "w-fit space-y-5 text-dark-blue",
      cardTitle: "text-4xl font-semibold",
      cardButton: "flex items-center gap-4 font-medium hover:gap-8 transition-all duration-400",
    };

    const Data = DataStorage.work.page2filterList;

    const Data2 = DataStorage.work.page2PortfolioCards;

    return (
      <div className={className.container}>

        <ul className={className.filterList}>
          {Data.map((data, index) => (
            <li key={index}>
              <button
                className={
                  filtered === data.filter
                    ? "text-royal-blue"
                    : "text-dark-blue opacity-70"
                }
                onClick={() =>
                  filtered === data.filter
                    ? setFilter("")
                    : setFilter(data.filter)
                }
              >
                {data.title}
              </button>
            </li>
          ))}
        </ul>

        <div className={className.cardBox}>
          {(filtered === ""
            ? Data2
            : Data2.filter(({ tag }) => tag === filtered)
          ).map((data, index) => (
            <div key={index} className={className.portfolioCard}>
              <img src={data.img} alt={data.title} />
              <h1 className={className.cardTitle}>{data.title}</h1>
              <p>{data.subtitle}</p>
              <Link
                to={`page${data.id}`}
                className={className.cardButton}
              >
                {data.buttonText} <FaArrowRight />
              </Link>
            </div>
          ))}
        </div>

      </div>
    );
}

export default WorkP_2;