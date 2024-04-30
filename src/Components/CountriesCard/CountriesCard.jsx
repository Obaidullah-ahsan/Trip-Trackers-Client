import { Fade } from "react-awesome-reveal";
import { Link } from "react-router-dom";

const CountriesCard = ({ country }) => {
  const { country_Name, image, description } = country;
  return (
    <Fade Fade direction="up">
      <Link to={`/country/${country_Name}`} className="card card-compact bg-base-100 shadow-xl">
        <figure>
          <img src={image} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{country_Name}</h2>
          <p>{description}</p>
        </div>
      </Link>
    </Fade>
  );
};

export default CountriesCard;
