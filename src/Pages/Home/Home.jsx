import { Fade } from "react-awesome-reveal";
import AboutUs from "../../Components/AboutUs/AboutUs";
import Banner from "../../Components/Banner/Banner";
import WhyChoose from "../../Components/WhyChoose/WhyChoose";
import TouristsSpotsCard from "../../Components/TouristsSpotsCard/TouristsSpotsCard";
import Countries from "../../Components/Countries/Countries";
import { useEffect, useState } from "react";
import { GridLoader } from "react-spinners";

const Home = () => {
  const [loading, setLoading] = useState(false);
  const [touristSpots, setTouristSpots] = useState([]);
  useEffect(() => {
    setLoading(true);
    fetch("https://trip-trackers-server.vercel.app/touristspot")
      .then((res) => res.json())
      .then((data) => {
        setTouristSpots(data);
        setLoading(false);
      });
  }, []);
  return (
    <div>
      <Banner></Banner>
      <div className="my-10 md:my-20 mx-4 md:mx-7 lg:mx-20">
        <div className="max-w-4xl mb-7">
          <Fade Fade direction="up">
            <h1 className="text-5xl leading-[55px] font-bold font-Playfair-Display">
              Tourist Spots
            </h1>
          </Fade>
          <Fade Fade direction="up">
            <p className="my-5">
              Get ready to explore a world of wonder with Trip Trackers Tourist
              Spots section. Dive into the heart of bustling cities like New
              York City, where skyscrapers touch the sky and every corner tells
              a story. Wander through the enchanting streets of Rome, where
              ancient ruins stand as testaments to a glorious past.
            </p>
          </Fade>
        </div>
        {loading ? (
          <div className="flex justify-center items-center">
            <GridLoader color="#36d7b7" />
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-7">
            {touristSpots.map((touristSpot) => (
              <TouristsSpotsCard
                key={touristSpot._id}
                touristSpot={touristSpot}
              ></TouristsSpotsCard>
            ))}
          </div>
        )}
      </div>
      <Countries></Countries>
      <WhyChoose></WhyChoose>
      <AboutUs></AboutUs>
    </div>
  );
};

export default Home;
