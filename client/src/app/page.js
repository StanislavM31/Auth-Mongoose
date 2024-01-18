import Header from "@/components/Header/Header";
import style from "./page.module.scss";

export default function Home() {
  return (
    <div className={style.container}>
      <Header />
      <div className={style.form}>
        <h1>main page</h1>
      </div>
    </div>
  );
}
