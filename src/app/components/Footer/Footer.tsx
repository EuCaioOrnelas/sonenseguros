// CSS STYLE
import "./footer.css";
import Image from "next/image";

// ICONS
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

export default function Footer() {
  return (
    <>
      <footer>
        <div className="footer">
          <div className="footerContent">
            <div className="sectionWidget">
              <div className="titleAbout">
                <p>SOBRE</p>
              </div>
              <div className="contentAbout">
                <div className="sectionContent">
                  <div className="logoContainer">
                    <div className="logo">
                      <Image
                        src="/logos/logo-white-1.png"
                        fill
                        alt="Logo Sonen Seguros"
                      />
                    </div>
                  </div>
                  <div className="descriptionAboutFooter">
                    <p>
                      Mais que uma Corretora de Seguros, somos os companheiros
                      ideais que sua vida precisa, cuidamos do que realmente
                      importa para você.
                    </p>
                  </div>
                </div>
                <div className="redesSociais">
                  <div className="iconRedeSocial">
                    <a href="https://www.youtube.com/channel/UCIu4goacKyBZ5do8Zg2HXLg">
                      <FaYoutube size={22} color="#9d9d9d" />
                    </a>
                  </div>
                  <div className="iconRedeSocial">
                    <a href="https://www.instagram.com/sonenseguros/">
                      <FaInstagram size={22} color="#9d9d9d" />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="sectionWidget">
              <div className="titleFooterLinks">
                <p>ACESSO RÁPIDO</p>
              </div>
              <div className="links">
                <ul>
                  <li>
                    <a href="https://api.whatsapp.com/send?phone=5544988064161&text=Ol%C3%A1,%20gostaria%20de%20tirar%20um%20d%C3%BAvida">
                      Contato
                    </a>
                  </li>
                  <li>
                    <a href="https://api.whatsapp.com/send?phone=5544999738747&text=Ol%C3%A1,%20estou%20precisando%20de%20um%20guincho">
                      Solicitar Guincho
                    </a>
                  </li>
                  <li>
                    <a href="https://api.whatsapp.com/send?phone=5544999738747&text=Ol%C3%A1,%20acabei%20de%20sofrer%20um%20sinistro%20e%20preciso%20de%20ajuda">
                      Sinistro
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="sectionWidget">
              <div className="titleFooterLinks">
                <p>INSTITUCIONAL</p>
              </div>
              <div className="links">
                <ul>
                  <li>
                    <a href="/termos-de-uso">Termos de Uso</a>
                  </li>
                  <li>
                    <a href="/politicas-de-privacidade">
                      Política de privacidade
                    </a>
                  </li>
                  <li>
                    <a href="https://api.whatsapp.com/send?phone=5544988064161&text=Ol%C3%A1,%20gostaria%20de%20tirar%20um%20d%C3%BAvida">
                      WhatsApp Corretor
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="intitutional"></div>
          </div>
          <div className="sectionDireitos">
            <div className="line"></div>
            <p>
              2001-2024 © Sonen Corretora de Seguros. Todos os direitos
              reservados
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
