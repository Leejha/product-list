import { createBrowserRouter } from "react-router-dom";
import { Suspense, lazy } from "react";
import App from "../App";

const Error = lazy(() => import("../pages/Error"));
const Loading = lazy(() => import("../pages/Loading"));
const ProductsPage = lazy(() => import("../pages/ProductsPage"));
const ProductPage = lazy(() => import("../pages/ProductPage"));

export const PATH = {
  PRODUCTLISTPAGE: "/",
  PRODUCTPAGE: "/:id",
} as const;

export const router = createBrowserRouter([
  {
    path: PATH.PRODUCTLISTPAGE,
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: (
          <Suspense fallback={<Loading />}>
            <ProductsPage />
          </Suspense>
        ),
      },
      {
        path: PATH.PRODUCTPAGE,
        element: (
          <Suspense fallback={<Loading />}>
            <ProductPage />
          </Suspense>
        ),
      },
    ],
  },
]);
