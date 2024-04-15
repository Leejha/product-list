import { useProducts } from "../hooks";
import { Header, MoreButton, ProductList } from "../components";

function ProductListContainer() {
  const {
    keyword,
    limit,
    productsResponse,
    inputRef,
    onClickSearch,
    onClickMoreProductFetch,
  } = useProducts();

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
      <MoreButton
        total={productsResponse.total}
        length={products.length}
        onClickMoreProductFetch={onClickMoreProductFetch}
      />
    </>
  );
}

export default ProductListContainer;
