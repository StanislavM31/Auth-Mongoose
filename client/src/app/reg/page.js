"use client";

import Header from "@/components/Header/Header";
import style from "./page.module.scss";

export default function Registration() {
  return (
    <div className={style.container}>
      <Header />
      <h1>регистрация</h1>
      <div className={style.form}>
        <input placeholder="name..." type="text" />
        <input placeholder="surname..." type="text" />
        <input placeholder="age..." type="text" />
        <input placeholder="email" type="text" />
        <input placeholder="password" type="text" />
        <button>Sign up</button>
      </div>
    </div>
  );
}
