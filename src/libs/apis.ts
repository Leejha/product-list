interface GetProductsRequest {
  limit: string;
  keyword: string;
}

const SERVER_URL = "https://dummyjson.com";

export const getProductsApi = async ({
  limit,
  keyword,
}: GetProductsRequest) => {
  try {
    const response = await fetch(
      `${SERVER_URL}/products/search?limit=${limit}&q=${keyword}`
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error:", error);
  }
};

export const getProductApi = async (id: string) => {
  try {
    const response = await fetch(`${SERVER_URL}/products/${id}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error:", error);
  }
};
