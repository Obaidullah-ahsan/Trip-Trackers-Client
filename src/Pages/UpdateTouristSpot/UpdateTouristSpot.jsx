import { useContext, useState } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../../Provider/AuthProvider";
import { useLoaderData, useNavigate } from "react-router-dom";

const UpdateTouristSpot = () => {
    const navigate = useNavigate();
  const touristSpot = useLoaderData();
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

  const { user } = useContext(AuthContext);
  const [myValue, setMyValue] = useState(countryName);

  const options = [
    { value: "France", label: "France" },
    { value: "Italy", label: "Italy" },
    { value: "Spain", label: "Spain" },
    { value: "England", label: "England" },
    { value: "Netherlands", label: "Netherlands" },
    { value: "Switzerland", label: "Switzerland" },
  ];

  const handleSelectCountry = (e) => {
    setMyValue(e.target.value);
  };
  const handleUpdateTouristSpot = (e) => {
    e.preventDefault();
    const form = e.target;
    const image = form.image.value;
    const touristsSpotName = form.tourists_spot_name.value;
    const countryName = myValue;
    const location = form.location.value;
    const description = form.description.value;
    const averageCost = form.average_cost.value;
    const seasonality = form.seasonality.value;
    const traveltime = form.travel_time.value;
    const totalVisitorsPerYear = form.totalVisitorsPerYear.value;
    const updateTouristSpot = {
      image,
      touristsSpotName,
      countryName,
      location,
      description,
      averageCost,
      seasonality,
      traveltime,
      totalVisitorsPerYear,
    };
    fetch(`https://trip-trackers-server.vercel.app/touristspot/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updateTouristSpot),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount) {
          Swal.fire({
            title: "Succees!",
            text: "Tourist spot Update successfully",
            icon: "success",
            confirmButtonText: "Ok",
          });
        }
        form.reset();
        navigate('/mylist')
      });
  };
  return (
    <section className="p-6 mx-3 md:mx-5 lg:mx-20 pb-20 bg-base-300 dark:bg-gray-100 dark:text-gray-900">
      <h1 className="text-4xl font-bold text-center mx-auto mb-7 font-Playfair-Display">
        Update Tourist Spot
      </h1>
      <form
        onSubmit={handleUpdateTouristSpot}
        className="container flex flex-col mx-auto space-y-12"
      >
        <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
          <div className="col-span-full sm:col-span-3">
            <label htmlFor="firstname" className="text-base font-semibold">
              Image
            </label>
            <input
              id="image"
              type="text"
              name="image"
              required
              defaultValue={image}
              placeholder="Enter photo url"
              className="w-full min-h-10 h-10 px-4 mt-1 rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300"
            />
          </div>
          <div className="col-span-full sm:col-span-3">
            <label htmlFor="lastname" className="text-base font-semibold">
              Tourists spot name
            </label>
            <input
              id="tourists_spot_name"
              type="text"
              name="tourists_spot_name"
              required
              defaultValue={touristsSpotName}
              placeholder="Enter tourists spot name"
              className="w-full min-h-10 h-10 px-4 mt-1 rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300"
            />
          </div>
          <div className="col-span-full sm:col-span-3">
            <label htmlFor="lastname" className="text-base font-semibold">
              <div className="label py-[2px]">
                <span className="label-text">Country Name</span>
              </div>
              <select
                onChange={handleSelectCountry}
                defaultValue={countryName}
                className="select min-h-10 h-10 mt-1 select-bordered w-full"
              >
                <option value="DEFAULT" disabled>
                  Select Country
                </option>
                {options.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </label>
          </div>
          <div className="col-span-full sm:col-span-3">
            <label htmlFor="email" className="text-base font-semibold">
              Location
            </label>
            <input
              id="location"
              type="text"
              name="location"
              required
              defaultValue={location}
              placeholder="Enter location"
              className="w-full min-h-10 h-10 px-4 mt-1 rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300"
            />
          </div>
          <div className="col-span-full">
            <label htmlFor="address" className="text-base font-semibold">
              Short description
            </label>
            <input
              id="description"
              type="text"
              name="description"
              required
              defaultValue={description}
              placeholder="Enter short description"
              className="w-full min-h-10 h-10 px-4 mt-1 rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300"
            />
          </div>
          <div className="col-span-full sm:col-span-3">
            <label htmlFor="city" className="text-base font-semibold">
              Average cost
            </label>
            <input
              id="average_cost"
              type="text"
              name="average_cost"
              required
              defaultValue={averageCost}
              placeholder="Enter average cost"
              className="w-full min-h-10 h-10 px-4 mt-1 rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300"
            />
          </div>
          <div className="col-span-full sm:col-span-3">
            <label htmlFor="city" className="text-base font-semibold">
              Seasonality
            </label>
            <input
              id="seasonality"
              type="text"
              name="seasonality"
              required
              defaultValue={seasonality}
              placeholder="Enter Seasonality"
              className="w-full min-h-10 h-10 px-4 mt-1 rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300"
            />
          </div>

          <div className="col-span-full sm:col-span-3">
            <label htmlFor="zip" className="text-base font-semibold">
              Travel time
            </label>
            <input
              id="travel_time"
              type="text"
              name="travel_time"
              required
              defaultValue={traveltime}
              placeholder="Enter travel time"
              className="w-full min-h-10 h-10 px-4 mt-1 rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300"
            />
          </div>
          <div className="col-span-full sm:col-span-3">
            <label htmlFor="zip" className="text-base font-semibold">
              Total Visitors Per Year
            </label>
            <input
              id="totalVisitorsPerYear"
              type="text"
              name="totalVisitorsPerYear"
              required
              defaultValue={totalVisitorsPerYear}
              placeholder="Enter Total Visitors Per Year"
              className="w-full min-h-10 h-10 px-4 mt-1 rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300"
            />
          </div>
          <div className="col-span-full sm:col-span-3">
            <label htmlFor="zip" className="text-base font-semibold">
              User Name
            </label>
            <input
              disabled
              defaultValue={user?.displayName}
              type="text"
              className="w-full min-h-10 h-10 px-4 mt-1 rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300"
            />
          </div>
          <div className="col-span-full sm:col-span-3">
            <label htmlFor="zip" className="text-base font-semibold">
              User Email
            </label>
            <input
              disabled
              defaultValue={user?.email}
              type="text"
              className="w-full min-h-10 h-10 px-4 mt-1 rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300"
            />
          </div>
          <div className="col-span-full mt-3">
            <button className="btn w-full bg-[#43BA7F] text-base font-semibold text-white rounded-md">
              Update Tourist Spot
            </button>
          </div>
        </div>
      </form>
    </section>
  );
};

export default UpdateTouristSpot;
