import { useProducts, useSearch } from "../hooks";
import { Header, MoreButton, ProductList } from "../components";

function ProductsContainer() {
  const { keyword, limit, data, onClickMoreProductFetch } = useProducts();
  const { inputRef, onClickSearch } = useSearch();

  if (!data) {
    return <>Loading...</>;
  }
  const products = data.products ?? [];

  return (
    <>
      <Header
        inputRef={inputRef}
        keyword={keyword}
        onClickSearch={onClickSearch}
      />
      <ProductList products={products} limit={limit} keyword={keyword} />
      {data.total > products.length && (
        <MoreButton onClick={onClickMoreProductFetch} />
      )}
    </>
  );
}

export default ProductsContainer;
