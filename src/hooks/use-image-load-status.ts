import { useEffect, useState } from "react";

export const useImageLoadStatus = ({ image }: { image: string }) => {
  const [isLoad, setIsLoad] = useState<boolean>(false);

  useEffect(() => {
    const originalImage: HTMLImageElement = new Image();
    originalImage.src = image;
    originalImage.onload = () => {
      setIsLoad(true);
    };
  }, [isLoad]);
  return {
    isImageLoad: isLoad,
  };
};
