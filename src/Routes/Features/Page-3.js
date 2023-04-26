import { DataStorage } from "../../Datas/DataStorage";


const FeatureP_3 = () => {

     const className = {
       container:
         "w-screen h-auto py-10 space-y-10 text-dark-blue font-Poppins",
       card: "w-full grid grid-cols-2 gap-16 place-items-center py-14 px-28",
       paragraphBox: "space-y-6",
       sectTitle: "font-medium",
       title: "text-4xl font-semibold",
     };

     var Data = DataStorage.feature.page3Paragraphs

     return (
       <div className={className.container}>
         {Data.map((data, index) => (
           <div key={index}>
             <div className={className.card}>
               <div className={className.paragraphBox}>
                 <h5 className={className.sectTitle}>{data.header1}</h5>
                 <h1 className={className.title}>{data.title1}</h1>
                 <p>{data.subtitle1}</p>
               </div>
               <img src={data.img1} alt="an Img" />
             </div>

             <div className={`${className.card} ${data.bgColor2}`}>
               <img src={data.img2} alt="an Img" />
               <div className={className.paragraphBox}>
                 <h5 className={className.sectTitle}>{data.header2}</h5>
                 <h1 className={className.title}>{data.title2}</h1>
                 <p>{data.subtitle2}</p>
               </div>
             </div>
           </div>
         ))}
       </div>
     );
}

export default FeatureP_3;