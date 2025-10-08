import React from 'react'
import styles from './Header.module.css'

export default function Header() {
  return (
    <header className={styles.header}>
        
        <nav>
            <ul className={styles.navList}>
                <li className={styles.navItem}><a href="#home">Home</a></li>
                <li className={styles.navItem}><a href="#about">Sobre</a></li>
                <li className={styles.navItem}><a href="#project">Projetos</a></li>
                <li className={styles.navItem}><a href="#contact">Contato</a></li>
            </ul>
        </nav>
    </header>
  )
}
