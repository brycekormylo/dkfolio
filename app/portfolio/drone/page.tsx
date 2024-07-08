import drone_shore from "../../../public/images/drone_shore.jpg";

import ComingSoon from "@/app/(components)/coming_soon";

const Drone = () => {
  return (
    <ComingSoon
      image={drone_shore}
      href="https://www.instagram.com/drone.ylo/"
      insta="drone.ylo"
      reverse={true}
    />
  );
};

export default Drone;
