import HomeP_1 from './Home/Page-1'
import HomeP_2 from './Home/Page-2';

const Home = () => {
  const classname = {
      outerBox: "w-screen h-auto",

    };

    return (
      <div className={classname.outerBox}>
        <HomeP_1 />
        <HomeP_2 />
      </div>
    );
}

export default Home;