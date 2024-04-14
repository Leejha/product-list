import styled from "styled-components";

interface Props {
  total: number;
  length: number;
  onClickMoreProductFetch: () => void;
}

function MoreButton({ total, length, onClickMoreProductFetch }: Props) {
  return (
    <>
      {total > length && (
        <Button onClick={onClickMoreProductFetch}>더 보기</Button>
      )}
    </>
  );
}

const Button = styled.button`
  display: block;
  background-color: #f5f5f5;
  border-radius: 0 8px 8px 0;
  padding: 10px 12px;
  cursor: pointer;
  margin: 0 auto;
  text-align: center;
`;

export default MoreButton;
