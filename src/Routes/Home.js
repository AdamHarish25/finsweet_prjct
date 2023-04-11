/* eslint-disable */
import HomeP_1 from './Home/Page-1';
import HomeP_2 from './Home/Page-2';
import HomeP_3 from './Home/Page-3';
import HomeP_4 from './Home/Page-4';

const Home = () => {
  const classname = {
      outerBox: "w-screen h-auto",

    };

    return (
      <div className={classname.outerBox}>
        <HomeP_1 />
        <HomeP_2 />
        <HomeP_3 />
        <HomeP_4 />
      </div>
    );
}

export default Home;