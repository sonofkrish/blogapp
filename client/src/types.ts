export type PostType = {
  _id: string;
  img: string;
  title: string;
  desc: string;
  category: string;
  createdAt: string;
  user: {
    username: string;
  };
  slug: string;
};

export type CommentType = {
  comment: {
    _id: string;
    user: {
      img: string;
      username: string;
    };
    desc: string;
    createdAt: string;
  };
  postId: string;
};