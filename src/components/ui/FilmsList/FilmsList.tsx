import styles from "./FilmsList.module.scss";
import { IFilm } from "../../../hooks/useFilmDetails";
import { FilmCard } from "../FilmCard/FilmCard";
import { Preloader } from "../FilmCard/Preloader";

export const FilmsList = ({
  films,
  navigateFilm,
  isLoading,
}: {
  films: IFilm[] | undefined;
  navigateFilm: (id: number) => void;
  isLoading: boolean;
}) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.filmsWrapper}>
        {isLoading
          ? Array(20)
              .fill(null)
              .map(() => {
                return <Preloader />;
              })
          : films?.map((item) => (
              <FilmCard
                navigateFilm={navigateFilm}
                id={item.id}
                name={item.title}
                rate={item.vote_average}
                release_date={item.release_date}
                img_url={item.poster_path}
              />
            ))}
      </div>
    </div>
  );
};
