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
    const data = axios.post("http://localhost:3001/", inp, {
      withCredentials: true
    })
    console.log(data);
  }
  return (
    <div className={style.container}>
      <Header />
      <h2>регистрация</h2>
      <div className={style.form}>
        <input onChange={changeInput} name="name" placeholder="name..." type="text" />
        <input onChange={changeInput} name="surname" placeholder="surname..." type="text" />
        <input onChange={changeInput} name="age" placeholder="age..." type="text" />
        <input onChange={changeInput} name="email" placeholder="email" type="text" />
        <input onChange={changeInput} name="password" placeholder="password" type="text" />
        <button onClick={regUser}>Sign up</button>
      </div>
    </div>
  );
}
