"use client";

import Header from "@/components/Header/Header";
import style from "./page.module.scss";
import { useState } from "react";
import axios from "axios";

export default function Registration() {
  const [inp, setInp] = useState({name:"", surname:"", age:"",email:"", password:""})
  function changeInput(e){
    setInp({...inp, [e.target.name]: e.target.value});
  }
  async function regUser(){
    console.log(inp);
    /* const res = axios.post(""); */
  }
  return (
    <div className={style.container}>
      <Header />
      <h2>регистрация</h2>
      <div className={style.form}>
        <input onChange={changeInput} placeholder="name..." type="text" />
        <input onChange={changeInput} placeholder="surname..." type="text" />
        <input onChange={changeInput} placeholder="age..." type="text" />
        <input onChange={changeInput} placeholder="email" type="text" />
        <input onChange={changeInput} placeholder="password" type="text" />
        <button onClick={regUser}>Sign up</button>
      </div>
    </div>
  );
}
