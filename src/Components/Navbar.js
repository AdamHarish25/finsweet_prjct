import { Link } from 'react-router-dom';
import Logo from '../Attachments/Images/Logo.png';
import { DataStorage } from '../Datas/DataStorage';

export const Navbar = () =>

{
    const className = {
        container: "inset-x-0 fixed top-0 bg-[#1C1E53] text-white flex items-center justify-between py-8 px-10 font-Poppins ",
        logo: "h-5",
        list1: "gap-14 flex items-center list-none ",
        list2: "flex items-center gap-7 list-none",
        button: "py-4 px-8 rounded-full font-medium border border-white hover:text-[#1C1E53] hover:bg-white transition-colors duration-200",
    };

    return (
        <header className={className.container}>
            <img src={ Logo } alt="Logo" className={ className.logo } />

            <ul className={className.list1}>
                <li>
                    <ul className={className.list2}>
                        {
                            DataStorage.navbar.menus.map((data, index) => (
                                <li className='hover:font-bold' key={index}>
                                    <Link to={ data.link }>{ data.title }</Link>
                                </li>
                            ))
                        }
                    </ul>
                </li>
                <li>
                    <Link className={className.button} to="/ContactUs">
                        Contact Us
                    </Link>
                </li>
            </ul>
        </header>
    )
};