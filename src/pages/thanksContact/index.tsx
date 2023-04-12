import styles from './styled.module.css';
import stylesGlobal from '../../components/styles/styles.global.module.css';

import { Link } from 'react-router-dom';

import logo from '../../images/logo/logo.png';

const Page = () => {
  return (
    <section className={styles.thanksContact}>
      <div className={stylesGlobal.container}>
        <div className={styles.thanksArea}>
          <div className={styles.logoArea}>
            <img src={logo} alt="LogoImagem"/>
          </div>

          <div className={styles.backArea}>
            <h1 className={stylesGlobal.title}>Obrigado por enviar sua mensagem!</h1>
            <span className={styles.coffe}>Vou preparar um café e já te retorno</span>
          </div>


          <div className={styles.buttonArea}>
            <Link to="/" className={stylesGlobal.button}>Voltar</Link>
          </div>
        </div>
      </div>

      
    </section>
  )
}

export default Page;