import { FC, PropsWithChildren } from "react";
import styles from "./Page.module.scss";
export const Page: FC<PropsWithChildren> = ({ children }) => {
  return (
    <>
      <div className={styles.page}>
        <div className="container">{children}</div>
      </div>
    </>
  );
};
