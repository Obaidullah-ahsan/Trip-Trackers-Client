import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/bundle";
import "swiper/css/navigation";
import "./Banner.css";
import 'animate.css';

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
        className="mySwiper h-[600px]"
      >
        <SwiperSlide>
          <div className="slider1 h-full flex items-center">
            <div className="max-w-2xl ml-24 space-y-5">
              <h1 className="text-5xl relative text-white z-50 animate__animated animate__backInLeft">
                Embark on Your Next Adventure with TripTrackers
              </h1>
              <p className="border-2 rounded-xl w-20 relative text-white z-50">    </p>
              <p className="relative text-white z-50 animate__animated animate__backInRight">
                Discover the world like never before with TripTrackers, your
                trusted travel companion. Whether your'e planning a relaxing
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
                Embark on Your Next Adventure with TripTrackers
              </h1>
              <p className="border-2 rounded-xl w-20 relative text-white z-50">    </p>
              <p className="relative text-white z-50 animate__animated animate__backInRight">
                Discover the world like never before with TripTrackers, your
                trusted travel companion. Whether your'e planning a relaxing
                getaway, an adrenaline-pumping adventure, or a cultural 
                exploration, TripTrackers has you covered.
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slider3 h-full flex items-center">
          <div className="max-w-2xl ml-24 space-y-5">
              <h1 className="text-5xl relative text-white z-50 animate__animated animate__backInLeft">
                Embark on Your Next Adventure with TripTrackers
              </h1>
              <p className="border-2 rounded-xl w-20 relative text-white z-50">    </p>
              <p className="relative text-white z-50 animate__animated animate__backInRight">
                Discover the world like never before with TripTrackers, your
                trusted travel companion. Whether your'e planning a relaxing
                getaway, an adrenaline-pumping adventure, or a cultural 
                exploration, TripTrackers has you covered.
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slider4 h-full flex items-center">
          <div className="max-w-2xl ml-24 space-y-5">
              <h1 className="text-5xl relative text-white z-50 animate__animated animate__backInLeft">
                Embark on Your Next Adventure with TripTrackers
              </h1>
              <p className="border-2 rounded-xl w-20 relative text-white z-50">    </p>
              <p className="relative text-white z-50 animate__animated animate__backInRight">
                Discover the world like never before with TripTrackers, your
                trusted travel companion. Whether your'e planning a relaxing
                getaway, an adrenaline-pumping adventure, or a cultural 
                exploration, TripTrackers has you covered.
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slider5 h-full flex items-center">
          <div className="max-w-2xl ml-24 space-y-5">
              <h1 className="text-5xl relative text-white z-50 animate__animated animate__backInLeft">
                Embark on Your Next Adventure with TripTrackers
              </h1>
              <p className="border-2 rounded-xl w-20 relative text-white z-50">    </p>
              <p className="relative text-white z-50 animate__animated animate__backInRight">
                Discover the world like never before with TripTrackers, your
                trusted travel companion. Whether your'e planning a relaxing
                getaway, an adrenaline-pumping adventure, or a cultural 
                exploration, TripTrackers has you covered.
              </p>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;
