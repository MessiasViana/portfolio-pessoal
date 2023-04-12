import styles from './styled.module.css';
import stylesGlobal from './../styles/styles.global.module.css';

import logo from '../../images/logo/logo.png';

export const Header = () => {

  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        <div className={styles.headerArea}>
          <div className={styles.leftSide}>
            <img
              className={styles.logo}
              src={logo}
              alt="Messias"
            />
          </div>

          <div className={styles.rightSide}>
            <a className={`${stylesGlobal.button} ${styles.button}`} href="#contact">Fale comigo</a>
          </div>
        </div>
      </div>
    </nav>
  )
}