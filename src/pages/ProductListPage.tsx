import styled from "styled-components";
import { ProductListContainer } from "../components";

function ProductListPage() {
  return (
    <Layout>
      <ProductListContainer />
    </Layout>
  );
}

const Layout = styled.div`
  margin: 20px;
`;

export default ProductListPage;
