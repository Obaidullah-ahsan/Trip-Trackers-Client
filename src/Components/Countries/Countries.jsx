import { useEffect, useState } from "react";
import CountriesCard from "../CountriesCard/CountriesCard";
import { Fade } from "react-awesome-reveal";

const Countries = () => {
  const [countries, setCountries] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/country")
      .then((res) => res.json())
      .then((data) => {
        setCountries(data);
      });
  }, []);
  return (
    <div>
      <div className="max-w-4xl mx-4 md:mx-7 lg:ml-20">
        <Fade cascade Fade direction="up">
          <h1 className="text-5xl leading-[55px] font-bold font-Playfair-Display">
            Countries
          </h1>
        </Fade>
        <Fade cascade Fade direction="up">
          <p className="my-5">
            In the Countries section of a trip tracker application or website,
            users can explore a comprehensive array of destinations around the
            globe. This feature is designed to help travelers get an in-depth
            look at each countrys unique offerings, from local customs and top
            sights to essential travel tips such as visa requirements and safety
            advice.
          </p>
        </Fade>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mx-5 md:mx-7 lg:mx-20">
        {countries.map((country) => (
          <CountriesCard key={country._id} country={country}></CountriesCard>
        ))}
      </div>
    </div>
  );
};

export default Countries;
