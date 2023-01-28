import styles from './styled.module.css';

import { AiOutlineRight } from 'react-icons/ai';
import { TfiLock } from 'react-icons/tfi';


export const CardsProject = () => {
  
  return (
    <div className={styles.container}>
      {/* Projects */}
      <div className={styles.subTitle}>
          <h2>Recentes</h2>
      </div>

      <div className={styles.lastProjects}>
        <a className={styles.card} href="#">
          <div className={styles.cardImageArea}>
            <img
              src="https://www.simplilearn.com/ice9/free_resources_article_thumb/what_is_image_Processing.jpg"
            />
          </div>
          <div className={styles.cardContent}>
            <div id={styles.leftSide}>
              <h3>Jv Serviços</h3>
              <span>Veja mais</span>
            </div>

            <div id={styles.rightSide}>
              <AiOutlineRight id={styles.iconCard} />
            </div>
          </div>
        </a>
        
        <a className={styles.card} href="#">
          <div className={styles.cardImageArea}>
            <img
              src="https://www.simplilearn.com/ice9/free_resources_article_thumb/what_is_image_Processing.jpg"
            />
          </div>
          <div className={styles.cardContent}>
            <div id={styles.leftSide}>
              <h3>Jv Serviços</h3>
              <span>Veja mais</span>
            </div>

            <div id={styles.rightSide}>
              <AiOutlineRight id={styles.iconCard} />
            </div>
          </div>
        </a>

        <a className={styles.card} href="#">
          <div className={styles.cardImageArea}>
            <img
              src="https://www.simplilearn.com/ice9/free_resources_article_thumb/what_is_image_Processing.jpg"
            />
          </div>
          <div className={styles.cardContent}>
            <div id={styles.leftSide}>
              <h3>Jv Serviços</h3>
              <span>Veja mais</span>
            </div>

            <div id={styles.rightSide}>
              <AiOutlineRight id={styles.iconCard} />
            </div>
          </div>
        </a>
      </div>

      {/* Personal projects */}
      <div className={styles.subTitle}>
          <h2>Pessoais</h2>
      </div>

      <div className={styles.lastProjects}>
        <a className={styles.card} href="#">
          <div className={styles.cardImageArea}>
            <img
              src="https://www.simplilearn.com/ice9/free_resources_article_thumb/what_is_image_Processing.jpg"
            />
          </div>
          <div className={styles.cardContent}>
            <div id={styles.leftSide}>
              <h3>Jv Serviços</h3>
              <span>Veja mais</span>
            </div>

            <div id={styles.rightSide}>
              <AiOutlineRight id={styles.iconCard} />
            </div>
          </div>
        </a>
      
        <a className={styles.card} href="#">
          <div className={styles.cardImageArea}>
            <img
              src="https://www.simplilearn.com/ice9/free_resources_article_thumb/what_is_image_Processing.jpg"
            />
          </div>
          <div className={styles.cardContent}>
            <div id={styles.leftSide}>
              <h3>Jv Serviços</h3>
              <span>Veja mais</span>
            </div>

            <div id={styles.rightSide}>
              <AiOutlineRight id={styles.iconCard} />
            </div>
          </div>
        </a>

        <a className={styles.card} href="#">
          <div className={styles.cardImageArea}>
            <img
              src="https://www.simplilearn.com/ice9/free_resources_article_thumb/what_is_image_Processing.jpg"
            />
          </div>
          <div className={styles.cardContent}>
            <div id={styles.leftSide}>
              <h3>Jv Serviços</h3>
              <span>Veja mais</span>
            </div>

            <div id={styles.rightSide}>
              <AiOutlineRight id={styles.iconCard} />
            </div>
          </div>
        </a>
      </div>
        
      



      {/* <div className={styles.card}>
        <div className={styles.comingCard}>
          <div className={styles.comingContent}>
            <TfiLock className={styles.iconLock} />
            <h3>Em breve</h3>
          </div>
        </div>
      </div>
      <div className={styles.card}>
        <div className={styles.comingCard}>
          <div className={styles.comingContent}>
            <TfiLock className={styles.iconLock} />
            <h3>Em breve</h3>
          </div>
        </div>
      </div>
      <div className={styles.card}>
        <div className={styles.comingCard}>
          <div className={styles.comingContent}>
            <TfiLock className={styles.iconLock} />
            <h3>Em breve</h3>
          </div>
        </div>
      </div> */}
    </div>
  );
}