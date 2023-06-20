import React from "react";
import { Home, Search, RestaurantMenu, Login, Cart, Help } from "./pages";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import { Footer, Header } from "./components";

const AppLaout = () => {
  return (
    <>
      <div className="main-wrapper">
        <Header />
        <div className="seprator">
          <Outlet />
        </div>
        <Footer />
      </div>
    </>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLaout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/search", element: <Search /> },
      { path: "/login", element: <Login /> },
      { path: "/cart", element: <Cart /> },
      { path: "/help", element: <Help /> },
      { path: "/restaurant/:resId", element: <RestaurantMenu /> },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={appRouter} />;
};

export default App;
