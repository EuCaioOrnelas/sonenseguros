import "./style/navbartraining.css";
import Image from "next/image";

export default function NavbarTraining() {
  return (
    <>
      <nav>
        <div className="logo">
          <div className="logoContainer">
            <div className="logo">
              <Image
                src="/logos/logo-white-1.png"
                fill
                alt="logo sonen corretora"
              />
            </div>
          </div>
        </div>
        <div className="navigation">
          <ul>
            <li>
              <a href="/dashboard">Inicio</a>
            </li>
            <li>
              <a href="/dashboard">Contador de Bônus</a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}
