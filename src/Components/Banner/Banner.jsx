import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/bundle";
import "swiper/css/navigation";
import "./Banner.css";
import "animate.css";
import { Fade } from "react-awesome-reveal";

const Banner = () => {
  return (
    <div>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        loop={true}
        navigation={true}
        modules={[Autoplay, Navigation]}
        className="mySwiper h-[560px]"
      >
        <SwiperSlide>
          <div className="slider1 h-full flex items-center">
            <div className="max-w-2xl mx-7 lg:ml-24 space-y-5">
              <Fade direction="left">
                <h1 className="text-2xl md:text-3xl lg:text-5xl font-Playfair-Display font-semibold relative text-white z-50">
                  Embark on Your Next Adventure with TripTrackers
                </h1>
              </Fade>
              <p className="border-2 rounded-xl w-20 relative text-white z-50">
                {" "}
              </p>
              <Fade Fade direction="right">
                <p className="relative text-white z-50">
                  Discover the world like never before with TripTrackers, your
                  trusted travel companion. Whether youre planning a relaxing
                  getaway, an adrenaline-pumping adventure, or a cultural
                  exploration, TripTrackers has you covered.
                </p>
              </Fade>
              <Fade cascade Fade direction="up">
                <div className="flex flex-row gap-6">
                  <button className="bg-[#43BA7F] text-sm text-white p-2 px-4 rounded-xl mt-6">
                    Discover more
                  </button>
                  <button className="bg-[#fc8621] text-sm text-white p-2 px-4 rounded-xl mt-6">
                    Contact us
                  </button>
                </div>
              </Fade>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slider2 h-full flex items-center">
            <div className="max-w-2xl mx-7 lg:ml-24 space-y-5">
              <Fade direction="left">
                <h1 className="text-2xl md:text-3xl lg:text-5xl font-semibold font-Playfair-Display relative text-white z-50">
                  Unlock Boundless Adventures with TripTrackers
                </h1>
              </Fade>
              <p className="border-2 rounded-xl w-20 relative text-white z-50">
                {" "}
              </p>
              <Fade Fade direction="right">
                <p className="relative text-white z-50">
                  Indulge your wanderlust with TripTrackers, the ultimate
                  companion for intrepid explorers. Whether you crave the
                  serenity of secluded beaches, the thrill of bustling city
                  streets, or the tranquility of scenic landscapes.
                </p>
              </Fade>
              <Fade cascade Fade direction="up">
                <div className="flex flex-row gap-6">
                  <button className="bg-[#43BA7F] text-sm text-white p-2 px-4 rounded-xl mt-6">
                    Discover more
                  </button>
                  <button className="bg-[#fc8621] text-sm text-white p-2 px-4 rounded-xl mt-6">
                    Contact us
                  </button>
                </div>
              </Fade>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slider3 h-full flex items-center">
            <div className="max-w-2xl mx-7 lg:ml-24 space-y-5">
              <Fade direction="left">
                <h1 className="text-2xl md:text-3xl lg:text-5xl font-semibold font-Playfair-Display relative text-white z-50">
                  Elevate Your Travels with TripTrackers
                </h1>
              </Fade>
              <p className="border-2 rounded-xl w-20 relative text-white z-50">
                {" "}
              </p>
              <Fade Fade direction="right">
                <p className="relative text-white z-50">
                  Experience travel like never before with TripTrackers, your
                  gateway to unforgettable journeys around the globe. Whether
                  youre a seasoned globetrotter or a first-time explorer, our
                  comprehensive platform caters to your every need.
                </p>
              </Fade>
              <Fade cascade Fade direction="up">
                <div className="flex flex-row gap-6">
                  <button className="bg-[#43BA7F] text-sm text-white p-2 px-4 rounded-xl mt-6">
                    Discover more
                  </button>
                  <button className="bg-[#fc8621] text-sm text-white p-2 px-4 rounded-xl mt-6">
                    Contact us
                  </button>
                </div>
              </Fade>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slider4 h-full flex items-center">
            <div className="max-w-2xl mx-7 lg:ml-24 space-y-5">
              <Fade direction="left">
                <h1 className="text-2xl md:text-3xl lg:text-5xl font-semibold font-Playfair-Display relative text-white z-50">
                  Set Your Sights on New Horizons with TripTrackers
                </h1>
              </Fade>
              <p className="border-2 rounded-xl w-20 relative text-white z-50">
                {" "}
              </p>
              <Fade Fade direction="right">
                <p className="relative text-white z-50">
                  Transform how you travel with TripTrackers, where each journey
                  is tailored to your desires. Our intuitive platform offers
                  everything from expert-curated itineraries to interactive maps
                  that guide.
                </p>
              </Fade>
              <Fade cascade Fade direction="up">
                <div className="flex flex-row gap-6">
                  <button className="bg-[#43BA7F] text-sm text-white p-2 px-4 rounded-xl mt-6">
                    Discover more
                  </button>
                  <button className="bg-[#fc8621] text-sm text-white p-2 px-4 rounded-xl mt-6">
                    Contact us
                  </button>
                </div>
              </Fade>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;
