import styled from "styled-components";
import individualsImage from "@images/individuals.png";
import Image from "next/image";

const StaticIndividuals: React.FC = () => {
  return (
    <WrapperStaticIndividuals>
      <div>
        <Image
          alt="travel"
          src={individualsImage}
          fill={true}
          style={{ objectFit: "cover" }}
          quality={100}
        />
      </div>
    </WrapperStaticIndividuals>
  );
};

const WrapperStaticIndividuals = styled.div`
  position: fixed;
  height: calc(100% - 5px);
  width: 100%;
  overflow: hidden;
  z-index: -1;

  & > div {
    width: 100vw;
    height: 100%;
    position: absolute;
    bottom: 0px;
  }
  @media (max-width: 375px) {
    display: none;
    /* height: calc(100% - 5px); */
  }
`;

export default StaticIndividuals;
