import styles from "./FilmsGrid.module.scss";
import { IFilm } from "../../../hooks/useFilmDetails";
import { FilmCard } from "../FilmCard/FilmCard";
import { Preloader } from "../FilmCard/Preloader";

export const FilmsGrid = ({
  films,
  navigateFilm,
  isLoading,
}: {
  films: IFilm[] | undefined;
  navigateFilm: (id: number) => void;
  isLoading: boolean;
}) => {
  return (
    <div className={styles.gridWrapper}>
      {isLoading
        ? Array(20)
            .fill(null)
            .map((_, i) => {
              return <Preloader key={i} />;
            })
        : films?.map((item) => (
            <FilmCard
              key={item.id}
              navigateFilm={navigateFilm}
              id={item.id}
              name={item.title}
              rate={item.vote_average}
              release_date={item.release_date}
              img_url={item.poster_path}
            />
          ))}
    </div>
  );
};
