/* eslint-disable */
import FeatureP_1 from "./Features/Page-1";
import FeatureP_2 from "./Features/Page-2";
import FeatureP_3 from "./Features/Page-3";
import FeatureP_4 from "./Features/Page-4";

const Features = () => {
  const className = {
    container: "w-screen h-auto font-Poppins",
  };

  return (
    <div className={className.container}>
      <FeatureP_1 />
      <FeatureP_2 />
      <FeatureP_3 />
      <FeatureP_4 />
    </div>
  );
};

export default Features;
