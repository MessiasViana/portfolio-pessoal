import { Link } from 'react-router-dom';
import styles from './styled.module.css';

import logo from '../../images/logo/logo.png';

const Page = () => {
  return (
    <section className={styles.thanksContact}>
      <div className={styles.container}>
        <div className={styles.thanksArea}>
          <div className={styles.logoArea}>
            <img src={logo} alt="LogoImagem"/>
          </div>

          <div className={styles.title}>
            <h1>Obrigado por enviar sua mensagem!</h1>
            <span>Vou preparar um café e já te retorno</span>
          </div>


          <div className={styles.buttonArea}>
            <Link to="/" className={styles.button}>Voltar</Link>
          </div>
        </div>
      </div>

      
    </section>
  )
}

export default Page;