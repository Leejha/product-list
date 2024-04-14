import styled from "styled-components";
import { Link } from "react-router-dom";

interface Props {
  id: number;
  thumbnail: string;
  brand: string;
  title: string;
  price: number;
  limit: string;
  keyword: string;
}

function ProductItem({
  id,
  thumbnail,
  brand,
  title,
  price,
  limit,
  keyword,
}: Props) {
  return (
    <Container to={`${id}?limit=${limit}&q=${keyword}`} id={String(id)}>
      <>
        <Thumbnail src={thumbnail} alt={title} />
        <BrandAndTitle>
          <Brand>{brand}</Brand> | <Title>{title}</Title>
        </BrandAndTitle>
        <Price>${price}</Price>
      </>
    </Container>
  );
}

const BrandAndTitle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  margin-bottom: 10px;
`;

const Container = styled(Link)`
  flex: 1 1 calc(50% - 20px);
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid #ddd;
  padding: 15px;
  box-sizing: border-box;
  &:hover {
    ${BrandAndTitle} {
      background-color: blue;
      color: white;
    }
  }
`;

const Thumbnail = styled.img`
  max-height: 300px;
  margin-bottom: 10px;
`;

const Brand = styled.span`
  font-size: 16px;
  font-weight: bold;
  color: #333;
`;

const Title = styled.span`
  font-size: 14px;
  color: #777;
`;

const Price = styled.p`
  font-size: 18px;
  color: #007600;
  margin: auto 0;
`;

export default ProductItem;
