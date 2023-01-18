import { Star as StarEmpty, StarFill, StarHalf } from "react-bootstrap-icons";
import ega from "./style.module.css";

export function FiveStarRating({ rating }) {
  // déclarer un tableau d'étoiles vide
  const starList = [];

  // stocker dans une variable le nombre d'étoiles pleines
  const starFillCount = Math.floor(rating);

  // stocker dans une variable si oui ou non il y a une demi étoile
  const hasStarHalf = rating + starFillCount >= 0.5;

  // stocker dans ne variable le nombre d'étroiles vides
  const emptyStarCount = 5 - starFillCount - (hasStarHalf ? 1 : 0);
  // pusher dans le tableau les étoiles pleines
  for (let i = 1; i <= starFillCount; i++) {
    starList.push(<StarFill key={"star-fill" + i} />);
  }
  // pusher dans le tableau s'il y a une demi étoile
  if (hasStarHalf) {
    starList.push(<StarHalf key="star-half" />);
  }
  // pusher éventuellement les étoiles vides dans le tableau
  for (let i = 1; i <= emptyStarCount; i++) {
    starList.push(<StarEmpty key={"star-empty" + i} />);
  }

  return <div>{starList}</div>;
}
