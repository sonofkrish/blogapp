import { Link } from "react-router";
import Image from "./Image";

import { PostType } from "../types";

export const PostListItem = ({
  img,
  title,
  desc,
  category,
  createdAt,
  user,
  slug,
}: PostType) => {
  return (
    <div className="flex flex-col xl:flex-row gap-8 mb-12">
      {/* image */}
      {img && (
        <div className="md:hidden xl:block xl:w-1/3">
          <Image
            src={img}
            className="rounded-2xl object-cover"
            width="735"
            alt="img"
          />
        </div>
      )}
      {/* details */}
      <div className="flex flex-col gap-4 xl:w-2/3">
        <Link to={`/${slug}`} className="text-4xl font-semibold">
          {title}
        </Link>
        <div className="flex items-center gap-2 text-gray-400 text-sm">
          <span>Written by</span>
          <Link className="text-blue-800" to={`/posts?author=${user.username}`}>
            {user.username}
          </Link>
          <span>on</span>
          <Link to="#" className="text-blue-800">
            {category}
          </Link>
          <span>{createdAt}</span>
        </div>
        <p>{desc}</p>
        <Link to={`/${slug}`} className="underline text-blue-800 text-sm">
          Read More
        </Link>
      </div>
    </div>
  );
};
