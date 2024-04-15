import styled from "styled-components";

interface Props {
  thumbnail: string;
  brand: string;
  title: string;
  price: number;
}

function ProductItem({ thumbnail, brand, title, price }: Props) {
  return (
    <>
      <Thumbnail src={thumbnail} alt={title} />
      <BrandAndTitle className="hover-blue">
        <Brand>{brand}</Brand> | <Title>{title}</Title>
      </BrandAndTitle>
      <Price>${price}</Price>
    </>
  );
}

const BrandAndTitle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  margin-bottom: 10px;
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
