import { DataStorage } from "../../Datas/DataStorage";


const AboutP_6 = () => {
    const className = {
      container:
        "w-screen h-auto p-28 bg-[#F4F6FC] flex flex-col items-center justify-center gap-8 text-dark-blue",
      cardsBox: "grid grid-cols-4 gap-5 w-full",
      card: "py-20 px-10 bg-white flex flex-col justify-center items-center gap-7 rounded-md text-center",
      cardImg: "w-36 rounded-full",
      cardPG: "space-y-2",
      cardPGTitle: "text-2xl font-medium",
      cardPGSubtitle: "opacity-70",
    };

    var Data = DataStorage.about.page6Teams;

    return (
        <div className={className.container}>
            <h1 className="font-semibold text-4xl">
                Meet our team
            </h1>

            <div className={className.cardsBox}>
                {Data.map((data, index) => (
                    <div key={index} className={className.card}>
                        <img src={data.img} alt={`an img of ${data.name}`} className={className.cardImg}/>
                        <div className={className.cardPG}>
                            <h1 className={className.cardPGTitle}>
                                {data.name}
                            </h1>
                            <h2 className={className.cardPGSubtitle}>
                                {data.position}
                            </h2>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )

}

export default AboutP_6