import Carousel from '../../Components/Carousel/Carousel';
import {DataStorage} from '../../Datas/DataStorage'

const HomeP_5 = () => {
    const className = {
        container: "w-screen h-[510px] px-20 py-[120px] bg-[#f4f6fc7e] flex items-center gap-8 font-Poppins",
        carouselBox: "w-[850px] h-auto p-10",
        heading: "space-y-5 text-start px-10",
        card: "w-full h-[300px] flex flex-col justify-between text-black",
        feedback: "text-2xl font-medium",
        personInfo: "p-5 flex items-center gap-5"

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
                <Carousel items={ Data.map((data, index) => {
                    return (
                        <div key={ index } className={ className.card }>
                            <h1 className={ className.feedback }>
                                { data.feedback }
                            </h1>
                            <div className={ className.personInfo }>
                                <img className='h-12 rounded-full' src={ data.photo } alt={ data.client } />
                                <h1>
                                    { data.client }
                                    <p className='text-xs'>
                                        { data.position }
                                    </p>
                                </h1>
                            </div>
                        </div>
                    );
                }) } />
            </div>
        </div>
    )
};

export default HomeP_5;