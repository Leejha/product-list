import styled from "styled-components";
import { Product } from "../types";
import ProductItem from "./ProductItem";

interface Props {
  products: Product[];
  limit: string;
  keyword: string;
}

function ProductList({ products, limit, keyword }: Props) {
  return (
    <Container>
      {products.map(({ id, thumbnail, brand, title, price }) => {
        return (
          <ProductItem
            key={id}
            id={id}
            thumbnail={thumbnail}
            brand={brand}
            title={title}
            price={price}
            limit={limit}
            keyword={keyword}
          />
        );
      })}
    </Container>
  );
}

const Container = styled.section`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  padding: 20px;
`;

export default ProductList;
