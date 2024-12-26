import { Link } from "react-router";
import Image from "./Image";

export const FeaturedPosts = () => {
  return (
    <div className="mt-8 flex flex-col lg:flex-row gap-8">
      {/* First */}
      <div className="w-full lg:w-1/2 flex flex-col gap-4">
        {/* image */}
        <Image
          src="/featured1.jpeg"
          className="rounded-3xl object-cover"
          width="895"
          alt="featured"
        />
        {/* details */}
        <div className="flex items-center gap-4">
          <h1 className="font-semibold lg:text-lg">01.</h1>
          <Link to="#" className="text-blue-800 lg:text-lg">
            Web Design
          </Link>
          <span className="text-gray-500">25-12-2024</span>
        </div>
        {/* title */}
        <Link
          to="/test"
          className="text-xl lg:text-3xl font-semibold lg:font-bold"
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </Link>
      </div>
      {/* Others */}
      <div className="w-full lg:w-1/2 flex flex-col gap-4">
        {/* second */}
        <div className="lg:h-1/3 flex justify-between gap-4">
          <div className="w-1/3 aspect-video">
            <Image
              src="/featured2.jpeg"
              className="rounded-3xl object-cover w-full h-full"
              width="298"
              alt="featured"
            />
          </div>
          {/* details and title */}
          <div className="w-2/3">
            {/* details */}
            <div className="flex items-center gap-4 text-sm lg:text-base mb-4">
              <h1 className="font-semibold">02.</h1>
              <Link to="#" className="text-blue-800">
                Marketing
              </Link>
              <span className="text-gray-500 text-sm">24-12-2024</span>
            </div>
            {/* title */}
            <Link
              to="/marketing"
              className="text-base sm:text-lg md:text-2xl lg:text-xl xl:text-2xl font-medium"
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </Link>
          </div>
        </div>
        {/* third */}
        <div className="lg:h-1/3 flex justify-between gap-4">
          <div className="w-1/3 aspect-video">
            <Image
              src="/featured3.jpeg"
              className="rounded-3xl object-cover w-full h-full"
              width="298"
              alt="featured"
            />
          </div>
          {/* details and title */}
          <div className="w-2/3">
            {/* details */}
            <div className="flex items-center gap-4 text-sm lg:text-base mb-4">
              <h1 className="font-semibold">03.</h1>
              <Link to="#" className="text-blue-800">
                Seo
              </Link>
              <span className="text-gray-500 text-sm">24-12-2024</span>
            </div>
            {/* title */}
            <Link
              to="/seo"
              className="text-base sm:text-lg md:text-2xl lg:text-xl xl:text-2xl font-medium"
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </Link>
          </div>
        </div>
        {/* fourth */}
        <div className="lg:h-1/3 flex justify-between gap-4">
          <div className="w-1/3 aspect-video">
            <Image
              src="/featured4.jpeg"
              className="rounded-3xl object-cover w-full h-full"
              width="298"
              alt="featured"
            />
          </div>
          {/* details and title */}
          <div className="w-2/3">
            {/* details */}
            <div className="flex items-center gap-4 text-sm lg:text-base mb-4">
              <h1 className="font-semibold">03.</h1>
              <Link to="#" className="text-blue-800">
                Databases
              </Link>
              <span className="text-gray-500 text-sm">24-12-2024</span>
            </div>
            {/* title */}
            <Link
              to="/seo"
              className="text-base sm:text-lg md:text-2xl lg:text-xl xl:text-2xl font-medium"
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
