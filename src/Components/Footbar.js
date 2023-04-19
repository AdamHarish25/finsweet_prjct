import BottomBar from "./BottomBar";
import Footer from "./Footer";


const Footbar = () => {

    const className = {
      container: "w-screen absolute bottom-0 mt-20",
    };

    return(
        <div className={className.container}>
            <Footer/>
            <BottomBar/>
        </div>
    )

}

export default Footbar