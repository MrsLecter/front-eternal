import WrapperModal from "../../wrappers/WrapperModal";
import CardpayBlock from "./cardpayForm/CardpayBlock";

const Cardpay: React.FC = () => {
  return (
    <WrapperModal
      width={"625"}
      isPaddingSmall={true}
      maxHeight={364}
      minHeight={328}
    >
      <CardpayBlock />
    </WrapperModal>
  );
};

export default Cardpay;
