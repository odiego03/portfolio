import { useState } from 'react'
import styles from './CardProject.module.css'
import ItemProject from '../itemProject/ItemProject.jsx'

export default function CardProject({ id, nome, descricao, imagem, link, tecnologias, categoria }) {
  const [expandido, setExpandido] = useState(false);

  const toggleExpandido = () => setExpandido(!expandido);

  const textoDescricao =
    descricao.length > 120 && !expandido
      ? descricao.substring(0, 120) + '...'
      : descricao;

  return (
    <article className={styles.cardProject}>
      <img src={imagem} alt={nome} className={styles.image} />
      <h3 className={styles.title}>{nome}</h3>
      <h4 className={styles.category}>{categoria}</h4>

      <p className={styles.description}>
        {textoDescricao}
        {descricao.length > 120 && (
          <button onClick={toggleExpandido} className={styles.verMais}>
            {expandido ? 'ver menos' : 'ver mais'}
          </button>
        )}
      </p>

      <div className={styles.technologies}>
        {tecnologias.map((tech) => (
          <ItemProject key={tech.id} id={tech.id} nome={tech.nome} imagem={tech.imagem} />
        ))}
      </div>

      <button className={styles.button} onClick={() => window.open(link, '_blank')}>
        Ver Projeto
      </button>
    </article>
  );
}
