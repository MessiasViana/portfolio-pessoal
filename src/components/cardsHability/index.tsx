import styles from './styled.module.css';
import habilities from './habilities.json';

export const CardHability = () => {
  
  return (
    <div className={styles.cardHabilityArea}>
      {habilities.habilities.map((item, index) => {
        return (
          <div key={index} className={styles.cardText}>
            <span>{item}</span>
          </div>
        )
      })}
    </div>
  );
}