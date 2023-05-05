import { Link } from 'react-router-dom';
import headerImg from '../../Attachments/Images/Blog/header.png';

const BlogP_1 = () => {
    const className = {
      container:
        "w-full h-auto text-dark-blue text-center flex flex-col items-center justify-center gap-8",
      title: "text-4xl 2xl:text-5xl font-semibold",
      img: "w-full",
      link: "text-royal-blue",
      subtitle: "w-[800px] opacity-70",
    };

    return (
      <div className={className.container}>
        <h1 className={className.title}>
          A UX Case Study on Creating a <br />
          Studious Environment for Students
        </h1>
        <p>Andrew Jonson Posted on 27th January 2021</p>

        <img
          src={headerImg}
          alt="an img of a normal day in office"
          className={className.img}
        />

        <p className={className.subtitle}>
          Apparently we had reached a great height in the atmosphere, for the
          sky was a dead black, and the stars had ceased to twinkle. By the same
          illusion which lifts the horizon of the sea to the level of the
          spectator on a hillside.
        </p>

        <Link
          to={`page6`}
          className={className.link}
        >
          Read more
        </Link>
      </div>
    );
}

export default BlogP_1;