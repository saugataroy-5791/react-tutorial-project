import React, { lazy, Suspense } from "react";
import { createRoot } from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import App from "./App";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Basket from "./components/Basket/Basket";
import ErrorPage from "./components/ErrorPage/ErrorPage";
import Body from "./components/Body/Body";
import Login from "./components/Login/Login";
import ProductDetails from "./components/ProductDetails/ProductDetails";
import Loader from "./components/Loader/Loader";
import Container from "react-bootstrap/Container";

const Favourites = lazy(() => import("./components/Favourites/Favourites"));

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/products",
        element: <Body />,
      },
      {
        path: "/products/:id",
        element: <ProductDetails />,
      },
      {
        path: "/basket",
        element: <Basket />,
      },
      {
        path: "/favourites",
        element: (
          <Suspense
            fallback={
              <div className="content">
                <Container>
                  <Loader />
                </Container>
              </div>
            }
          >
            <Favourites />
          </Suspense>
        ),
      },
      {
        path: "/login",
        element: <Login />,
      },
    ],
    errorElement: <ErrorPage />,
  },
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={appRouter} />
);
