/* eslint-disable */
import WorkP_3 from "./Work/Page-3";


const WorkCase = ({ data }) => {
  const className = {
    container: "w-screen h-auto py-36 px-32 space-y-24 text-dark-blue",
    headerBox: "space-y-14",
    header: "space-y-6 w-full text-start",
    headerSect: "text-xl font-medium opacity-70",
    title: "text-4xl font-semibold",
    introCard: "w-full space-y-8",
    img: "w-full",
    clientInfoBar:
      "py-4 flex items-center w-full justify-between border-b-2 border-opacity-50 border-b-dark-blue",
    sections: "space-y-2 text-start",
    clientInfo: "text-2xl font-medium",
    contentBox: "w-full px-20 space-y-16",
    paragraphBox: "space-y-6",
    list: "space-y-4 list-disc opacity-70 px-10",
    paragraph: "opacity-70",
    keywordBox:
      "flex items-center justify-between w-full border-y-2 border-y-dark-blue py-5 border-opacity-30",
    keywordTitle: "text-2xl font-medium text-royal-blue",
    keywordList: "w-full pl-16 2xl:pl-20 flex items-center justify-between text-lg font-medium opacity-70",
  };


  return (
    <div className={className.container}>
      <div className={className.headerBox}>
        <div className={className.header}>
          <p className={className.headerSect}>{data.headerSect}</p>
          <h1 className={className.title}>{data.headerTitle}</h1>
          <p className="w-[800px]">{data.headerSubtitle}</p>
        </div>

        <div className={className.introCard}>
          <img
            src={data.img1}
            alt={data.clientServiceChoice}
            className={className.img}
          />

          <div className={className.clientInfoBar}>
            <div className={className.sections}>
              <p>Client</p>
              <h1 className={className.clientInfo}>{data.clientName}</h1>
            </div>

            <div className={className.sections}>
              <p>Service</p>
              <h1 className={className.clientInfo}>
                {data.clientServiceChoice}
              </h1>
            </div>

            <div className={className.sections}>
              <p>Deliverable</p>
              <h1 className={className.clientInfo}>{data.clientDelivery}</h1>
            </div>
          </div>
        </div>
      </div>

      <div className={className.contentBox}>
        <section className={className.paragraphBox}>
          <h1 className={className.title}>{data.title1}</h1>
          <p className={className.paragraph}>{data.subtitle1}</p>
          <ul className={className.list}>
            {data.list1.map((data2, index) => (
              <li key={index}>{data2.content}</li>
            ))}
          </ul>
        </section>

        <img src={data.img2} alt="subImg" className={className.img} />

        <section className={className.paragraphBox}>
          <h1 className={className.title}>{data.title2}</h1>
          <p className={className.paragraph}>{data.subtitle2}</p>
          <ul className={className.list}>
            {data.list2.map((data2, index) => (
              <li key={index}>{data2.content}</li>
            ))}
          </ul>
        </section>
      </div>

      <div className={className.keywordBox}>
        <h1 className={className.keywordTitle}>Keywords</h1>

        <ul className={className.keywordList}>
          {data.keywordList.map((data3, index) => (
            <li key={index}>{data3.keyword}</li>
          ))}
        </ul>
      </div>

      <WorkP_3 />
    </div>
  );
}

export default WorkCase;