import { FiveStarRating } from "../FiveStarRating/FiveStarRating";
import ega from "./style.module.css";

export function TVShowDetail({ tvShow }) {
  const rating = tvShow.vote_average / 2;
  return (
    <div>
      <div className={ega.title}>{tvShow.name}</div>
      <div className={ega.rating_container}>
        <FiveStarRating rating={rating} />
        <div className={ega.rating}>{rating}</div>
      </div>
      <div className={ega.overview}>{tvShow.overview}</div>
    </div>
  );
}
