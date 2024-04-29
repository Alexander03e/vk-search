import { useNavigate } from "react-router-dom";
import styles from "./MoreFilmsButton.module.scss";
export const MoreFilmsButton = ({ url }: { url: string }) => {
  const navigate = useNavigate();
  const setUrl = () => {
    navigate(url);
  };
  return (
    <div className={styles.buttonWrapper} onClick={setUrl}>
      <h3>Смотреть больше</h3>
    </div>
  );
};
