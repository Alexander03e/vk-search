import styles from "./FilmCard.module.scss";
import { formateDate } from "../../../utils/formateDate";
import LazyLoadImage from "react-lazy-load-img-component";
export const FilmCard = ({
  id,
  name,
  release_date,
  rate,
  img_url,
  navigateFilm,
}: {
  id: number;
  name: string;
  release_date: string;
  rate: number;
  img_url: string;
  navigateFilm: (id: number) => void;
}) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.imgWrapper} onClick={() => navigateFilm(id)}>
        <LazyLoadImage
          width={220}
          height={330}
          src={`${process.env.IMAGE_BASE_URL}${img_url}`}
          placeholderSrc={`${process.env.IMAGE_BASE_URL}${img_url}`}
          alt={name}
        />
      </div>
      <div className={styles.infoWrapper}>
        <h2>{Math.floor(rate * 10) / 10}</h2>
        <div className={styles.titleWrapper}>
          <p>{name}</p>
          <p className={styles.date}>{formateDate(release_date)}</p>
        </div>
      </div>
    </div>
  );
};
