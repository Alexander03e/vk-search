import styles from "./FilmCard.module.scss";
export const Preloader = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.imgFakeWrapper}></div>
      <div className={styles.infoWrapper}>
        <div className={styles.titleWrapper}></div>
      </div>
    </div>
  );
};
