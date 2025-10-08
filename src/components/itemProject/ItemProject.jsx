import React from 'react'
import styles from './ItemProject.module.css'

export default function ItemProject({id, nome, imagem}) {
  return (
    <div className={styles.itemProject} >
      <img src={imagem} alt={nome} className={styles.icon} />
      <p className={styles.title}>{nome}</p>
    </div>
  )
}
