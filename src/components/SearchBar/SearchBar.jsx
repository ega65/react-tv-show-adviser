import ega from "./style.module.css";
import { Search as SearchIcon } from "react-bootstrap-icons";

export function SearchBar({ onSubmit }) {
  function submit(e) {
    if (e.key === "Enter" && e.target.value.trim() !== "") {
      onSubmit(e.target.value);
    }
  }

  return (
    <>
      <SearchIcon size={27} className={ega.icon} />
      <input
        onKeyUp={submit}
        className={ega.input}
        placeholder="Search a TV show you may like"
        type="text"
      />
    </>
  );
}
