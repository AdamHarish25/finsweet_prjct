import { Link } from "react-router-dom";
import { DataStorage } from "../../Datas/DataStorage";
import { RefreshPage } from "../../Components/RefreshPage";


const PricingP_1 = () => {
    const className = {
      container:
        "w-screen h-auto space-y-10 px-28 text-dark-blue font-Poppins py-10",
      paragraphBox: "space-y-3 text-center",
      title: "font-semibold text-4xl",
      subtitle: "opacity-70 text-sm",
      cardsBox: "h-full grid grid-cols-3 gap-10 place-items-center w-full",
      card: "w-full h-full px-10 text-start py-14 rounded-xl space-y-10",
      cardHeader: "space-y-4",
      cardPricing: "flex items-center gap-4",
      pricing: "text-[35px] tracking-wide font-semibold",
      cardParagraph: "space-y-4",
      cardTitle: "text-xl font-medium",
      cardSubtitle: "text-sm w-72 font-light",
      cardBody: "space-y-4",
    };

    var Data = DataStorage.pricing.page1Cards;

    

    return (
      <div className={className.container}>
        <div className={className.paragraphBox}>
          <h1 className={className.title}>Our Pricing Plans</h1>
          <p className={className.subtitle}>
            When you’re ready to go beyond prototyping in Figma, Webflow is <br/>
            ready to help you bring your designs to life — without coding them.
          </p>
        </div>
        <div className={className.cardsBox}>
            {
                Data.map((data, index ) => {
                    var background = `${className.card} ${data.background} ${data.textColor}`;
                    return (
                      <div key={index} className={background}>
                        <div className={className.cardHeader}>
                          <div className={className.cardPricing}>
                            <h1 className={className.pricing}>{data.price}</h1>
                            <p className={`text-sm ${data.typeColor}`}>
                              {data.type}
                            </p>
                          </div>

                          <div className={className.cardParagraph}>
                            <h1 className={className.cardTitle}>
                              {data.title}
                            </h1>
                            <p className={className.cardSubtitle}>
                              {data.subtitle}
                            </p>
                          </div>
                        </div>
                        <ul className={className.cardBody}>
                          {data.benefits.map((item, idx) => (
                            <li
                              key={idx}
                              className={`flex items-center gap-2 ${item.visibility}`}
                            >
                              <img src={item.icon} alt="icon" className="w-3" />{" "}
                              <p>{item.title}</p>
                            </li>
                          ))}
                        </ul>
                        <Link
                          onClick={() => RefreshPage()}
                          className={`block text-center py-3 ${data.buttonColor} rounded-xl`}
                          to={data.buttonLink}
                        >
                          {data.buttonText}
                        </Link>
                      </div>
                    );
})
            }
        </div>
      </div>
    );
}

export default PricingP_1;