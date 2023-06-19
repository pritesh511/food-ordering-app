import React from "react";
import { Home, Search } from "./pages";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import { Footer, Header } from "./components";

const AppLaout = () => {
  return (
    <>
      <Header />
      <div className="seprator">
        <Outlet />
      </div>
      <Footer />
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
    ],
  },
]);

const App = () => {
  return <RouterProvider router={appRouter} />;
};

export default App;
