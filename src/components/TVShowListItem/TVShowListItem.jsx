import ega from "./style.module.css";
import { SMALL_IMG_COVER_BASE_URL } from "../../config";

export function TVShowListItem({ tvShow, onClick }) {
  return (
    <div className={ega.container} onClick={() => onClick(tvShow)}>
      <img
        className={ega.img}
        alt={tvShow.name}
        src={SMALL_IMG_COVER_BASE_URL + tvShow.backdrop_path}
      />
      <div className={ega.title}>{tvShow.name}</div>
    </div>
  );
}
