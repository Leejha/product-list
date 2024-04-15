import { useRef } from "react";
import { useNavigate } from "react-router-dom";

export default function useSearch() {
  const navigate = useNavigate();
  const savedKeyword = useRef("");

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    savedKeyword.current = e.target.value;
  };
  const onSubmit = () => {
    navigate(`?q=${savedKeyword.current}`);
  };

  return { onChange, onSubmit };
}
