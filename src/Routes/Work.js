/* eslint-disable */
import WorkP_1 from "./Work/Page-1";
import WorkP_2 from "./Work/Page-2";
import WorkP_3 from "./Work/Page-3";

const Work = () => {
  const className = {
    container: "w-screen h-auto font-Poppins pt-[90px]",
  };

  return (
    <div className={className.container}>
      <WorkP_1 />
      <WorkP_2 />
      <WorkP_3 />
    </div>
  );
};

export default Work;
