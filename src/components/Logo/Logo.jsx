import ega from "./style.module.css";
export function Logo({ image, title, subtitle }) {
  return (
    <>
      <div className={ega.container}>
        <img src={image} className={ega.img} />
        <span className={ega.title}>{title}</span>
      </div>
      <div className={ega.subtitle}>{subtitle}</div>
    </>
  );
}
