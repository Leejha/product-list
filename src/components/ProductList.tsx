import styled from "styled-components";
import { Product } from "../types";
import ProductItem from "./ProductItem";
import { Link } from "react-router-dom";

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
          <ProductItemWrapper
            key={id}
            to={`${id}?limit=${limit}&q=${keyword}`}
            id={String(id)}
          >
            <ProductItem
              thumbnail={thumbnail}
              brand={brand}
              title={title}
              price={price}
            />
          </ProductItemWrapper>
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

const ProductItemWrapper = styled(Link)`
  flex: 1 1 calc(50% - 20px);
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid #ddd;
  padding: 15px;
  box-sizing: border-box;
  &:hover {
    .hover-blue {
      background-color: blue;
      color: white;
    }
  }
`;

export default ProductList;
