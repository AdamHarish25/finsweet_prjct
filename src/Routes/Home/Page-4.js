import {DataStorage} from '../../Datas/DataStorage'

const HomeP_4 = () => {

    const className = {
        container: "w-screen h-auto bg-[#F4F6FC] p-20 flex flex-col gap-10 justify-center font-Poppins",
        titleBox: "w-full h-auto text-center space-y-3",
        section: "text-sm text-[#282938] font-medium",
        title: "text-4xl text-[#282938] font-semibold",
        cardBox: "w-full h-full grid grid-cols-3 gap-8",
        card: "p-7 w-full h-[310px] text-start bg-white flex flex-col justify-center rounded-lg space-y-5",
        cardTitle: "text-2xl text-black",
        cardDescription: "font-light text-[#282938]",

    };

    var cardlist = DataStorage.home.page4Cards

    return (
        <div className={className.container}>
            <div className={className.titleBox}>
                <p className={ className.section }>
                    Features
                </p>
                <h1 className={ className.title }>
                    Design that solves <br />problems, one product at a time
                </h1>
            </div>
            <div className={className.cardBox}>
                { cardlist.map((data, index) => (
                    <div className={className.card}>
                        <img className='w-8' src={ data.icon } alt=''/>
                        <h1 className={className.cardTitle}>
                            { data.title }
                        </h1>
                        <p className={className.cardDescription}>
                            { data.description }
                        </p>
                    </div>
                ))}
            </div>
        </div>
    )

};

export default HomeP_4