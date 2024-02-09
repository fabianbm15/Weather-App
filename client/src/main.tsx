import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import Error404 from "./components/Error404.tsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { store } from "./app/store";
import { Provider } from "react-redux";
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/popular",
    element: <App />,
  },
  {
    path: "/about",
    element: <App />,
  },
  {
    path: "/details",
    element: <App />,
  },
  {
    path: "/search",
    element: <App />,
  },
  {
    path: "/*",
    element: <Error404 />,
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
