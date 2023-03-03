import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { DefaultLayout } from "./layouts/DefaultLayout";
import { ReducerExample } from "./pages/abc";
import { Checkout } from "./pages/Checkout";
import { Home } from "./pages/Home";
import { OrderConfirmation } from "./pages/OrderConfirmation";

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
      },
      {
        path: '/order-confirmation',
        element: <OrderConfirmation />
      },
      {
        path: '/reducer',
        element: <ReducerExample />
      }
    ]
  }
])

export function Router() {
  return (
    <RouterProvider router={router} />
  );
}