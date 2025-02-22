import { createRoot } from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import App from "./App";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Basket from "./components/Basket/Basket";
import Favourites from "./components/Favourites/Favourites";
import ErrorPage from "./components/ErrorPage/ErrorPage";
import Body from "./components/Body/Body";
import ProductList from "./components/ProductList/ProductList";
import Login from "./components/Login/Login";
import ProductDetails from "./components/ProductDetails/ProductDetails";

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
        element: <Favourites />,
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
