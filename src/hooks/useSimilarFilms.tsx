import { useQuery } from "react-query";
import { FilmsApi } from "../api/films.api";

const filmsApi = FilmsApi.getInstance();

export const useSimilarFilms = (id: number) => {
  return useQuery(["similarFilms", id], () => filmsApi.fetchSimilarFilms(id), {
    enabled: !!id,
  });
};
