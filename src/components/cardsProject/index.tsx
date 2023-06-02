import styles from './styled.module.css';

import { AiOutlineRight } from 'react-icons/ai';


export const CardsProject = () => {

  const projects = [
    {
      image: require('../../images/projects/last/muuvi.png'),
      title: 'Muuvi',
      link: 'https://muuvi.com.br/'
    },
    {
      image: require('../../images/projects/last/jandtaxi.png'),
      title: 'JandTaxi',
      link: 'https://jandtaxi.com.br/'
    },
    {
      image: require('../../images/projects/last/JVservicos.png'),
      title: 'Jv serviços',
      link: 'https://www.jvservicos.com.br/'
    }
  ];

  return (
    <div className={styles.container}>
      {/* Projects */}
      <div className={styles.subTitle}>
          <h2>Recentes</h2>
      </div>

      <div className={styles.projectsArea}>
        {projects.map((project, index) => (
          <a 
            className={styles.card}
            href={project.link}
            target="_blank"
            rel='noreferrer'
            key={index}
          >
            <div className={styles.cardImageArea}>
              <img
                src={project.image}
                alt="imageSite"
              />
            </div>
            <div className={styles.cardContent}>
              <div id={styles.leftSide}>
                <h3>{project.title}</h3>
                <span>Veja mais</span>
              </div>

              <div id={styles.rightSide}>
                <AiOutlineRight id={styles.iconCard} />
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}