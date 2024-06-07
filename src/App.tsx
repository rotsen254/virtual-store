import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Home } from './views/Home';
import { Details } from './views/Details';
import { Cart } from "./views/Cart";
import { NotFound } from './views/NotFound';

const browserRouter = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
  },
  {
    path: "/details/:id",
    element: <Details/>,
  },
  {
    path: "/cart",
    element: <Cart/>,
  },
  {
    path: "/*",
    element: <NotFound/>
  }
]);

export function App() {
  return (
    <>
      <RouterProvider router={browserRouter} />
    </>
  );
}
