import Carousel from '../../Components/Carousel/Carousel';
import {DataStorage} from '../../Datas/DataStorage'

const HomeP_5 = () => {
    const className = {
        container: "w-screen h-[510px] px-20 py-[120px] bg-[#f4f6fc7e] flex items-center justify-between font-Poppins",
        carouselBox: "w-[850px] h-auto p-10",
        heading: "space-y-5 text-start px-10",

    };

    var Data = DataStorage.home.page5Slider

    return (
        <div className={ className.container }>
            <div className={className.heading}>
                <h1 className="text-3xl font-bold">
                    What our clients <br/>say about us
                </h1>
                <p className='text-sm font-light text-[#282938]'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit sed.
                </p>
            </div>
            <div className={className.carouselBox}>
                <Carousel items={Data} />
            </div>
        </div>
    )
};

export default HomeP_5;