import { useEffect, useState } from "react";
import { Product } from "../types";
import { useParams, useSearchParams } from "react-router-dom";
import { getProductApi } from "../libs";

export default function useProduct() {
  const [product, setProduct] = useState<Product>();
  const { id } = useParams() as { id: string };
  const [searchParams] = useSearchParams();
  const keyword = (searchParams.get("q") as string) ?? "";
  const limit = (searchParams.get("limit") as string) ?? "10";

  useEffect(() => {
    const fetch = async () => {
      const response = await getProductApi(id);
      setProduct(response);
    };
    fetch();
  }, [id]);

  return { product, keyword, limit };
}
