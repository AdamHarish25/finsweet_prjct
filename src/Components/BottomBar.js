import { DataStorage } from '../Datas/DataStorage';
import { Link } from 'react-router-dom';

const BottomBar = () => {
    const className = {
      container:
        "w-screen py-5 grid grid-cols-2 text-[#282938] bg-white place-items-center font-Poppins",
      menuBox: "flex items-center gap-7",
      link: "hover:font-medium transform duration-300",
    };

    var Data = DataStorage.bottomBar.menus 

    return (
      <div className={className.container}>
        <div className='w-full px-20 font-medium'>
          <h1>Copyright 2022, Finsweet.com</h1>
        </div>
        <div className={className.menuBox}>
            {Data.map((data, index) => (
                <Link to={data.link} key={index} className={`${className.link} ${window.location.pathname === data.link ? "font-medium" : "font-normal"}`}>
                    {data.title}
                </Link>
            ))}
        </div>
      </div>
    );
}

export default BottomBar