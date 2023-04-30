import { Link } from 'react-router-dom';
import Logo from '../Attachments/Images/Logo.svg';
import { DataStorage } from '../Datas/DataStorage';

const Footer = () => {
    const className = {
      container:
        "w-screen h-80 px-20 bg-solid-dark-blue grid grid-cols-2 text-white",
      contactTitle: "text-lg font-medium",
      contactCard:
        "absolute bottom-2 py-4 px-10 bg-[#FCD980] grid grid-cols-2 gap-10",
      contactSection: "space-y-1 text-[#282938]",
      card1: "relative py-16 space-y-4",
      card2: "w-full p-20 space-y-5 text-white",
      link: "hover:text-gray-400 transition-colors duration-300",
    };

    var Data = DataStorage.footer.socmedLinks;

    
    return (
      <div className={className.container}>
        <div className={className.card1}>
          <img src={Logo} alt="Logo" className="h-7" />
          <p className="text-sm">
            We are always open to discuss your project and <br />
            improve your online presence.
          </p>
          <div className={className.contactCard}>
            <div className={className.contactSection}>
              <h1 className={className.contactTitle}>Email me at</h1>
              <p>contact@website.com</p>
            </div>
            <div className={className.contactSection}>
              <h1 className={className.contactTitle}>Call us</h1>
              <p>0927 6277 28525</p>
            </div>
          </div>
        </div>
        <div className={className.card2}>
          <h1 className="text-4xl font-bold tracking-wider">Lets Talk!</h1>
          <p className="text-gray-400">
            We are always open to discuss your project, <br/>improve your online
            presence and help with your <br/>UX/UI design challenges.
          </p>
          <div className='flex items-center gap-5'>
            {Data.map((data, index) => (
              <Link className={className.link} to={data.link} key={index}>
                {data.icon}
              </Link>
            ))}
          </div>
        </div>
      </div>
    );
}

export default Footer;