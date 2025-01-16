import type { ReactNode } from "react";

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

export interface UploadProps {
  children: ReactNode;
  type: string;
  setProgress: (progress: number) => void;
  setData: (data: FileResponse) => void;
}

export interface FileResponse {
  fileId: string;
  name: string;
  size: number;
  versionInfo: {
    id: string;
    name: string;
  };
  filePath: string;
  url: string;
  fileType: string;
  height: number;
  width: number;
  orientation: number;
  thumbnailUrl: string;
}

export interface ErrorResponse {
  message: string;
}
