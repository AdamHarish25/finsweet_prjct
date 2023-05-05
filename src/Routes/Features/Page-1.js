import { Link } from "react-router-dom";
import vector from "../../Attachments/Images/Features/featureVector.svg";


const FeatureP_1 = () => {
     const classname = {
       container: "w-screen h-screen p-10 bg-[#1C1E53] grid grid-cols-2 gap-5 ",
       greetings:
         "h-full w-full flex flex-col justify-center gap-10 font-Poppins text-white px-20",
       title: "text-5xl",
       imageBox: "h-full w-full grid place-items-center",
       buttonBox: "flex items-center gap-10",
       link1: "px-10 py-4 bg-[#FCD980] rounded-full text-black",
     };

     return (
       <div className={classname.container}>
         <div className={classname.greetings}>
           <strong className={classname.title}>
             All the features <br />
             you need
           </strong>
           <p>
             Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do{" "}
             <br />
             eiusmod tempor incididunt.
           </p>
           <div className={classname.buttonBox}>
             <Link
               to="/Pricing"
               className={classname.link1}
             >
               View Pricing
             </Link>
           </div>
         </div>

         <div className={classname.imageBox}>
           <img src={vector} alt="A vector-like Img" />
         </div>
       </div>
     );
}

export default FeatureP_1;