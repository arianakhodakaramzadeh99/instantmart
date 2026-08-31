import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Header from "./components/Header";
import path from "path";

import { Component } from "react";
import MainLayout from "./layouts/MainLayout";
import Home from "./pages/Home";
function App() {
  const router = createBrowserRouter([
    {
      Component: MainLayout,
      children: [{
        path: "/",
        Component: Home,
      },]
    },
  ]);
  return <RouterProvider router={router} />;
}
export default App;
