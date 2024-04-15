import styled from "styled-components";
import { ProductContainer } from "../containers";

function ProductPage() {
  return (
    <Layout>
      <ProductContainer />
    </Layout>
  );
}

const Layout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 20px;
`;

export default ProductPage;
