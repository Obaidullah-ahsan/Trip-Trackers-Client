import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/bundle";
import "swiper/css/navigation";
import "./Banner.css";
import "animate.css";

const Banner = () => {
  return (
    <div>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        loop={true}
        navigation={true}
        modules={[Autoplay, Navigation]}
        className="mySwiper h-[560px]"
      >
        <SwiperSlide>
          <div className="slider1 h-full flex items-center">
            <div className="max-w-2xl ml-24 space-y-5">
              <h1 className="text-5xl relative text-white z-50 animate__animated animate__backInLeft">
                Embark on Your Next Adventure with TripTrackers
              </h1>
              <p className="border-2 rounded-xl w-20 relative text-white z-50">
                {" "}
              </p>
              <p className="relative text-white z-50 animate__animated animate__backInRight">
                Discover the world like never before with TripTrackers, your
                trusted travel companion. Whether youre planning a relaxing
                getaway, an adrenaline-pumping adventure, or a cultural
                exploration, TripTrackers has you covered.
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slider2 h-full flex items-center">
            <div className="max-w-2xl ml-24 space-y-5">
              <h1 className="text-5xl relative text-white z-50 animate__animated animate__backInLeft">
                Unlock Boundless Adventures with TripTrackers
              </h1>
              <p className="border-2 rounded-xl w-20 relative text-white z-50">
                {" "}
              </p>
              <p className="relative text-white z-50 animate__animated animate__backInRight">
                Indulge your wanderlust with TripTrackers, the ultimate
                companion for intrepid explorers. Whether you crave the serenity
                of secluded beaches, the thrill of bustling city streets, or the
                tranquility of scenic landscapes.
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slider3 h-full flex items-center">
            <div className="max-w-2xl ml-24 space-y-5">
              <h1 className="text-5xl relative text-white z-50 animate__animated animate__backInLeft">
                Elevate Your Travels with TripTrackers
              </h1>
              <p className="border-2 rounded-xl w-20 relative text-white z-50">
                {" "}
              </p>
              <p className="relative text-white z-50 animate__animated animate__backInRight">
                Experience travel like never before with TripTrackers, your
                gateway to unforgettable journeys around the globe. Whether
                youre a seasoned globetrotter or a first-time explorer, our
                comprehensive platform caters to your every need.
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slider4 h-full flex items-center">
            <div className="max-w-2xl ml-24 space-y-5">
              <h1 className="text-5xl relative text-white z-50 animate__animated animate__backInLeft">
                Set Your Sights on New Horizons with TripTrackers
              </h1>
              <p className="border-2 rounded-xl w-20 relative text-white z-50">
                {" "}
              </p>
              <p className="relative text-white z-50 animate__animated animate__backInRight">
                Transform how you travel with TripTrackers, where each journey
                is tailored to your desires. Our intuitive platform offers
                everything from expert-curated itineraries to interactive maps
                that guide.
              </p>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;
