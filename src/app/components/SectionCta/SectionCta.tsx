import "./sectioncta.css";
import styles from "../../Fontes.module.css";

function SectionCta() {
  return (
    <>
      <div className="cta_section">
        <div className="content_cta">
          <p className={styles.fontButton}>
            Faça agora uma simulação grátis e online!
          </p>
          <div className="button_cta_section">
            <button>
              <a
                href="https://forms.gle/Pd9k2XH4j86Q6qy26"
                className={styles.fontButton}
              >
                FAZER COTAÇÃO
              </a>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default SectionCta;
