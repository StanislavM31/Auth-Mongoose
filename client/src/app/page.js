import Header from "@/components/Header/Header";
import style from "./page.module.scss";

export default function Home() {
  return (
    <div className={style.container}>
      <Header />
      <div className={style.form}>
        <span>main page</span>
      </div>
    </div>
  );
}
