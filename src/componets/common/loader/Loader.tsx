import React from "react";
import LoaderSVG from "@images/loader.svg";
import LoaderImage from "@/componets/common/loaderImage/LoaderImage";
import { WrapperLoader } from "./Loader.styles";
import Image from "next/image";

const Loader: React.FC = () => {
  let loaderWidth = 0;
  let loaderHeight = 0;
  let logoWidth = 0;
  let logoHeight = 0;
  let realWidth = 0;

  if (typeof window !== "undefined") {
    realWidth = document.documentElement.clientWidth;
    loaderWidth = (document.documentElement.clientWidth * 17) / 100;
    loaderHeight = (document.documentElement.clientHeight * 25.75) / 100;
    logoWidth = (document.documentElement.clientWidth * 31.07) / 100;
    logoHeight = (document.documentElement.clientHeight * 2.71) / 100;
  }

  return (
    <WrapperLoader
      type={document.documentElement.clientWidth < 870 ? "mobile" : "tablet"}
    >
      {realWidth > 869 ? (
        <>
          <LoaderImage type="loader" />
          <div>
            <Image src={LoaderSVG} alt={"loader"} />
          </div>
        </>
      ) : (
        <LoaderImage type="mobile" />
      )}
    </WrapperLoader>
  );
};

export default Loader;
