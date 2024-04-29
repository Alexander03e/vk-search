import { useQuery, useQueryClient } from "react-query";
import { FilmsApi } from "../api/films.api";

const filmsApi = FilmsApi.getInstance();

export const useFilmsByPagination = (page: number = 1) => {
  const queryClient = useQueryClient();
  return useQuery(["films", page], () => filmsApi.fetchFilms(page), {
    initialData: () => {
      return queryClient.getQueryData(["films", page]);
    },
  });
};
