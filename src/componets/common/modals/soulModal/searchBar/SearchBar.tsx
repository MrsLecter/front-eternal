import Image from "next/image";
import searchIcon from "@icons/search-btn.svg";
import { StyledSearchBar } from "./SearchBar.styles";

const SearchBar: React.FC = () => {
  return (
    <StyledSearchBar>
      <div>Add a soul</div>
      <input type="text" placeholder="search" name="message" maxLength={500} />
      <button type="button">
        <Image width={16} height={16} alt="search-btn.svg" src={searchIcon} />
      </button>
    </StyledSearchBar>
  );
};

export default SearchBar;
