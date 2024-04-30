import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { GridLoader } from "react-spinners";

const SubCountryDetails = () => {
  const [loading, setLoading] = useState(false);
  const [countryDetails, setCountryDetails] = useState([]);

  const { id } = useParams();
  useEffect(() => {
    setLoading(true);
    fetch(`https://trip-trackers-server.vercel.app/country/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setCountryDetails(data);
        setLoading(false);
      });
  }, []);
  const {
    tourists_spot_name,
    country_Name,
    location,
    description,
    average_cost,
    seasonality,
  } = countryDetails;
  return (
    <div>
      {loading ? (
        <div className="flex justify-center items-center min-h-[calc(100vh-338px)]">
          <GridLoader color="#36d7b7" />
        </div>
      ) : (
        <div className="card max-w-3xl mx-auto my-10 bg-base-200 shadow-xl">
          <div className="card-body">
            <h2 className="card-title font-Playfair-Display">
              {tourists_spot_name}
            </h2>
            <h2 className="text-base font-bold">{country_Name}</h2>
            <p>{description}</p>
            <p>Location : {location}</p>
            <p>Cost : {average_cost}</p>
            <p>Seasonality : {seasonality}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default SubCountryDetails;
