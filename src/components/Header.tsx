import { Link } from "react-router-dom";
import styled from "styled-components";
import { PATH } from "../libs";
import { SearchContainer } from "../containers";

function Header() {
  return (
    <Container>
      <LinkToMainPage to={PATH.PRODUCTLISTPAGE}>
        메인 페이지로 이동
      </LinkToMainPage>
      <SearchContainer />
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

export default Header;
