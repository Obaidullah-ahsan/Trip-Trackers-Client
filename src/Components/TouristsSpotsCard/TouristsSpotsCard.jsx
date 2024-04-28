import { Fade } from "react-awesome-reveal";
import { Link } from "react-router-dom";

const TouristsSpotsCard = ({ touristSpot }) => {
  const {
    _id,
    image,
    touristsSpotName,
    countryName,
    location,
    description,
    averageCost,
    seasonality,
    traveltime,
    totalVisitorsPerYear,
  } = touristSpot;
  console.log(_id);
  return (
    <Fade Fade direction="up">
      <div className=" flex max-h-72 shadow-md dark:bg-gray-50 dark:text-gray-800">
        <div className="w-[50%]">
          <img
            src={image}
            alt=""
            className="object-cover object-center  w-full h-72 dark:bg-gray-500"
          />
        </div>
        <div className="flex w-[50%] flex-col justify-between p-6 space-y-8">
          <div className="space-y-2">
            <h2 className="text-xl font-bold font-Playfair-Display tracking-wide">
              {touristsSpotName}
            </h2>
            <p className="font-semibold  font-Playfair-Display">{countryName}</p>
            <p className="dark:text-gray-800">{description.slice(0, 60)}</p>
            <p>Avarage Cost : {averageCost}</p>
          </div>
          <Link className="btn bg-[#43BA7F] p-2 rounded-md text-white font-semibold text-base">
            View Details
          </Link>
        </div>
      </div>
    </Fade>
  );
};

export default TouristsSpotsCard;
