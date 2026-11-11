import S from "../input.module.scss";

import Wrapper from "../../HOC/Wrapper";

const SearchInput = ({ placeholder, onChange, value }) => {
  return (
    <Wrapper className={`${S["wrapper"]} ${S["search-bar"]}`}>
      <input
        type="search"
        placeholder={`Search for ${placeholder}`}
        className={S["input"]}
        onChange={onChange}
        value={value || ""}
        onSubmit={(e) => e.preventDefault()}
      />
    </Wrapper>
  );
};

export default SearchInput;
