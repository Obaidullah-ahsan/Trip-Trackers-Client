import { Fade } from "react-awesome-reveal";
import { Autoplay, Navigation} from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";

const WhyChoose = () => {
  return (
    <div className="my-28">
      <div className="max-w-4xl ml-20">
        <h3 className="text-[#fc8621] text-lg font-bold">WHAT WE SERVE</h3>
        <Fade cascade Fade direction="up">
          <h1 className="text-5xl leading-[55px] font-bold font-Playfair-Display">
            Why Choose The Trip Trackers?
          </h1>
        </Fade>
        <Fade cascade Fade direction="up">
          <p className="my-5">
            Choosing Trip Trackers for planning your next vacation offers
            several compelling advantages. Firstly, our dedicated team
            specializes in curating personalized travel experiences that align
            perfectly with your preferences and interests. We leverage local
            expertise and insider knowledge to ensure that each itinerary is
            both unique and enriching.
          </p>
        </Fade>
      </div>
      <Fade Fade direction="up">
        <div className="mx-20">
          <Swiper
            slidesPerView={3}
            spaceBetween={30}
            autoplay={{
              delay: 2000,
              disableOnInteraction: false,
            }}
            navigation={true}
            loop={true}
            modules={[Autoplay, Navigation]}
            className="mySwiper"
          >
            <SwiperSlide>
              <div className="card rounded-sm card-compact bg-base-200">
                <figure>
                  <img
                    src="https://i.ibb.co/hZydnMF/famous-eiffel-tower-paris-with-gorgeous-colors.jpg"
                    alt="Shoes"
                    className="h-44 w-full"
                  />
                </figure>
                <div className="card-body">
                  <h2 className="card-title font-Playfair-Display">Enjoy the beauty of Paris</h2>
                  <p>
                    Famous eiffel tower paris with gorgeous colors and beauty of
                    paris
                  </p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="card rounded-sm card-compact bg-base-200">
                <figure>
                  <img
                    src="https://i.ibb.co/722NYFh/19667.jpg"
                    alt="Shoes"
                    className="h-44 w-full"
                  />
                </figure>
                <div className="card-body">
                  <h2 className="card-title font-Playfair-Display">Enjoy the beauty of Italy</h2>
                  <p>
                    Cinque Terre National Park surrounded by the sea under the
                    sunlight in Italy
                  </p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="card rounded-sm card-compact bg-base-200">
                <figure>
                  <img
                    src="https://i.ibb.co/1ZzX7x4/1390.jpg"
                    alt="Shoes"
                    className="h-44 w-full"
                  />
                </figure>
                <div className="card-body">
                  <h2 className="card-title font-Playfair-Display">Enjoy the beauty of Englend</h2>
                  <p>Famous Tower Bridge in the evening, London, England</p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="card rounded-sm card-compact bg-base-200">
                <figure>
                  <img
                    src="https://i.ibb.co/0K1VLWk/2075.jpg"
                    alt="Shoes"
                    className="h-44 w-full"
                  />
                </figure>
                <div className="card-body">
                  <h2 className="card-title font-Playfair-Display">Enjoy the beauty of Spain</h2>
                  <p>Toledo from hill in summer morning enjoy the sky view</p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="card rounded-sm card-compact bg-base-200">
                <figure>
                  <img
                    src="https://i.ibb.co/ByZ3R5N/41940.jpg"
                    alt="Shoes"
                    className="h-44 w-full"
                  />
                </figure>
                <div className="card-body">
                  <h2 className="card-title font-Playfair-Display">Enjoy the beauty of Netherlands</h2>
                  <p>Beautiful shot of the historic Binnenhof castle in the Netherlands</p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="card rounded-sm card-compact bg-base-200">
                <figure>
                  <img
                    src="https://i.ibb.co/YZ58cK8/427.jpg"
                    alt="Shoes"
                    className="h-44 w-full"
                  />
                </figure>
                <div className="card-body">
                  <h2 className="card-title font-Playfair-Display">Enjoy the beauty of Switzerland</h2>
                  <p>Young woman hiker taking photo with smartphone on mountains peak in winter</p>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </Fade>
    </div>
  );
};

export default WhyChoose;
