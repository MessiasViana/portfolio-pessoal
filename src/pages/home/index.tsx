import { useEffect, useState } from 'react';
import styles from './styled.module.css';

import { Header } from '../../components/header';
import { CardHability } from '../../components/cardsHability';
import { CardsProject } from '../../components/cardsProject';

import { GrCode } from 'react-icons/gr';
import { RiComputerLine } from 'react-icons/ri';


const Page = () => {
  const [time, setTime] = useState<number>();

  const date = new Date();
  const year = date.getFullYear();

  
  const toProjects = () => {
    window.location.href = '/projects';
  }

  useEffect(() => {
    setTime(year - 2019);
  }, [year])
  
  return (
    <>
      <Header />

      <section className={styles.entranceHall}>
        <div className={styles.entranceTitle}>
          <GrCode className={styles.hallIcons}/>
          <h1>Desenvolvedor Frontend e Backend</h1>
          <span>Estou aqui para resolucionar seus problemas com tecnologia</span>
        </div>

        <div className={styles.buttonProjectsArea}>
          <button className={styles.buttonProjects} onClick={toProjects}>Projetos</button>
        </div>

        <div className={styles.wheelArea}>
          <div className={styles.wheel}></div>
        </div>
      </section>

      <section className={styles.about}> 
        <div className={styles.aboutContainer}>
          <div className={styles.presentation}>
            <h2>Olá, eu sou Messias. Prazer em te conhecer</h2>

            <p>
              Sou desenvelvedor <strong>Frontend e Backend</strong>, comecei com programação faz {time} anos.
              Tenho paixão e confio em meu trabalho, sempre procurando melhorar minhas habilidades
              e inovar em meus projetos.
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
      </section>

      <section className={styles.projects}>
        <div className={styles.title}>
          <h2>Projetos recentes</h2>
        </div>

        <div className={styles.cardsProjectArea}>
          <CardsProject />
        </div>
      </section>
    </>
  )
}

export default Page;