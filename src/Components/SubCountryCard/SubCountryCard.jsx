import { Link } from "react-router-dom";

const SubCountryCard = ({ country }) => {
  const {
    _id,
    tourists_spot_name,
    country_Name,
    location,
    description,
    average_cost,
    seasonality,
  } = country;
  return (
    <div className="card bg-base-200 shadow-xl">
      <div className="card-body">
        <h2 className="card-title font-Playfair-Display">{tourists_spot_name}</h2>
        <h2 className="text-base font-bold">{country_Name}</h2>
        <p>{description}</p>
        <p>Location : {location}</p>
        <p>Cost : {average_cost}</p>
        <p>Seasonality : {seasonality}</p>
        <div className="card-actions justify-end">
          <Link to={`/subCountry/${_id}`} className="btn bg-[#43BA7F] p-2 text-white rounded-md">View Details</Link>
        </div>
      </div>
    </div>
  );
};

export default SubCountryCard;
