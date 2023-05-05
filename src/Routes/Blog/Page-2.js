import { Link } from "react-router-dom";
import { DataStorage } from "../../Datas/DataStorage";
import { FaArrowRight } from "react-icons/fa";




const BlogP_2 = () => {
    const className = {
      container: "w-full space-y-10 text-dark-blue",
      title: "text-center font-semibold text-4xl 2xl:text-5xl",
      cardBox: "w-full grid grid-cols-3 gap-10",
      card: "space-y-6 w-full ",
      cardImg: "w-full",
      dateStamp: "opacity-70 font-medium",
      cardTitle: "font-medium text-2xl 2xl:text-3xl",
      cardSubtitle: "opacity-70",
      cardLink: "flex items-center gap-4 text-solid-dark-blue hover:gap-6 transform duration-300"

    };

    var Data = DataStorage.blog;

    return (
      <div className={className.container}>
        <h1 className={className.title}>Our Blog</h1>

        <div className={className.cardBox}>
          {Data.map((data, index) => (
            <div className={className.card} key={index}>
              <img
                src={data.img}
                alt="Random generated img"
                className={className.cardImg}
              />
              <p className={className.dateStamp}>{data.date}</p>
              <h1 className={className.cardTitle}>{data.title}</h1>
              <p className={className.cardSubtitle}>{data.subtitle}</p>

              <Link
                to={`page${data.id}`}
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

export default BlogP_2;