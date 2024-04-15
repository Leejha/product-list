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
    if (!response.ok) {
      throw new Error(
        `This is an HTTP error: The status is ${response.status}`
      );
    }
    return await response.json();
  } catch (error) {
    console.error("Error:", error);
  }
};

export const getProductApi = async (id: string) => {
  try {
    const response = await fetch(`${SERVER_URL}/products/${id}`);
    if (!response.ok) {
      throw new Error(
        `This is an HTTP error: The status is ${response.status}`
      );
    }
    return await response.json();
  } catch (error) {
    console.error("Error:", error);
  }
};
