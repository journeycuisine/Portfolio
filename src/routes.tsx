import { createBrowserRouter } from "react-router";
import SeniorUiUxPortfolioDevelopment from "./imports/SeniorUiUxPortfolioDevelopment";
import ProjectsPage from "./app/ProjectsPage";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: SeniorUiUxPortfolioDevelopment,
  },
  {
    path: "/projects",
    Component: ProjectsPage,
  },
]);
