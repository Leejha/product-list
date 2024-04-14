import { Link } from "react-router-dom";
import styled from "styled-components";
import { PATH } from "../libs";

interface Props {
  inputRef: React.RefObject<HTMLInputElement>;
  onClickSearch: () => void;
  keyword: string;
}

function Header({ inputRef, onClickSearch, keyword }: Props) {
  return (
    <Container>
      <LinkToMainPage to={PATH.PRODUCTLISTPAGE}>
        메인 페이지로 이동
      </LinkToMainPage>
      <SearchContainer
        onSubmit={(e) => {
          e.preventDefault();
          onClickSearch();
        }}
      >
        <SearchInput ref={inputRef} defaultValue={keyword} />
        <SearchButton onClick={onClickSearch}>검색</SearchButton>
      </SearchContainer>
    </Container>
  );
}

const Container = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`;

const LinkToMainPage = styled(Link)`
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
`;

const SearchContainer = styled.form`
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

export default Header;