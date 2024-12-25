import { IKImage } from "imagekitio-react";

type ImageType = {
  src: string;
  alt: string;
  className?: string;
  width?: string;
  height?: string;
};
const Image = ({ src, className, width, height, alt }: ImageType) => {
  return (
    <IKImage
      urlEndpoint={import.meta.env.VITE_IMAGEKIT_URL_ENDPOINT}
      path={src}
      className={className}
      loading="lazy"
      lqip={{ active: true, quality: 50 }}
      alt={alt}
      width={width}
      height={height}
      transformation={[
        {
          width,
          height,
        },
      ]}
    />
  );
};

export default Image;
