import { PostListItem } from "./PostListItem";

import { PostType } from "../types";

export const PostList = () => {
  const allPosts = [
    {
      _id: "1",
      img: "/postImg.jpeg",
      title: "Title 1",
      desc: "Description 1",
      category: "Category 1",
      createdAt: "2021-05-20T12:00:00.000Z",
      user: {
        username: "User 1",
      },
      slug: "slug-1",
    },
    {
      _id: "2",
      img: "/postImg.jpeg",
      title: "Title 2",
      desc: "Description 2",
      category: "Category 2",
      createdAt: "2021-05-20T12:00:00.000Z",
      user: {
        username: "User 2",
      },
      slug: "slug-2",
    },
    {
      _id: "3",
      img: "/postImg.jpeg",
      title: "Title 3",
      desc: "Description 3",
      category: "Category 3",
      createdAt: "2021-05-20T12:00:00.000Z",
      user: {
        username: "User 3",
      },
      slug: "slug-3",
    },
    {
      _id: "4",
      img: "/postImg.jpeg",
      title: "Title 4",
      desc: "Description 4",
      category: "Category 4",
      createdAt: "2021-05-20T12:00:00.000Z",
      user: {
        username: "User 4",
      },
      slug: "slug-4",
    },
    {
      _id: "5",
      img: "/postImg.jpeg",
      title: "Title 5",
      desc: "Description 5",
      category: "Category 5",
      createdAt: "2021-05-20T12:00:00.000Z",
      user: {
        username: "User 5",
      },
      slug: "slug-5",
    },
    {
      _id: "6",
      img: "/postImg.jpeg",
      title: "Title 6",
      desc: "Description 6",
      category: "Category 6",
      createdAt: "2021-05-20T12:00:00.000Z",
      user: {
        username: "User 6",
      },
      slug: "slug-6",
    },
    {
      _id: "7",
      img: "/postImg.jpeg",
      title: "Title 7",
      desc: "Description 7",
      category: "Category 7",
      createdAt: "2021-05-20T12:00:00.000Z",
      user: {
        username: "User 7",
      },
      slug: "slug-7",
    },
    {
      _id: "8",
      img: "/postImg.jpeg",
      title: "Title 8",
      desc: "Description 8",
      category: "Category 8",
      createdAt: "2021-05-20T12:00:00.000Z",
      user: {
        username: "User 8",
      },
      slug: "slug-8",
    },
  ];

  return (
    <>
      {allPosts.map((post: PostType) => (
        <PostListItem key={post._id} {...post} />
      ))}
    </>
  );
};
