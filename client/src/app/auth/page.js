"use client";

import Header from "@/components/Header/Header";

export default function Auth() {
  return (
    <div>
      <Header/>
      <h1>авторизация</h1>
      <input placeholder="email" type="text" />
      <input placeholder="password" type="text" />
      <button>Sign up</button>
    </div>
  );
}
