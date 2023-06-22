import React from "react";
import { Home, Search, RestaurantMenu, Login, Cart, Help } from "./pages";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import { Footer, Header } from "./components";
import { Provider } from "react-redux";
import { store } from "./redux/store";

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
      { path: "/cart", element: <Cart /> },
      { path: "/help", element: <Help name="Pritesh" /> },
      { path: "/restaurant/:resId", element: <RestaurantMenu /> },
    ],
  },
  { path: "/login", element: <Login /> },
]);

const App = () => {
  return (
    <Provider store={store}>
      <RouterProvider router={appRouter} />
    </Provider>
  );
};

export default App;
