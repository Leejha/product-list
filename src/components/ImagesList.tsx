import styled from "styled-components";

interface Props {
  images: string[];
  title: string;
}

function ImagesList({ images, title }: Props) {
  return (
    <Container>
      {images.map((src, index) => (
        <Image key={`${title}-${index}`} src={src} alt={`${title}-${index}`} />
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
