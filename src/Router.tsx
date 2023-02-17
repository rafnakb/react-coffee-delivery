import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { DefaultLayout } from "./layouts/DefaultLayout";

const router = createBrowserRouter([
  {
    path: '/',
    element: <DefaultLayout />
  }
])

export function Router() {
  return (
    <RouterProvider router={router} />
  );
}