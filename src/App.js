import React from "react";
import {
  Home,
  Search,
  RestaurantMenu,
  Login,
  Cart,
  Help,
  Register,
  Admin,
} from "./pages";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import { Footer, Header } from "./components";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "./redux/store";

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
      { path: "/admin", element: <Admin /> },
      { path: "/help", element: <Help /> },
      { path: "/restaurant/:resId", element: <RestaurantMenu /> },
    ],
  },
  { path: "/login", element: <Login /> },
  { path: "/register", element: <Register /> },
]);

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <RouterProvider router={appRouter} />
      </PersistGate>
    </Provider>
  );
};

export default App;
