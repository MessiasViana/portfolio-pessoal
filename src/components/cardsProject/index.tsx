import styles from './styled.module.css';

import lastProjectImage1 from '../../images/projects/last/muuvi.png';
import lastProjectImage2 from '../../images/projects/last/jandtaxi.png';
import lastProjectImage3 from '../../images/projects/last/JVservicos.png';

// import personalProjectImage1 from '../../images/projects/personal/pokeAPI.png';
// import personalProjectImage2 from '../../images/projects/personal/petDevShop.png';
// import personalProjectImage3 from '../../images/projects/personal/jogoVelha.png';



import { AiOutlineRight } from 'react-icons/ai';
// import { TfiLock } from 'react-icons/tfi';


export const CardsProject = () => {
  // titles for last projects
  const [
    lastProjectTitle1,
    lastProjectTitle2,
    lastProjectTitle3
  ] = ["Muuvi", "JandTaxi", "Jv serviços"]
  
  //titles for personal projects
  // const[
  //   personalProjectTitle1,
  //   personalProjectTitle2,
  //   personalProjectTitle3
  // ] = ["PokeAPI", "PetDevShop", "Jogo da velha"]

  return (
    <div className={styles.container}>
      {/* Projects */}
      <div className={styles.subTitle}>
          <h2>Recentes</h2>
      </div>

      <div className={styles.projectsArea}>
        <a 
          className={styles.card}
          href="https://muuvi.com.br/"
          target="_blank"
          rel='noreferrer'
        >
          <div className={styles.cardImageArea}>
            <img
              src={lastProjectImage1}
              alt="imageSite"
            />
          </div>
          <div className={styles.cardContent}>
            <div id={styles.leftSide}>
              <h3>{lastProjectTitle1}</h3>
              <span>Veja mais</span>
            </div>

            <div id={styles.rightSide}>
              <AiOutlineRight id={styles.iconCard} />
            </div>
          </div>
        </a>

        <a 
          className={styles.card}
          href="https://jandtaxi.com.br/"
          target="_blank"
          rel='noreferrer'
        >
          <div className={styles.cardImageArea}>
            <img
              src={lastProjectImage2}
              alt="imageSite"
            />
          </div>
          <div className={styles.cardContent}>
            <div id={styles.leftSide}>
              <h3>{lastProjectTitle2}</h3>
              <span>Veja mais</span>
            </div>

            <div id={styles.rightSide}>
              <AiOutlineRight id={styles.iconCard} />
            </div>
          </div>
        </a>

        <a 
          className={styles.card}
          href="https://www.jvservicos.com.br/"
          target="_blank"
          rel='noreferrer'
        >
          <div className={styles.cardImageArea}>
            <img
              src={lastProjectImage3}
              alt="imageSite"
            />
          </div>
          <div className={styles.cardContent}>
            <div id={styles.leftSide}>
              <h3>{lastProjectTitle3}</h3>
              <span>Veja mais</span>
            </div>

            <div id={styles.rightSide}>
              <AiOutlineRight id={styles.iconCard} />
            </div>
          </div>
        </a>
      </div>

      {/* Personal projects */}
      {/* <div className={styles.subTitle}>
          <h2>Pessoais</h2>
      </div>

      <div className={styles.projectsArea}>
        <a
          className={styles.card}
          href="https://messiasdev.com.br/projeto1"
          target="_blank"
          rel='noreferrer'
        >
          <div className={styles.cardImageArea}>
            <img
              src={personalProjectImage1}
              alt="imageSite"
            />
          </div>
          <div className={styles.cardContent}>
            <div id={styles.leftSide}>
              <h3>{personalProjectTitle1}</h3>
              <span>Veja mais</span>
            </div>

            <div id={styles.rightSide}>
              <AiOutlineRight id={styles.iconCard} />
            </div>
          </div>
        </a>
      
        <a
          className={styles.card}
          href="https://messiasdev.com.br/projeto2"
          target="_blank"
          rel='noreferrer'
        >
          <div className={styles.cardImageArea}>
            <img
              src={personalProjectImage2}
              alt="imagemSite"
            />
          </div>
          <div className={styles.cardContent}>
            <div id={styles.leftSide}>
              <h3>{personalProjectTitle2}</h3>
              <span>Veja mais</span>
            </div>

            <div id={styles.rightSide}>
              <AiOutlineRight id={styles.iconCard} />
            </div>
          </div>
        </a>

        <a
          className={styles.card}
          href="https://messiasdev.com.br/projeto3"
          target="_blank"
          rel='noreferrer'
        >
          <div className={styles.cardImageArea}>
            <img
              src={personalProjectImage3}
              alt="imagemSite"
            />
          </div>
          <div className={styles.cardContent}>
            <div id={styles.leftSide}>
              <h3>{personalProjectTitle3}</h3>
              <span>Veja mais</span>
            </div>

            <div id={styles.rightSide}>
              <AiOutlineRight id={styles.iconCard} />
            </div>
          </div>
        </a>
      </div> */}
    </div>
  );
}