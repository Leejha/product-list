import styled from "styled-components";

interface Props {
  images: string[];
  title: string;
}

function ImagesList({ images, title }: Props) {
  return (
    <Container>
      {images.map((image, index) => (
        <Image key={index} src={image} alt={`${title}-${index}`} />
      ))}
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  overflow-x: scroll;
  margin-top: 20px;
`;

const Image = styled.img`
  max-width: 100px;
  height: auto;
  margin-right: 10px;
`;

export default ImagesList;
