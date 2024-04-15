import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { ProductsResponse } from "../types";
import { getProductsApi } from "../libs";
import useSearchQueryParams from "./useSearchQueryParams";

export default function useProducts() {
  const [_, setSearchParams] = useSearchParams();
  const { keyword, limit, beforeId } = useSearchQueryParams();

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
    data: productsResponse,
    onClickMoreProductFetch,
  };
}
