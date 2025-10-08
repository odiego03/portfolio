import { useState } from 'react';
import styles from './Contact.module.css';

export default function Contact() {
  

  return (
    <section id="contact" className={styles.contactSection}>
      <h2 className={styles.title}>Fale comigo</h2>
      <p className={styles.subtitle}>Vamos trabalhar juntos! me envie um email ou uma mensagem no LinkedIn.</p>

      <div className={styles.quickContacts}>
        <a href="mailto:diegosdo0911@gmail.com" className={styles.contactLink}>diegosdo0911@gmail.com</a>
        
        <a href="https://www.linkedin.com/in/odiiego-silva/" target="_blank" rel="noopener noreferrer" className={styles.contactLink}>LinkedIn</a>
      </div>
    </section>
  );
}
