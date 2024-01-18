"use client";

import Header from "@/components/Header/Header";
import style from "./page.module.scss";

export default function Auth() {
  return (
    <div>
      <Header />
      <div className={style.container}>
        <h2>авторизация</h2>
        <div className={style.form}>
          <input placeholder="email" type="text" />
          <input placeholder="password" type="text" />
          <button>Sign up</button>
        </div>
      </div>
    </div>
  );
}
