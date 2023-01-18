import { TVShowListItem } from "../TVShowListItem/TVShowListItem";
import ega from "./style.module.css";

export function TVShowList({ tvShowList, onClickItem }) {
  return (
    <>
      <div className={ega.title}>You may also like:</div>
      <div className={ega.list}>
        {tvShowList.map((tvShow) => {
          return (
            <span key={tvShow.id} className={ega.tv_show_list_item}>
              <TVShowListItem tvShow={tvShow} onClick={onClickItem} />
            </span>
          );
        })}
      </div>
    </>
  );
}
