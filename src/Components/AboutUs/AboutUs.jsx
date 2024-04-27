import { Fade } from "react-awesome-reveal";

const AboutUs = () => {
  return (
    <div className="flex gap-7 my-20 mx-20">
      <div className="flex-1">
        <h3 className="text-[#fc8621] text-lg font-bold">ABOUT US</h3>
        <Fade cascade Fade direction="up">
          <h1 className="text-5xl leading-[53px] font-bold">
            Explore All Tourists Spot of The World
          </h1>
        </Fade>
        <Fade cascade Fade direction="up">
          <p className="mt-7">
            Welcome to our Trip Trackers websites Explore All Tourist Spots of
            The World section! Embark on a virtual journey across the globe as
            we guide you through an array of captivating destinations waiting to
            be discovered.
            <br />
            <br /> From the iconic landmarks of bustling cities to the hidden
            gems nestled amidst serene landscapes, this curated collection
            offers a glimpse into the rich tapestry of cultures and natural
            wonders our planet has to offer.
          </p>
        </Fade>
        <Fade cascade Fade direction="up">
          <button className="bg-[#fc8621] text-white p-2 px-4 rounded-xl mt-6">Read More</button>
        </Fade>
      </div>
      <div className="flex gap-7 flex-1">
        <Fade className="w-36 mb-10 flex-1" cascade Fade direction="up">
          <img
            className="w-full"
            src={`https://i.postimg.cc/FzR5yXwC/anete-lusina-r-FKBUw-Lg-unsplash.jpg`}
            alt="dfdfgsdrtyg"
          />
        </Fade>
        <Fade className="flex-1 mt-10 w-36" cascade Fade direction="up">
          <img
            className="w-full"
            src={`https://i.postimg.cc/tTvmHZmD/aerial-view-beautiful.jpg`}
            alt="dfgdzfh"
          />
        </Fade>
      </div>
    </div>
  );
};

export default AboutUs;
