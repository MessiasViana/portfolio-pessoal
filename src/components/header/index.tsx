import styles from './styled.module.css';

import logo from '../../images/logo.png';

export const Header = () => {

  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        <div className={styles.headerArea}>
          <div className={styles.leftSide}>
            <img className={styles.logo} src={logo} alt="Messias"></img>
          </div>

          <div className={styles.rightSide}>
            <button className={styles.button}>Fale comigo</button>
          </div>
        </div>
      </div>
    </nav>
  )
}