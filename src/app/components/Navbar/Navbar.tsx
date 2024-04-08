"use client";

// CSS STYLES
import "./navbar.css";

// ICONS
import { BiMenu } from "react-icons/bi";
import { useState } from "react";
import Image from "next/image";

export default function Navbar() {
  const [menuMobileVisible, setMenuMobileVisible] = useState(false);

  function menuShow() {
    if (menuMobileVisible) {
      setMenuMobileVisible(false);
    } else {
      setMenuMobileVisible(true);
    }
  }

  return (
    <>
      <nav>
        <div className="navbar">
          <div className="logoContainer">
            <div className="logo">
              <Image
                src="/logos/logo-black-1.png"
                fill
                alt="logo click wiize"
              />
            </div>
          </div>
          <div className="navigation">
            <ul>
              <li>
                <a href="/">Inicio</a>
              </li>
              <li>
                <a href="/#servicos">Fale Conosco</a>
              </li>
              <li>
                <a href="/#about">Sobre Nós</a>
              </li>
              <li>
                <a href="/#contato">Seguros</a>
              </li>
            </ul>
          </div>
          <div className="buttonNavbar">
            <a href="https://forms.gle/Pd9k2XH4j86Q6qy26">Fazer Cotação</a>
          </div>
          <div className="menuMobile" onClick={menuShow}>
            <BiMenu size={40} className="menu" />
          </div>
        </div>
      </nav>
      <div
        className={
          "navigationMobile " + (menuMobileVisible ? "open" : "hidden")
        }
      >
        <ul>
          <li>
            <a href="/">Inicio</a>
          </li>
          <li>
            <a href="/#servicos">Fale Conosco</a>
          </li>
          <li>
            <a href="/#about">Sobre Nós</a>
          </li>
          <li>
            <a href="/#contato">Seguros</a>
          </li>
          <li>
            <a href="https://forms.gle/Pd9k2XH4j86Q6qy26">Fazer Cotação</a>
          </li>
        </ul>
      </div>
    </>
  );
}
