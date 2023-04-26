import FaqAccordion from "../../Components/Accordion/FaqAccordion";
import { DataStorage } from "../../Datas/DataStorage";


const FeatureP_4 = () => {

   const className = {
     container:
       "w-screen h-auto p-20 flex items-center justify-between gap-10 font-Poppins",
     paragraphBox: "space-y-5 text-start w-[300px] 2xl:w-[500px]",
     title: "text-3xl 2xl:text-5xl font-semibold",
     subtitle: "text-royal-blue text-lg font-medium",
     accordionBox: "px-10",
   };

   var Data = DataStorage.feature.page4Accordion;

   return (
     <div className={className.container}>
       <div className={className.paragraphBox}>
         <h1 className={className.title}>
           Frequently <br />
           asked questions
         </h1>
         <p className={className.subtitle}>Contact us for more info</p>
       </div>
       <div className={className.accordionBox}>
         <FaqAccordion faqs={Data} />
       </div>
     </div>
   );
    
}

export default FeatureP_4;