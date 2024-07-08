import charlie_car from "../../../public/images/charlie_car.jpeg";
import ComingSoon from "@/app/(components)/coming_soon";

const Life = () => {
  return (
    <ComingSoon
      image={charlie_car}
      title="A Day in the Life"
      href="https://www.instagram.com/kormylophotography/"
      insta="kormylophotography"
      reverse={true}
    />
  );
};

export default Life;
