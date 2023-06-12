import React from "react";
import LoaderImage from "@/componets/common/loaderImage/LoaderImage";
import { WrapperLoader } from "./Loader.styles";

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
            <svg
              width="498"
              height="29"
              viewBox="0 0 498 29"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4.84019 24.6775V16.6241H20.0115C22.3702 16.6241 24.2823 14.712 24.2823 12.3533H4.84019V4.74731H23.6722C26.0308 4.74731 27.9429 2.83523 27.9429 0.476562H0V28.9482H28.3497C28.3497 26.5896 26.4376 24.6775 24.0789 24.6775H4.84019Z"
                fill="#F5F5F5"
              />
              <path
                d="M104.471 0.476562H73.7219C73.7219 2.83523 75.634 4.74731 77.9927 4.74731H86.6155V28.9482H91.4964V4.74731H100.201C102.559 4.74731 104.471 2.83523 104.471 0.476562Z"
                fill="#F5F5F5"
              />
              <path
                d="M156.936 24.6775V16.6241H172.108C174.466 16.6241 176.379 14.712 176.379 12.3533H156.936V4.74731H175.768C178.127 4.74731 180.039 2.83523 180.039 0.476562H152.096V28.9482H180.446C180.446 26.5896 178.534 24.6775 176.175 24.6775H156.936Z"
                fill="#F5F5F5"
              />
              <path
                d="M261.042 28.9482L251.809 18.373C256.771 17.4782 260.188 14.4684 260.188 9.54683C260.188 3.64912 255.307 0.476562 248.677 0.476562H229.316V28.9482C232.012 28.9482 234.197 26.763 234.197 24.0674V18.6171H246.196L255.022 28.9482H261.042ZM234.156 14.4277V4.74731H248.352C252.419 4.74731 255.185 6.04888 255.185 9.5875C255.185 13.1261 252.419 14.4277 248.352 14.4277H234.156Z"
                fill="#F5F5F5"
              />
              <path
                d="M336.074 0.476562V22.0744L318.418 4.18229C316.078 1.81125 312.886 0.476562 309.555 0.476562V28.9482H314.273V6.49629L333.487 25.8857C335.429 27.8457 338.074 28.9482 340.833 28.9482V0.476562H336.074Z"
                fill="#F5F5F5"
              />
              <path
                d="M418.824 28.9482H424.152L410.054 2.84012C409.267 1.38409 407.746 0.476562 406.091 0.476562C404.438 0.476562 402.918 1.38216 402.131 2.83575L387.993 28.9482H393.281L396.901 22.0744H415.163L418.824 28.9482ZM399.097 17.9256L406.052 4.74731L413.007 17.9256H399.097Z"
                fill="#F5F5F5"
              />
              <path
                d="M476.224 24.6368V5.35743C476.224 2.6618 474.039 0.476562 471.343 0.476562V28.9482H497.211C497.211 26.5671 495.281 24.6368 492.9 24.6368H476.224Z"
                fill="#F5F5F5"
              />
            </svg>
          </div>
        </>
      ) : (
        <LoaderImage type="mobile" />
      )}
    </WrapperLoader>
  );
};

export default Loader;
