import Image from "./Image";

import { CommentType } from "../types";

export const Comment = ({ comment }: CommentType) => {
  const { user } = comment;
  return (
    <div className="p-4 bg-slate-50 rounded-xl mb-8">
      <div className="flex items-center gap-4">
        {comment.user.img && (
          <Image
            src={comment.user.img}
            className="w-10 h-10 rounded-full object-cover"
            width="40"
            alt="userimg"
          />
        )}
        <span className="font-medium">{comment.user.username}</span>
        <span className="text-sm text-gray-500">{comment.createdAt}</span>
        {user && comment.user.username === user.username && (
          <span className="text-xs text-red-300 hover:text-red-500 cursor-pointer">
            delete
          </span>
        )}
      </div>
      <div className="mt-4">
        <p>{comment.desc}</p>
      </div>
    </div>
  );
};
