import { useSearchParams } from "react-router-dom";

export default function useSearchQueryParams() {
  const [searchParams] = useSearchParams();
  const keyword = (searchParams.get("q") as string) ?? "";
  const limit = (searchParams.get("limit") as string) ?? "10";
  const beforeId = (searchParams.get("beforeId") as string) ?? "";

  return { keyword, limit, beforeId };
}
