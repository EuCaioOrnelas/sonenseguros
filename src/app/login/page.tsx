"use client";

// CSS STYLE
import "./style/login.css";

import { useRef, useState } from "react";
import { redirect } from "next/navigation";
import { Router } from "next/router";
import { error } from "console";
import Image from "next/image";

export default function Page() {
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [loginError, setLoginError] = useState("");

  function logar(formData: FormData) {
    const email = formData.get("email");
    const password = formData.get("password");

    setEmailError("");
    setPasswordError("");
    setLoginError("");

    if (email == "") {
      setEmailError("E-mail está em branco");
    }
    if (password == "") {
      setPasswordError("Senha está em branco");
    }
    if (emailError || passwordError) {
      return;
    }

    if (email == "sonencorretora@hotmail.com" && password == "Seguros1@") {
      localStorage.setItem("login", "validado");
      redirect("/dashboard");
    } else {
      setLoginError("E-mail ou senha invalido");
    }
  }

  return (
    <>
      <div className="contain">
        <div className="form">
          <div className="logoContainer">
            <div className="logo">
              <Image src="/logos/logo-black-1.png" fill alt="Rating" />
            </div>
          </div>
          <div className="title">
            <p>
              Fazer <strong>Login</strong>
            </p>
          </div>
          <form action={logar}>
            <div className="email">
              <h3>E-mail</h3>
            </div>
            <div className="input">
              <input type="email" name="email" className="input_email" />
              {emailError && <div className="message_error">{emailError}</div>}
            </div>

            <div className="senha">
              <h3>Senha</h3>
            </div>
            <div className="input">
              <input
                type="password"
                name="password"
                className="input_password"
              />
              {passwordError && (
                <div className="message_error">{passwordError}</div>
              )}
            </div>

            <div className="button">
              <button type="submit">Acessar</button>
            </div>
            {loginError && <div className="loginErro">{loginError}</div>}
          </form>
        </div>
      </div>
    </>
  );
}
