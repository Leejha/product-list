import { useEffect, useRef, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { ProductsResponse } from "../types";
import { getProductsApi } from "../libs";

export default function useProducts() {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const keyword = (searchParams.get("q") as string) ?? "";
  const limit = (searchParams.get("limit") as string) ?? "10";
  const beforeId = (searchParams.get("beforeId") as string) ?? "";

  const inputRef = useRef<HTMLInputElement>(null);
  const onClickSearch = () => {
    const keyword = inputRef.current?.value ?? "";
    navigate(`?q=${keyword}`);
  };
  const onClickMoreProductFetch = () => {
    setSearchParams({ q: keyword, limit: String(Number(limit) + 10) });
  };

  const [productsResponse, setProductsResponse] = useState<ProductsResponse>();

  useEffect(() => {
    const fetch = async () => {
      const response = await getProductsApi({ limit, keyword });
      setProductsResponse(response);
    };
    fetch();
  }, [limit, keyword]);

  const element = document.getElementById(beforeId);
  if (element) {
    element.scrollIntoView();
  }

  return {
    keyword,
    limit,
    productsResponse,
    inputRef,
    onClickSearch,
    onClickMoreProductFetch,
  };
}
