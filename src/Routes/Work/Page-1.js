import { Link } from "react-router-dom";
import { DataStorage } from "../../Datas/DataStorage";


const WorkP_1 = () => {

    const className = {
      container:
        "w-screen flex flex-col gap-7 items-center justify-center p-20 text-center bg-pearl-gray text-dark-blue",
      headerBox: "space-y-3",
      title: "text-4xl font-semibold",
      listBox: "list-none flex items-center gap-5 justify-center",
      link: "hover:text-gray-400 transition-colors duration-300",
    };

    var Data = DataStorage.work.socmedLinks;

    return (
      <div className={className.container}>
        <div className={className.headerBox}>
          <p>What we created</p>
          <h1 className={className.title}>Our Work Portfolio</h1>
        </div>

        <p>
          We help teams create great digital products by providing them with
          tools and technology <br />
          to make the design-to-code process universally accessible.
        </p>

        <ul className={className.listBox}>
          {Data.map((data, index) => (
            <li key={index}>
              <Link target="_blank" className={className.link} to={data.link}>
                {data.icon}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    );

}

export default WorkP_1;