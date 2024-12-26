import { Comment } from "./Comment";

import { CommentType } from "../types";

const data = [
  {
    _id: "1",
    user: {
      img: "https://randomuser.me/api/portraits",
      username: "John Doe",
    },
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    createdAt: "24-12-2024",
  },
  {
    _id: "2",
    user: {
      img: "https://randomuser.me/api/portraits",
      username: "Jane Doe",
    },
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    createdAt: "24-12-2024",
  },
];
export const Comments = () => {
  const postId = "1";
  return (
    <div className="flex flex-col gap-8 lg:w-3/5 mb-12">
      <h1 className="text-xl text-gray-500 underline">Comments</h1>
      <form className="flex items-center justify-between gap-8 w-full">
        <textarea
          name="desc"
          placeholder="Write a comment..."
          className="w-full p-4 rounded-xl"
        />
        <button className="bg-blue-800 px-4 py-3 text-white font-medium rounded-xl">
          Send
        </button>
      </form>

      {data.map((comment: CommentType["comment"]) => (
        <Comment key={comment._id} comment={comment} postId={postId} />
      ))}
    </div>
  );
};
