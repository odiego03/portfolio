import React from 'react'
import styles from './ProjectList.module.css'
import CardProject from '../../components/cardProject/CardProject.jsx'
import ReactIcon from '../../assets/icons/atom.png'
import CssIcon from '../../assets/icons/css.png'
import HtmlIcon from '../../assets/icons/html.png'
import BootstrapIcon from '../../assets/icons/bootstrap.png'
import PostgreIcon from '../../assets/icons/postgre.png'
import AspnetIcon from '../../assets/icons/aspnet.png'
import DotnetIcon from '../../assets/icons/dotnet.png'
import Hk from '../../assets/projects/hk.png'


export default function ProjectList() {
    const projects = [{id: 1, nome: 'Hk eyewear',
         descricao: 'O HKey Eyewear é uma plataforma de e-commerce desenvolvida com ASP.NET Core (backend) e React (frontend), projetada para gerenciar e exibir os produtos da marca de forma moderna, rápida e responsiva. O sistema oferece um catálogo completo de produtos, com imagens, descrições, variações e coleções organizadas, permitindo que os clientes naveguem com facilidade e encontrem o modelo ideal. O processo de venda é direto e descomplicado: ao selecionar um produto, o cliente é direcionado automaticamente para uma conversa no WhatsApp, onde o atendimento e o fechamento da compra são feitos de forma personalizada. Esse modelo simples — mas bem implementado — combina a agilidade do digital com o atendimento humano da marca, garantindo uma experiência prática e próxima do cliente.',
          imagem: Hk,
          link: 'https://hkeyewear.com.br/',
            tecnologias: [
                {id: 1, nome: 'React', imagem: ReactIcon},
                {id: 2, nome: 'CSS', imagem: CssIcon},
                {id: 3, nome: 'HTML', imagem: HtmlIcon},
                {id: 4, nome: 'Bootstrap', imagem: BootstrapIcon},
                {id: 5, nome: 'PostgreSQL', imagem: PostgreIcon},
                {id: 6, nome: 'ASP.NET', imagem: AspnetIcon},
                {id: 7, nome: 'Entity Framework', imagem: DotnetIcon}

            ],
          categoria: 'Full-Stack'},
          
    ];
  return (
    <section id="project">
  <h2 className={styles.title}>Meus Projetos</h2>

  <div className={styles.projectList}>
    {projects.map((project) => (
      <CardProject key={project.id} {...project} />
    ))}
  </div>
</section>

  )
}
