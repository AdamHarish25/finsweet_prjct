import ConfusedWoman from '../Attachments/Images/MobileWarning/confusedWoman.svg'
import { useViewport } from '../Components/Viewport';
import { DataStorage } from '../Datas/DataStorage';


const MobileWarning = () => {

    const viewport = useViewport().windowSize;


    const className = {
        container: `w-screen ${viewport.innerHeight >= 820 ? "h-screen" : "h-auto"} py-20 px-10 md:p-20 lg:p-28 flex flex-col items-center justify-center gap-10 text-dark-blue font-Poppins`,
        headerImg: "w-auto lg:w-60 rounded-full ",
        title: "text-xl md:text-2xl font-medium text-center w-full md:w-auto",
        cardBox: "grid grid-cols-2 gap-7 md:gap-10 place-items-center",
        card: "space-y-5",
        cardTitle: "font-medium text-sm text-center",
        cardImg: "w-full",
    }

    var Data = DataStorage.mobileWarning;

    return (
      <div className={className.container}>
        <img
          src={ConfusedWoman}
          alt="Confused woman vector"
          className={className.headerImg}
        />

        <h1 className={className.title}>
          Oops, looks like our website is not yet available to device you’re
          currently using.
        </h1>

        <div className={className.cardBox}>
          {Data.map((data, index) => (
            <div key={index} className={className.card}>
              <h1 className={className.cardTitle}>{data.title}:</h1>
              <img
                src={data.img}
                alt={data.title}
                className={className.cardImg}
              />
            </div>
          ))}
        </div>
      </div>
    );
}

export default MobileWarning;