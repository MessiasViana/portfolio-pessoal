import styles from './styled.module.css';

import { AiOutlineRight } from 'react-icons/ai';

export const CardsProject = () => {
	const projects = [
		{
			image: require('../../images/projects/last/muuvi.png'),
			title: 'Muuvi',
			link: 'https://muuvi.com.br/',
		},
		{
			image: require('../../images/projects/last/jandtaxi.png'),
			title: 'JandTaxi',
			link: 'https://jandtaxi.com.br/',
		},
		{
			image: require('../../images/projects/last/JVservicos.png'),
			title: 'Jv serviços',
			link: 'https://www.jvservicos.com.br/',
		},
	];

  
	const personalProjects = [
    {
      image: require('../../images/projects/personal/pokedex.png'),
			title: 'Pokédex Explorer',
			link: 'https://pokedex-explorer-seven-indol.vercel.app/',
		},
	];
  
  interface Project {
    image: string;
    title: string;
    link: string;
  }
  
	const renderProjects = (projectList: Project[]) =>
		projectList.map((project, index) => (
			<a
				className={styles.card}
				href={project.link}
				target="_blank"
				rel="noreferrer"
				key={index}
			>
				<div className={styles.cardImageArea}>
					<img src={project.image} alt="pré-visualização do site" />
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
		));

	return (
    <div className={styles.container}>
      {projects.length > 0 && (
      <>
        <div className={styles.subTitle}>
          <h2>Recentes</h2>
        </div>
        <div className={styles.projectsArea}>
          {renderProjects(projects)}
        </div>
      
      </>
      )}
      

			{personalProjects.length > 0 && (
				<>
					<div className={styles.subTitle}>
						<h2>Pessoais</h2>
					</div>
					<div className={styles.projectsArea}>
						{renderProjects(personalProjects)}
					</div>
				</>
			)}
		</div>
	);
};
