import { useProducts } from "../hooks";
import { Header, MoreButton, ProductList } from "../components";

function ProductsContainer() {
  const { keyword, limit, data, onClickMoreProductFetch } = useProducts();

  if (!data) {
    return <>Loading...</>;
  }
  const products = data.products ?? [];

  return (
    <>
      <Header />
      <ProductList products={products} limit={limit} keyword={keyword} />
      {data.total > products.length && (
        <MoreButton onClick={onClickMoreProductFetch} />
      )}
    </>
  );
}

export default ProductsContainer;
