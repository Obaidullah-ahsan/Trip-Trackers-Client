import { Fade } from "react-awesome-reveal";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const WhyChoose = () => {
  return (
    <div className="my-20">
      <div className="max-w-4xl ml-20">
        <h3 className="text-[#fc8621] text-lg font-bold">WHAT WE SERVE</h3>
        <Fade cascade Fade direction="up">
          <h1 className="text-5xl leading-[55px] font-bold">
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
            navigation={true}
            pagination={{
              clickable: true,
            }}
            loop={true}
            modules={[Pagination, Navigation]}
            className="mySwiper"
          >
            <SwiperSlide>
              <div className="rounded-md shadow-md dark:bg-gray-50 dark:text-gray-800">
                <img
                  src="https://source.unsplash.com/random/300x300/?2"
                  alt=""
                  className="object-cover object-center w-full rounded-t-md h-44 dark:bg-gray-500"
                />
                <div className="flex flex-col justify-between p-6 space-y-8">
                  <div className="space-y-2">
                    <h2 className="text-3xl font-semibold tracking-wide">
                      Donec lectus leo
                    </h2>
                    <p className="dark:text-gray-800">
                      Curabitur luctus erat nunc, sed ullamcorper erat
                      vestibulum eget.
                    </p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className=" rounded-md shadow-md dark:bg-gray-50 dark:text-gray-800">
                <img
                  src="https://source.unsplash.com/random/300x300/?2"
                  alt=""
                  className="object-cover object-center w-full rounded-t-md h-44 dark:bg-gray-500"
                />
                <div className="flex flex-col justify-between p-6 space-y-8">
                  <div className="space-y-2">
                    <h2 className="text-3xl font-semibold tracking-wide">
                      Donec lectus leo
                    </h2>
                    <p className="dark:text-gray-800">
                      Curabitur luctus erat nunc, sed ullamcorper erat
                      vestibulum eget.
                    </p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className=" rounded-md shadow-md dark:bg-gray-50 dark:text-gray-800">
                <img
                  src="https://source.unsplash.com/random/300x300/?2"
                  alt=""
                  className="object-cover object-center w-full rounded-t-md h-44 dark:bg-gray-500"
                />
                <div className="flex flex-col justify-between p-6 space-y-8">
                  <div className="space-y-2">
                    <h2 className="text-3xl font-semibold tracking-wide">
                      Donec lectus leo
                    </h2>
                    <p className="dark:text-gray-800">
                      Curabitur luctus erat nunc, sed ullamcorper erat
                      vestibulum eget.
                    </p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className=" rounded-md shadow-md dark:bg-gray-50 dark:text-gray-800">
                <img
                  src="https://source.unsplash.com/random/300x300/?2"
                  alt=""
                  className="object-cover object-center w-full rounded-t-md h-44 dark:bg-gray-500"
                />
                <div className="flex flex-col justify-between p-6 space-y-8">
                  <div className="space-y-2">
                    <h2 className="text-3xl font-semibold tracking-wide">
                      Donec lectus leo
                    </h2>
                    <p className="dark:text-gray-800">
                      Curabitur luctus erat nunc, sed ullamcorper erat
                      vestibulum eget.
                    </p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className=" rounded-md shadow-md dark:bg-gray-50 dark:text-gray-800">
                <img
                  src="https://source.unsplash.com/random/300x300/?2"
                  alt=""
                  className="object-cover object-center w-full rounded-t-md h-44 dark:bg-gray-500"
                />
                <div className="flex flex-col justify-between p-6 space-y-8">
                  <div className="space-y-2">
                    <h2 className="text-3xl font-semibold tracking-wide">
                      Donec lectus leo
                    </h2>
                    <p className="dark:text-gray-800">
                      Curabitur luctus erat nunc, sed ullamcorper erat
                      vestibulum eget.
                    </p>
                  </div>
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
