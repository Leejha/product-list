import { useEffect, useState } from "react";
import { Product } from "../types";
import { useParams } from "react-router-dom";
import { getProductApi } from "../libs";
import useSearchQueryParams from "./useSearchQueryParams";

export default function useProduct() {
  const [product, setProduct] = useState<Product>();
  const { id } = useParams() as { id: string };
  const { keyword, limit } = useSearchQueryParams();

  useEffect(() => {
    const fetch = async () => {
      const response = await getProductApi(id);
      setProduct(response);
    };
    fetch();
  }, [id]);

  return { product, keyword, limit };
}
