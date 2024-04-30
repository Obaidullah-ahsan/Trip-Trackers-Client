import { useLoaderData } from "react-router-dom";
import SubCountryCard from "../../Components/SubCountryCard/SubCountryCard";

const SubCountry = () => {
  const subCountryData = useLoaderData();
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mx-5 md:mx-7 lg:mx-20 my-4 md:my-8">
      {subCountryData.map((country) => (
        <SubCountryCard key={country._id} country={country}></SubCountryCard>
      ))}
    </div>
  );
};

export default SubCountry;
