"use client";

import Header from "@/components/Header/Header";
import style from "./page.module.scss";
import { useState } from "react";

export default function Registration() {
  const [inp, setInp] = useState({name:"", surname:"", age:"",email:"", password:""})
  return (
    <div className={style.container}>
      <Header />
      <h2>регистрация</h2>
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
