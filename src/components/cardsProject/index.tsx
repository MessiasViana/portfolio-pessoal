import styles from './styled.module.css';

export const CardsProject = () => {
  
  return (
    <div className={styles.cardsContainer}>
      <div className={styles.card}>
        <div className={styles.cardImageArea}>
          <img
            src="https://www.simplilearn.com/ice9/free_resources_article_thumb/what_is_image_Processing.jpg"
          />
        </div>
        <div className={styles.cardContent}>
          <h3>Jv Serviços</h3>
          <a>Veja mais</a>
        </div>
      </div>
      
    </div>
  );
}