import styles from './styled.module.css';

import logo from '../../images/logo/logo-branca.png';

import { AiOutlineCopyrightCircle } from 'react-icons/ai';

export const Footer = () => {

  return (
    <footer>
      <div className={styles.logoArea}>
        <img
          src={logo}
          className={styles.logo}
          alt="Messias" />
      </div>

      <div className={styles.copyright}>
        <h1>contato@messiasdev.com.br</h1>
        <h1>Feito por mim <AiOutlineCopyrightCircle id={styles.rightIcon} /></h1>
      </div>
    </footer>
  )
}