import styles from './styled.module.css';
import stylesGlobal from '../../components/styles/styles.global.module.css';

import { useEffect, useState } from 'react';

import { Header } from '../../components/header';
import { CardHability } from '../../components/cardsHability';
import { CardsProject } from '../../components/cardsProject';
import { ContactForm } from '../../components/contactForm';
import { Footer } from '../../components/footer';
  
import { GrCode } from 'react-icons/gr';
import {
  AiOutlineInstagram,
  AiFillLinkedin,
  AiFillGithub,
  AiOutlineMail,
  AiOutlineWhatsApp
} from 'react-icons/ai';


const Page = () => {
  // variables and function to calculate since the year I started programming
  const [time, setTime] = useState<number>();

  const date = new Date();
  const year = date.getFullYear();

  useEffect(() => {
    setTime(year - 2019);
  }, [year])
  
  return (
    <>
      <Header />

      <main className={styles.entranceHall}>
        <div className={styles.hallArea}>
          <GrCode className={styles.hallIcons}/>
          <h1>Desenvolvedor Frontend e Backend</h1>
          <span>Estou aqui para resolucionar seus problemas com tecnologia</span>

          <div className={styles.buttonProjectsArea}>
            <a className={stylesGlobal.button} href="#projects">Projetos</a>
          </div>
          
          <div className={styles.wheelArea}>
            <div className={styles.wheel}></div>
          </div>
        </div>
      </main>

      <section className={styles.about}>
        <div className={stylesGlobal.container}>
          <div className={styles.aboutContainer}>
            <div className={styles.presentation}>
              <h2 className={`${styles.title}`}>Olá, eu sou Messias. Prazer em te conhecer!</h2>

              <p>
                Sou desenvelvedor <strong>Frontend e Backend</strong>, comecei com programação faz {time} anos.
                Tenho paixão e confio em meu trabalho, sempre procurando melhorar minhas habilidades
                e inovar em meus projetos.
              </p>

              <p>
                Ofereço serviços de construção de sites, desde os mais simples até os mais complexos.
                Independentemente do tamanho ou da complexidade do projeto,
                garanto que todos os sites sejam criados com a mesma atenção aos detalhes e qualidade de construção.
              </p>

              <p>
                Atualmente estou cursando Análise e Desenvolvimento de Sistemas na 
                <a href='https://www.fiap.com.br/' target='_blank' rel='noreferrer' id={styles.linkFiap}>Fiap</a>.
                Estou aberto para oportunidades de trabalho, então se minhas habilidades corresponderem,
                não hesite em entrar em contato comigo.
              </p>
            </div>

            <div className={styles.habilitiesSide}>
              <div>
                <h2>Habilidades</h2>
              </div>

              <div>
                <CardHability />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.projects} id="projects">
        <div className={styles.cardsProjectArea}>
          <h2 className={stylesGlobal.title}>Projetos em que participei</h2>
          <CardsProject />
        </div>
      </section>

      <section className={styles.contact} id="contact">
        <div >
          <h2 className={stylesGlobal.title}>Me mande uma mensagem!</h2>
        </div>

        <div className={stylesGlobal.container}>
          <div className={styles.formContainer}>
            <ContactForm />
            </div>
        </div>
      </section>

      <section className={styles.socialMedias}>
        <div className={stylesGlobal.container}>
          <div className={styles.box}>
            <div className={styles.letsWork}>
              <h2>Vamos trabalhar juntos!</h2>
            </div>

            <div className={styles.iconsMediaArea}>
              <a
                href="https://www.instagram.com/messias.o.v/?next=%2F"
                target="_blank"
                rel="noreferrer"
              ><AiOutlineInstagram className={styles.iconsSocial} /></a>

              <a
                href="https://www.linkedin.com/in/messias-viana-14a87b209/" 
                target="_blank" 
                rel="noreferrer"
              ><AiFillLinkedin className={styles.iconsSocial} /></a>

              <a
                href="https://github.com/MessiasViana" 
                target="_blank" 
                rel="noreferrer"
              ><AiFillGithub className={styles.iconsSocial} /></a>

              <a
                href="mailto:contato@messiasdev.com.br" 
                target="_blank" 
                rel="noreferrer"
              ><AiOutlineMail className={styles.iconsSocial} /></a>

              <a
                href="https://api.whatsapp.com/send?phone=5511955903306" 
                target="_blank" 
                rel="noreferrer"
              ><AiOutlineWhatsApp className={styles.iconsSocial} /></a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}

export default Page;