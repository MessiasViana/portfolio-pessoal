import styles from './styled.module.css';

import { AiOutlineCopyrightCircle } from 'react-icons/ai';

export const Footer = () => {

  return (
    <footer>
      <div className={styles.logo}>
        <img src='' alt="Messias"/>
      </div>

      <div className={styles.copyright}>
        <h1>messiasdeviana@gmail.com</h1>
        <h1>Feito por mim <AiOutlineCopyrightCircle id={styles.rightIcon} /></h1>
      </div>
    </footer>
  )
}