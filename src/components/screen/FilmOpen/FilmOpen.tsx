import { IGenre } from "../../../hooks/useFilmDetails";
import { useFilmDetails } from "../../../hooks/useFilmDetails";
import { formateDate } from "../../../utils/formateDate";
import { SimilarFilms } from "../SimilarFilms/SimilarFilms";
import styles from "./FilmOpen.module.scss";
import LazyLoadImage from "react-lazy-load-img-component";

export const FilmOpen = ({ id }: { id: number }) => {
  const { data, isLoading, isError } = useFilmDetails(id);
  return (
    <>
      {isError && <p>Не удалось загрузить информацию</p>}
      {isLoading ? (
        <div className={styles.wrapper}>
          <div className={styles.infoWrapper}>
            <div className={styles.loader}>
              <h3>Загрузка...</h3>
            </div>
          </div>
          <div className={styles.imgFakeWrapper}></div>
        </div>
      ) : (
        <div className={styles.wrapper}>
          <div className={styles.infoWrapper}>
            <h2 className={styles.title}>{data?.title}</h2>
            <h5>{data?.overview}</h5>
            <div className={styles.detailsWrapper}>
              <h5>
                <span>Длительность: </span>
                {data?.runtime} мин.
              </h5>
              <h5>
                <span>Популярность: </span>
                {Math.floor(data?.popularity ?? 0 * 100) / 100}
              </h5>
              <h5>
                <span>Дата выхода: </span>
                {formateDate(data?.release_date ?? "")}
              </h5>
              <h5>
                <span>Жанр: </span>
                {data?.genres.map((item: IGenre) => item.name).join(", ")}
              </h5>
            </div>
          </div>
          <div className={styles.imgWrapper}>
            <LazyLoadImage
              height={250}
              width={400}
              src={`${process.env.IMAGE_BASE_URL}${data?.backdrop_path}`}
              placeholderSrc={`${process.env.IMAGE_BASE_URL}${data?.backdrop_path}`}
              alt="Не удалось загрузить картинку.."
            />
          </div>
        </div>
      )}
      <SimilarFilms id={id} />
    </>
  );
};
