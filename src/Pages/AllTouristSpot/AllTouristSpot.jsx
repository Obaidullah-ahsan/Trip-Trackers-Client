import { Fade } from "react-awesome-reveal";
import { useLoaderData } from "react-router-dom";
import AllTouristSpotsCard from "../../Components/AllTouristSpotsCard/AllTouristSpotsCard";
import { useState } from "react";

const AllTouristSpot = () => {
  const touristSpots = useLoaderData();
  const [sortValue, setSortValue] = useState(null);
  const sortedArray = touristSpots.sort((a, b) => {
    let averageCostInt1 = parseInt(a.averageCost.slice(1, 10));
    let averageCostInt2 = parseInt(b.averageCost.slice(1, 10));
    if (sortValue == 1) {
      if (averageCostInt1 > averageCostInt2) {
        return 1;
      }
      if (averageCostInt1 < averageCostInt2) {
        return -1;
      }
      return 0;
    }
    if (sortValue == -1) {
      if (averageCostInt1 > averageCostInt2) {
        return -1;
      }
      if (averageCostInt1 < averageCostInt2) {
        return 1;
      }
      return 0;
    }
  });

  const options = [
    { value: 1, label: "Ascending" },
    { value: -1, label: "Descending" },
  ];
  const handleSort = (e) => {
    setSortValue(e.target.value);
  };
  console.log(sortValue);
  return (
    <div className="mx-20 mb-20 mt-10">
      <h1 className="text-4xl font-bold text-center mx-auto mb-7 font-Playfair-Display">
        Add Tourist Spot
      </h1>
      <div className="flex justify-center mb-7">
        <select
          onChange={handleSort}
          defaultValue={"DEFAULT"}
          className="select select-bordered w-full max-w-xs"
        >
          <option value="DEFAULT" disabled>
            Sort
          </option>
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {sortedArray.map((touristSpot) => (
          <AllTouristSpotsCard
            key={touristSpot._id}
            touristSpot={touristSpot}
          ></AllTouristSpotsCard>
        ))}
      </div>
    </div>
  );
};

export default AllTouristSpot;
