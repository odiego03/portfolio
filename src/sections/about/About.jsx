import React from 'react'
import styles from './About.module.css'
import perfil from '../../assets/perfil.png'

export default function About() {
  return (
    <section id="about">
        <h3>Sobre Mim</h3>
        <div className={styles.aboutContainer}>
            <div className={styles.imageContainer}>
                <img src={perfil} alt="Foto de perfil" className={styles.profileImage} />
            </div>
            <div className={styles.textContainer}>
                <p>&emsp;Sou alguém curioso, que gosta de entender e 
                sentir antes de agir.<br/>&emsp; A programação me fascina justamente por isso:
                com apenas 0 e 1, é possível criar 
                coisas reais, dar forma a ideias e transformar pensamentos em projetos digitais.<br/>&emsp; Para mim, programar
                é uma forma de construir ideias no mundo digital.
                </p>
                <h4>Graduação</h4>
                <p>&emsp;Atualmente sou estudante na  Fatec Ipiranga Pastor Enéas Tognini e estou no quarto semestre no curso de Análise e Desenvolvimento de Sistemas.
                </p>
            </div>
        </div>
    </section>
  )
}
