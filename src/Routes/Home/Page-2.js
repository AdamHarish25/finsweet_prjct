import {FaArrowRight} from 'react-icons/fa'
import { Link } from 'react-router-dom';
import { DataStorage } from '../../Datas/DataStorage';

const HomeP_2 = () => {
    const classname = {
        container: "w-screen h-screen flex items-center font-Poppins bg-light-creme",
        box1: "w-full pl-20 py-10 h-full flex flex-col items-start justify-center gap-5",
        link: "flex items-center gap-3 hover:gap-5 transform duration-200 text-[#2405F2]",
        box2: "w-full grid grid-cols-2 gap-4 pr-24",
    }

    return (
        <div className={classname.container}>
            <div className={ classname.box1 }>
                <h1 className="text-5xl font-bold">
                    How we work
                </h1>

                <p className="text-dark-blue font-light text-sm">
                    Lorem ipsum dolor sit amet, consectetur<br/> adipiscing elit, sed do eiusmod tempor.
                </p>

                <Link to={`/Contact`} className={classname.link}>
                    Get in touch with us <FaArrowRight/>
                </Link>
            </div>
            <div className={ classname.box2 }>
                { DataStorage.home.page2List.map((list, index) => (
                    <div className='space-y-4 p-4'>
                        <img src={ list.image } alt='Vectorized numbers' className='h-12' />
                        <h1 className='text-4xl font-bold'>
                            {list.title}
                        </h1>
                        <p className='text-dark-blue text-sm'>
                            {list.description}
                        </p>
                    </div>
                ) )}
            </div>
        </div>
    )
};

export default HomeP_2