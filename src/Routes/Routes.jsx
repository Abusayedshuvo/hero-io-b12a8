import { createBrowserRouter } from "react-router";
import App from "../App";
import Home from "../components/Home/Home";
import Apps from "../components/Apps/Apps";
import ErrorPage from "../components/ErrorPage/ErrorPage";
import { Suspense } from "react";
import AppDetails from "../components/AppDetails/AppDetails";

const allApps = fetch("/data.json").then((res) => res.json());

export const router = createBrowserRouter([
  {
    path: "/",
    Component: App,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        index: true,
        Component: Home,
        loader: () => fetch("data.json"),
      },
      {
        path: "/apps",
        element: (
          <Suspense
            fallback={
              <span className="loading loading-spinner loading-xl"></span>
            }
          >
            <Apps allApps={allApps}></Apps>
          </Suspense>
        ),
      },
      {
        path: "/apps/:appId",
        element: (
          <Suspense
            fallback={
              <span className="loading loading-spinner loading-xl"></span>
            }
          >
            <AppDetails allApps={allApps}></AppDetails>
          </Suspense>
        ),
      },
    ],
  },
]);
