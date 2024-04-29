import { FC, PropsWithChildren } from "react";
import styles from "./FilmsBlock.module.scss";

export const FilmsBlock: FC<
  PropsWithChildren & {
    title?: string;
    clickOnTitle?: () => void;
  }
> = ({ children, title, clickOnTitle }) => {
  const clickStyles = clickOnTitle ? styles.clickStyles : "";
  return (
    <>
      <h2
        onClick={clickOnTitle}
        className={`${styles.filmsBlockTitle} ${clickStyles}`}
      >
        {title}
      </h2>
      <div className={styles.filmsBlockWrapper}>{children}</div>
    </>
  );
};
