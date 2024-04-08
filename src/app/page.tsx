// COMPONENTES //
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import SectionCta from "./components/SectionCta/SectionCta";
import Main from "./components/Main/Main";
import ButtonCotacao from "./components/ButtonCotacao/ButtonCotacao";
import SlideParceiros from "./components/SlideParceiros/SlidesParceiros";
import Image from "next/image";

// CSS STYLES //
import "./style/main.css";
import "./style/localizacao.css";
import "./style/slogan.css";
import "./style/parceiros.css";
import "./style/about.css";
import "./style/servicos.css";
import styles from "./Fontes.module.css";

function Home() {
  return (
    <>
      <Navbar />

      {/* INICIO SECTION MAIN */}
      <div className="main" id="main">
        <div className="mainSlides">
          <Main />
        </div>
      </div>
      {/* FINAL SECTION MAIN */}

      {/* INICIO SECTION PARCERIAS */}
      <div className="parceiros_section">
        <div className="text_parceiros">
          <h2 className={styles.subTitleH2}>
            SEGURADORAS <strong>PARCEIRAS:</strong>
          </h2>
        </div>
        <div className="parceiros">
          <SlideParceiros />
        </div>
        <div className="descricao_parceiros">
          <p className={styles.subTitleContent}>
            <strong>23 anos</strong> de parceria com as{" "}
            <strong>15 maiores</strong> seguradoras do mercado!
          </p>
        </div>
      </div>
      {/* FINAL SECTION PARCERIAS */}

      <SectionCta />

      {/* INICIO SECTION SOBRE */}
      <div className="about_section_one">
        <div className="about_title_one">
          <h2 className={styles.subTitleH2}>
            Vantagens da{" "}
            <strong>
              Sonen
              <br /> Corretora de Seguros!
            </strong>
          </h2>
        </div>
        <div className="cards_about">
          <div className="card_section1">
            <div className="card">
              <div className="cardImage">
                <Image src="/icons/coracao.png" fill alt="Coração" />
              </div>
              <p className={styles.paragraph}>
                <strong>Seguro de vida</strong> para seu futuro garantido!
              </p>
            </div>

            <div className="card">
              <div className="cardImage">
                <Image src="/icons/car.png" fill alt="Coração" />
              </div>
              <p className={styles.paragraph}>
                Seguros <strong>AUTO</strong> de qualidade e com preços
                justos...
              </p>
            </div>

            <div className="card">
              <div className="cardImage">
                <Image src="/icons/house.png" fill alt="Coração" />
              </div>
              <p className={styles.paragraph}>
                <strong>Segurança</strong> para o seu <strong>Lar!</strong>{" "}
                Garanta sua Tranquilidade Conosco....
              </p>
            </div>
          </div>

          <div className="card_section2">
            <div className="card">
              <div className="cardImage">
                <Image src="/icons/star.png" fill alt="Coração" />
              </div>
              <p className={styles.paragraph}>
                <strong>23 anos</strong> atuando como corretora de seguros em
                Maringá e região!{" "}
              </p>
            </div>

            <div className="card">
              <div className="cardImage">
                <Image
                  src="/icons/assistencia-24-horas.png"
                  fill
                  alt="Coração"
                />
              </div>
              <p className={styles.paragraph}>
                Suporte <strong>24h</strong> por dia, <strong>7 dias</strong>{" "}
                por Semana!
              </p>
            </div>

            <div className="card">
              <div className="cardImage">
                <Image src="/icons/agent.png" fill alt="Coração" />
              </div>
              <p className={styles.paragraph}>
                Corretor para te auxiliar no que você precisar!
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="about_section_two" id="about">
        <div className="about_section">
          <div className="about_section_two_text">
            <h3 className={styles.subTitleH2}>SOBRE NÓS...</h3>
            <p className={styles.paragraph}>
              Na sonen corretora de seguros, entendemos que a vida é cheia de
              surpresas, e é por isso que estamos aqui para ajudar a garantir
              que você esteja preparado para qualquer eventualidade. Nossa
              missão é proporcionar tranquilidade e segurança aos nossos
              clientes, oferecendo soluções de seguros confiáveis e acessíveis.
              Com anos de experiência e um compromisso inabalável com nossos
              clientes, a Sonen Corretora de Seguros é a sua parceira em
              proteção. Oferecemos uma ampla gama de opções de seguros, desde
              seguros de automóveis e residenciais até seguros de vida e saúde.
              Nossa equipe de corretores experientes está à disposição para
              ouvir suas necessidades individuais e ajudá-lo a encontrar as
              melhores soluções de seguro para você, sua família e seus
              negócios. Em caso de sinistro, nossa equipe eficiente e amigável
              simplificará o processo de reivindicação, fornecendo suporte e
              orientação para que você possa superar qualquer desafio com
              tranquilidade.
            </p>
          </div>
          <div className="about_section_two_img">
            <div className="aboutImageTwo">
              <Image src="/logos/logo-cell.png" fill alt="logo-cell" />
            </div>
          </div>
        </div>
      </div>
      {/* FINAL SECTION SOBRE */}

      <SectionCta />

      {/* INICIO SECTION SERVIÇOS */}
      <div className="services" id="services">
        <div className="section_list_services">
          <div className="title_services">
            <h2 className={styles.subTitleH2}>
              <strong>SEGUROS DE QUALIDADE</strong>
              <br />
              VOCÊ ENCONTRA AQUI!
            </h2>
          </div>
          <div className="list_services">
            <ul>
              <li>Automóveis</li>
              <li>Vida</li>
              <li>Residência</li>
              <li>Empresariais</li>
              <li>Frotas</li>
            </ul>
            <ul>
              <li>Vida em grupo</li>
              <li>Caminhões</li>
              <li>Motos</li>
              <li>Viagens</li>
              <li>Bicicletas</li>
            </ul>
          </div>
          <div className="title_services_two">
            <h3 className={styles.subTitleH3}>DIFERENCIAIS:</h3>
            <p className={styles.paragraph}>
              Na sonen corretora de seguros, acreditamos que cada cliente é
              único e merece o mais alto padrão de atendimento e proteção quando
              se trata de seguros. Nosso compromisso é oferecer qualidade
              excepcional em seguros e suporte ao cliente, e isso nos diferencia
              de forma marcante.
              <br />
              <br />
              Nossa abordagem começa com a compreensão profunda das suas
              necessidades individuais. Não somos apenas uma corretora de
              seguros; somos seus consultores de confiança. Trabalhamos lado a
              lado com você para entender suas preocupações, metas e estilo de
              vida, e com base nisso, personalizamos soluções de seguros que se
              encaixam perfeitamente.
            </p>
          </div>
          <div className="section_cta_services">
            <ButtonCotacao />
          </div>
        </div>
      </div>
      {/* INICIO SECTION SERVIÇOS */}

      {/*
      <div className="contato">
        <div className="section_contatos">
          <h2>Contatos</h2>
          <ul>
            <li>
              <strong>E-mail:</strong> sonencorretora@hotmail.com
            </li>
            <li>
              <strong>Comercial 1:</strong> sonencorretor@hotmail.com
            </li>
            <li>
              <strong>Comercial 2:</strong> sonencorretor@hotmail.com
            </li>
            <li>
              <strong>Corretor Marcos 1:</strong> sonencorretor@hotmail.com
            </li>
            <li>
              <strong>Corretor Marcos 2:</strong> sonencorretor@hotmail.com
            </li>
            <li>
              <strong>Localização:</strong> Av. Curitiba, 300, <br />
              Centro de Paiçandu - 87140-000
            </li>
          </ul>
        </div>
        <div className="section_contato">

        </div>
      </div>
*/}
      <div className="slogan">
        <div className="content_slogan">
          <p className={styles.paragraph}>
            Cuidando do que é mais importante para você.
          </p>
          <img src="https://i.im.ge/2023/09/04/wAieQh.escudo-seguro-2-1.png" />
        </div>
      </div>
      {/* INICIO SECTION LOCALIZAÇÃO */}
      <div className="localizacao" id="localizacao">
        <div className="text_localizacao">
          <h2 className={styles.subTitleH2}>LOCALIZAÇÃO:</h2>
          <p className={styles.paragraph}>
            Venha fazer uma visita a nossa corretora!
          </p>
        </div>
        <div className="maps">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3659.983856381595!2d-52.053155312214315!3d-23.461046803416362!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ed284428c051bd%3A0xffb1bbd9b568287d!2sAv.%20Curitiba%2C%20300%20-%20Pai%C3%A7andu%2C%20PR%2C%2087140-000!5e0!3m2!1spt-BR!2sbr!4v1712542440005!5m2!1spt-BR!2sbr"></iframe>
        </div>
        <div className="descricao_localizacao">
          <p className={styles.paragraph}>
            Avenida Curitiba, 300, Centro, Paiçandu, 87140-000
          </p>
        </div>
      </div>
      {/* FINAL SECTION LOCALIZAÇÃO */}
      <Footer />
    </>
  );
}

export default Home;
