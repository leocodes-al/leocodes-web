import { useState } from 'react'

import {
  Main,
  Title,
  SubTitle,
  ContainerProject,
  BoxProject,
  TitleBox,
  Span,
  InfoBox,
  ContainerLabel,
  Label,
  BtnDetails
} from './styles'

import HortiIMG from '../../assets/HortiWeb.png'
import OrbitaIMG from '../../assets/OrbitaWeb.png'


import ModalProjeto from '../ProjectModal/ProjectModal'

const projects = [
  {
    id: 'hortifruti',
    category: 'E-commerce',
    title: 'Hortifruti Web',
    description:
      'E-commerce de frutas, verduras e legumes com catálogo de produtos, carrinho de compras funcional e finalização de pedidos pelo WhatsApp.',
    technologies: ['HTML', 'CSS3', 'JavaScript', 'LocalStorage'],
    overview:
      'O Hortifruti Web foi criado para facilitar a compra de frutas, verduras e legumes por meio de uma experiência de compra online simples e intuitiva.',
    features: [
      'Catálogo de frutas, verduras e legumes',
      'Carrinho de compras funcional',
      'Finalização de pedidos pelo WhatsApp'
    ],
    challenges:
      'O projeto permite praticar a manipulação de produtos, a atualização do carrinho e a construção de uma experiência de compra intuitiva.',
    image: HortiIMG,
    liveUrl: 'https://hortifrutiweb.vercel.app/',
    githubUrl: 'https://github.com/leocodes-al/hortifruti-web'
  },
  {
    id: 'orbita',
    category: 'Plataforma de Viagens',
    title: 'Órbita — Plataforma de Viagens',
    description:
      'Plataforma de viagens desenvolvida em React, com navegação dinâmica, destinos turísticos, pacotes e opções de hospedagem em uma experiência web inspirada em serviços reais de turismo.',
    technologies: ['React', 'Vite', 'JavaScript', 'Figma'],
    overview:
      'O Órbita é um projeto de plataforma de viagens pensado para apresentar destinos turísticos, pacotes e opções de hospedagem em uma interface moderna.',
    features: [
      'Apresentação de destinos turísticos',
      'Exibição de pacotes de viagem',
      'Opções de hospedagem',
      'Navegação entre as páginas da plataforma'
    ],
    challenges:
      'O projeto contribui para o aprendizado de componentização, organização de interfaces e desenvolvimento de aplicações com React.',
    image: OrbitaIMG,
    liveUrl: 'https://orbita-viagens.vercel.app/Hospedagem',
    githubUrl: 'https://github.com/leocodes-al/orbita-project'
  }
]

const Project = () => {
  const [selectedProject, setSelectedProject] = useState(null)

  return (
    <Main>
      <Title>Projetos Selecionados</Title>

      <SubTitle>
        Cases conceituais construídos com padrões de mercado e foco em produto.
      </SubTitle>

      <ContainerProject>
        {projects.map((project) => (
          <BoxProject key={project.id}>
            <Span>{project.category}</Span>

            <TitleBox>{project.title}</TitleBox>

            <InfoBox>{project.description}</InfoBox>

            <ContainerLabel>
              {project.technologies.map((technology) => (
                <Label key={technology}>{technology}</Label>
              ))}
            </ContainerLabel>

            <BtnDetails
              type="button"
              onClick={() => setSelectedProject(project)}
            >
              Ver detalhamento do case
            </BtnDetails>
          </BoxProject>
        ))}
      </ContainerProject>

      {selectedProject && (
        <ModalProjeto
          projeto={selectedProject}
          fecharModal={() => setSelectedProject(null)}
        />
      )}
    </Main>
  )
}

export default Project

