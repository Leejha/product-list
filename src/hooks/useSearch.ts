import { useRef } from "react";
import { useNavigate } from "react-router-dom";

export default function useSearch() {
  const navigate = useNavigate();

  const inputRef = useRef<HTMLInputElement>(null);
  const onClickSearch = () => {
    const keyword = inputRef.current?.value ?? "";
    navigate(`?q=${keyword}`);
  };

  return { inputRef, onClickSearch };
}
