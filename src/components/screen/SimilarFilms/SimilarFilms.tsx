import { useNavigate } from "react-router-dom";
import { FilmsBlock } from "../../ui/FilmsBlock/FilmsBlock";
import { FilmsList } from "../../ui/FilmsList/FilmsList";
import styles from "./SimilarFilms.module.scss";
import { useSimilarFilms } from "../../../hooks/useSimilarFilms";

export const SimilarFilms = ({ id }: { id: number }) => {
  const { data, isLoading } = useSimilarFilms(id);
  const navigate = useNavigate();
  const navigateFilm = (id: number) => {
    navigate(`/films/${id}`);
  };
  return (
    <div className={styles.wrapper}>
      <FilmsBlock title="Похожие фильмы">
        <FilmsList
          isLoading={isLoading}
          navigateFilm={navigateFilm}
          films={data?.results}
        />
      </FilmsBlock>
    </div>
  );
};
