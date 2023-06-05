import Image from "next/image";
import checkmarkIcon from "@icons/checkmark.svg";
import { StyledCheckbox } from "./Checkbox.styles";
import { ICheckboxProps } from "./Checkbox.types";

const Checkbox: React.FC<ICheckboxProps> = ({ label, checked, setChecked }) => {
  const setCheckedOnEnter = (event: React.KeyboardEvent) => {
    if (event.key === "Enter") {
      setChecked(!checked);
    }
  };

  return (
    <StyledCheckbox>
      <input
        type="checkbox"
        onChange={() => setChecked(!checked)}
        checked={checked}
        onKeyDown={(e) => setCheckedOnEnter(e)}
      />
      <span>
        <Image
          alt="checkmark"
          src={checkmarkIcon}
          fill={true}
          style={{ objectFit: "cover" }}
          quality={100}
        />
      </span>
      <p>{label}</p>
    </StyledCheckbox>
  );
};

export default Checkbox;
