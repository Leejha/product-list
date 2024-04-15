import styled from "styled-components";
import { ProductsContainer } from "../containers";

function ProductsPage() {
  return (
    <Layout>
      <ProductsContainer />
    </Layout>
  );
}

const Layout = styled.div`
  margin: 20px;
`;

export default ProductsPage;
