import {DataStorage} from '../../Datas/DataStorage'


const AboutP_3 = () => {
    const className = {
        container: "w-screen h-auto space-y-10 py-10 px-20 text-dark-blue",
        title: "font-semibold text-4xl text-center",
        stepbarBox: "grid grid-cols-4 gap-4 w-full py-10"
    };

    var Data = DataStorage.about.page3Stepbar

    return (
        <div className={className.container}>
            <h1 className={className.title}>
                The process we follow
            </h1>
            <div className={className.stepbarBox}>
                {Data.map((data, index) => (
                    <div key={index} className='h-[160px] relative flex flex-col gap-3 justify-end'>
                        <img src={data.img} alt={data.title} className='absolute left-0 top-3'/>
                        <h1 className='text-2xl font-medium'>
                           {data.title} 
                        </h1>
                        <p>
                            {data.subtitle}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default AboutP_3;