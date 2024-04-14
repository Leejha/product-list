import styled from "styled-components";
import { PATH } from "../libs";
import { Link } from "react-router-dom";
import { useProduct } from "../hooks";
import { ImagesList } from ".";

function ProductContainer() {
  const { product, limit, keyword } = useProduct();

  if (!product) {
    return <>Loading...</>;
  }

  const { id, thumbnail, brand, title, price, description, images } = product;

  return (
    <>
      <LinkToListPage
        preventScrollReset={true}
        to={`${PATH.PRODUCTLISTPAGE}?beforeId=${id}&limit=${limit}&q=${keyword}`}
      >
        목록으로 돌아가기
      </LinkToListPage>
      <Thumbnail src={thumbnail} alt={title} />
      <Brand>{brand}</Brand>
      <Title>{title}</Title>
      <Price>${price}</Price>
      <Description>{description}</Description>
      <ImagesList images={images} title={title} />
    </>
  );
}

const LinkToListPage = styled(Link)`
  background-color: #f5f5f5;
  border-radius: 0 8px 8px 0;
  padding: 10px 12px;
  cursor: pointer;
`;

const Thumbnail = styled.img`
  margin-bottom: 20px;
`;

const Brand = styled.h2`
  margin: 0;
  font-size: 20px;
  color: #333;
`;

const Title = styled.h1`
  margin: 10px 0;
  font-size: 24px;
  color: #000;
`;

const Price = styled.p`
  font-size: 18px;
  color: #007600;
  margin: 5px 0 20px;
`;

const Description = styled.p`
  font-size: 16px;
  color: #666;
  margin-bottom: 20px;
`;

export default ProductContainer;
