import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { DefaultLayout } from "./layouts/DefaultLayout";
import { Checkout } from "./pages/Checkout";
import { Home } from "./pages/Home";

const router = createBrowserRouter([
  {
    path: '/',
    element: <DefaultLayout />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/checkout',
        element: <Checkout />
      }
    ]
  }
])

export function Router() {
  return (
    <RouterProvider router={router} />
  );
}