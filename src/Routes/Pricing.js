/* eslint-disable */

import PricingP_1 from "./Pricing/Page-1";
import PricingP_2 from "./Pricing/Page-2";

const Pricing = () => {
  const className = {
    container: "w-screen h-auto space-y-5 mt-40",
  };

  return (
    <div className={className.container}>
      <PricingP_1 />
      <PricingP_2 />
    </div>
  );
};

export default Pricing;
