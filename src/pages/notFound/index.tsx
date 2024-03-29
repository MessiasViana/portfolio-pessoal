import styles from './styled.module.css';
import stylesGlobal from '../../components/styles/styles.global.module.css';

import { Link } from 'react-router-dom';

import logo from '../../images/logo/logo.png';
import minion404 from '../../images/general/minion404.png';

const Page = () => {
  return (
    <section className={styles.notFound}>
      <div className={stylesGlobal.container}>
        <div className={styles.logoArea}>
          <img src={logo} alt="logo" />
        </div>

        <div className={styles.backArea}>
          <div className={styles.minionArea}>
            <img src={minion404} alt="" />
          </div>

          <div className={styles.warnArea}>
            <h1 className={stylesGlobal.title}>Não encontramos essa página!</h1>
            <p>
              Apesar do erro 404, você pode ir para a página principal clicando no botão.
            </p>
            <Link to="/">
              <button className={stylesGlobal.button}>Voltar</button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Page;