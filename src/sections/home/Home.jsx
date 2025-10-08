import React from 'react'
import styles from './home.module.css'
import Curriculo from '../../assets/icons/curriculo.png'

function home() {
  return (
    <section id="home" className={styles.homeSection}>
        <div className={styles.homeContainer}>

        <p className={styles.introText}>Oi, meu nome é</p>
        <h1 className={styles.name}>Diego Silva.</h1>
        <h2 className={styles.profession}>Desenvolvedor Full-Stack</h2>
        <p className={styles.description}> aqui você encontrará alguns dos meus projetos e habilidades alem de conhecer um pouco mais sobre mim.</p>

        <div className={styles.buttonContainer}>
        <button className={styles.linkedin} onClick={() => window.open('https://www.linkedin.com/in/odiiego-silva/', '_blank')}> <i className="bi bi-linkedin"></i> Linkedin</button>
        <button className={styles.github} onClick={() => window.open('https://github.com/odiego03', '_blank')}> <i className="bi bi-github"></i> GitHub</button>
        <button className={styles.curriculo} onClick={() => window.open('/curriculo.pdf', '_blank')}> <i className="bi bi-file-earmark-text"></i> Currículo</button>

        </div>
        </div>
    </section>
  )
}

export default home