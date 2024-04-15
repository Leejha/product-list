import { useProducts, useSearch } from "../hooks";
import { Header, MoreButton, ProductList } from "../components";

function ProductsContainer() {
  const { keyword, limit, productsResponse, onClickMoreProductFetch } =
    useProducts();
  const { inputRef, onClickSearch } = useSearch();

  if (!productsResponse) {
    return <>Loading...</>;
  }
  const products = productsResponse.products ?? [];

  return (
    <>
      <Header
        inputRef={inputRef}
        keyword={keyword}
        onClickSearch={onClickSearch}
      />
      <ProductList products={products} limit={limit} keyword={keyword} />
      {productsResponse.total > products.length && (
        <MoreButton onClick={onClickMoreProductFetch} />
      )}
    </>
  );
}

export default ProductsContainer;
