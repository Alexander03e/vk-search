import { RouteObject, useRoutes } from "react-router-dom";
import { FILM_DETAILS_ROUTE, FILMS_ROUTE, HOME_ROUTE } from "./config";
import { Home } from "../pages/Home/Home";
import { FilmDetail } from "../pages/FilmDetails/FilmDetails";
import { Films } from "../pages/Films/Films";

export const MainRoutes = () => {
  const baseRoutes: RouteObject[] = [
    { path: HOME_ROUTE, element: <Home /> },
    { path: FILMS_ROUTE, element: <Films /> },
    { path: FILM_DETAILS_ROUTE, element: <FilmDetail /> },
  ];
  return useRoutes(baseRoutes);
};
