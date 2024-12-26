import { Link } from "react-router";
import { ChevronRightIcon } from "@heroicons/react/24/outline";

import { MainCategories } from "../components/MainCategories";
import { FeaturedPosts } from "../components/FeaturedPosts";
import { PostList } from "../components/PostList";

export const HomePage = () => {
  return (
    <div className="mt-4 flex flex-col gap-4">
      <div className="flex gap-2 items-center">
        <Link to="/">Home</Link>
        <ChevronRightIcon className="size-4" />
        <span className="text-blue-800">Blogs and Articles</span>
      </div>

      <div className="flex items-center justify-between">
        <div className="">
          <h1 className="text-gray-800 tex-2xl md:text-5xl lg:text-6xl font-bold">
            Lorem ipsum dolor sit, amet consectetur adipiscing elit.
          </h1>
          <p className="mt-8 text-md md:text-xl">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
        <Link to="/write" className="hidden md:block relative">
          <svg
            viewBox="0 0 200 200"
            width="200"
            height="200"
            // className="text-lg tracking-widest animate-spin animatedButton"
            className="text-lg tracking-widest"
          >
            <path
              id="circlePath"
              fill="none"
              d="M 100, 100 m -75, 0 a 75,75 0 1,1 150,0 a 75,75 0 1,1 -150,0"
            />
            <text>
              <textPath href="#circlePath" startOffset="0%">
                Write your story •
              </textPath>
              <textPath href="#circlePath" startOffset="50%">
                Share your idea •
              </textPath>
            </text>
          </svg>
          <button className="absolute left-0 right-0 top-0 bottom-0 m-auto w-20 h-20 bg-blue-800 rounded-full flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="50"
              height="50"
              fill="none"
              stroke="white"
              strokeWidth="2"
            >
              <line x1="6" y1="18" x2="18" y2="6" />
              <polyline points="9 6 18 6 18 15" />
            </svg>
          </button>
        </Link>
      </div>
      <MainCategories />
      <FeaturedPosts />
      <PostList />
    </div>
  );
};
