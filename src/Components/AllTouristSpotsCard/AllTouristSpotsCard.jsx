import { Link } from "react-router-dom";

const AllTouristSpotsCard = ({ touristSpot }) => {
  const {
    _id,
    image,
    touristsSpotName,
    countryName,
    averageCost,
    seasonality,
    traveltime,
    totalVisitorsPerYear,
  } = touristSpot;
  return (
    <div className="shadow-md dark:bg-gray-50 dark:text-gray-800">
      <img
        src={image}
        alt=""
        className="object-cover object-center  w-full h-52 dark:bg-gray-500"
      />

      <div className="flex flex-col justify-between p-6 space-y-8">
        <div className="space-y-2">
          <h2 className="text-xl font-bold font-Playfair-Display tracking-wide">
            {touristsSpotName}
          </h2>
          <p className="font-semibold  font-Playfair-Display">{countryName}</p>
          <p>Avarage Cost : {averageCost}</p>
          <p>Visitor per year : {totalVisitorsPerYear}</p>
          <p>Travel time : {traveltime}</p>
          <p>Seasonality : {seasonality}</p>
        </div>
        <Link
          to={``}
          className="btn bg-[#43BA7F] p-2 rounded-md text-white font-semibold text-base"
        >
          View Details
        </Link>
      </div>
    </div>
  );
};

export default AllTouristSpotsCard;
