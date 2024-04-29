import { useParams } from "react-router-dom";
import { FilmOpen } from "../../components/screen/FilmOpen/FilmOpen";
export const FilmDetail = () => {
  const { id } = useParams();
  return (
    <>
      <FilmOpen id={Number(id)} />
    </>
  );
};
