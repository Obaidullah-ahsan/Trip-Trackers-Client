import { useLoaderData } from "react-router-dom";

const ViewDetails = () => {
  const touristSpot = useLoaderData();
  const {
    image,
    touristsSpotName,
    countryName,
    location,
    description,
    averageCost,
    seasonality,
    traveltime,
    totalVisitorsPerYear,
    email,
    name,
  } = touristSpot;
  return (
    <div className="my-6">
      <div className="h-60 md:h-[450px] mx-5">
        <img className="h-full w-full rounded-sm" src={image} alt="" />
      </div>
      <div className="mx-6 my-6 px-4">
        <h2 className="text-3xl font-bold mb-2 font-Playfair-Display">
          {touristsSpotName}
        </h2>
        <h2 className="text-xl font-bold  font-Playfair-Display">
          {countryName}
        </h2>
        <p className="mb-4 mt-2">
          <span className="font-bold">Description :</span> {description}
        </p>
        <p className="text-xl border-y font-bold py-2 font-Playfair-Display text-[#43BA7F]">
          Cost : {averageCost}
        </p>
        <p className="font-semibold mb-2 mt-4">Location : {location}</p>
        <p className="font-semibold mb-2">Location : {seasonality}</p>
        <p className="font-semibold mb-2">Area : {traveltime}</p>
        <p className="font-semibold mb-2">Price : {totalVisitorsPerYear}</p>
        <div className="my-4">
          <h2 className="text-xl font-bold text-[#43BA7F] border-y py-2  font-Playfair-Display">
            Added User Info
          </h2>
          <p className="font-semibold mb-2 mt-4">User Name : {name}</p>
          <p className="font-semibold mb-2">User Email : {email}</p>
        </div>
      </div>
    </div>
  );
};

export default ViewDetails;
