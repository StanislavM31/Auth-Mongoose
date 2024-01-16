"use client";

import Header from "@/components/Header/Header";

export default function Registration() {
  return (
    <div>
      <Header/>
      <h1>регистрация</h1>
      <input placeholder="name..." type="text" />
      <input placeholder="surname..." type="text" />
      <input placeholder="age..." type="text" />
      <input placeholder="email" type="text" />
      <input placeholder="password" type="text" />
      <button>Sign up</button>
    </div>
  );
}
