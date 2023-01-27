import { useState } from 'react';
import styles from './styled.module.css';

import { Header } from '../../components/header';

import { GrCode } from 'react-icons/gr';
import { RiComputerLine } from 'react-icons/ri';


const Page = () => {

  return (
    <>
      <Header />

      <section className={styles.entranceHall}>
        <div className={styles.superTitle}>
          <GrCode className={styles.hallIcons}/>
          <h1>Desenvolvedor Frontend e Backend</h1>
          <span>Estou aqui para resolucionar seus problemas com tecnologia</span>
        </div>
      </section>
    </>
  )
}

export default Page;