import styled from "styled-components";
import { useSearch, useSearchQueryParams } from "../hooks";

function SearchContainer() {
  const { onChange, onSubmit } = useSearch();
  const { keyword } = useSearchQueryParams();
  return (
    <Container
      onSubmit={(e) => {
        e.preventDefault();
        onSubmit();
      }}
    >
      <SearchInput onChange={onChange} defaultValue={keyword} />
      <SearchButton>검색</SearchButton>
    </Container>
  );
}

const Container = styled.form`
  display: flex;
  align-items: center;
`;

const SearchInput = styled.input`
  background-color: #f5f5f5;
  padding: 10px 12px;
  border-radius: 8px 0 0 8px;
  ::placeholder {
    color: #cccccc;
  }
`;

const SearchButton = styled.button`
  background-color: #f5f5f5;
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
`;

export default SearchContainer;
