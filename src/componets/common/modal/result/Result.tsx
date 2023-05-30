import WrapperModal from "../../wrappers/WrapperModal";
import SubscribedBlock from "./resultForm/SubscribedBlock";

const Result: React.FC = () => {
  return (
    <WrapperModal
      width={"625"}
      isPayment={true}
      isPaddingSmall={true}
      minHeight={243}
      maxHeight={355}
      marginTop={95}
    >
      <SubscribedBlock />
    </WrapperModal>
  );
};

export default Result;
