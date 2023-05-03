import { DataStorage } from "../../Datas/DataStorage";


const FeatureP_2 = () => {
 const className = {
   container:
     "w-screen h-auto py-20 px-20 2xl:px-28 space-y-14 font-Poppins text-dark-blue",
   title: "font-semibold text-4xl text-center",
   cardsBox: "w-full grid grid-cols-3 gap-5 place-items-center",
   card: "bg-[#F4F6FC] p-10 space-y-5 rounded-md",
   cardTitle: "text-2xl font-medium",
   logoCardBox: "w-full flex gap-20 items-center justify-center",
   logoTitle: "text-4xl font-semibold",
   logoCard: "flex gap-6 xl:gap-16",
   logoImg: "w-32 xl:w-auto",
   logoSubtitle: "opacity-70",
 };

 var Data = DataStorage.feature;

 return (
   <div className={className.container}>
     <div className={className.logoCardBox}>
       <div>
         <h1 className={className.logoTitle}>100.000+</h1>
         <p className={className.logoSubtitle}>Finsweet Users</p>
       </div>
       <div className={className.logoCard}>
         {Data.page2Logos.map((data, index) => (
           <img src={data.img} alt={data.alt} key={index} />
         ))}
       </div>
     </div>

     <h1 className={className.title}>
       The benefits of working <br />
       with us
     </h1>

     <div className={className.cardsBox}>
       {Data.page2Cards.map((data, index) => (
         <div key={index} className={className.card}>
           <img src={data.icon} alt={data.title} className="w-8" />
           <h1 className={className.cardTitle}>{data.title}</h1>
           <p>{data.subtitle}</p>
         </div>
       ))}
     </div>
   </div>
 );
    
}

export default FeatureP_2;