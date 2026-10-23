import {
  Main,
  ContainerStack,
  TitleStack,
  SubTitle,
  ContainerSkills,
  BoxSkill
} from './styles'

const tecnologias = [
  'React',
  'JavaScript (ES6+)',
  'HTML / CSS3',
  'styled-components',
  'Git & GitHub',
  'Vite',
  'Figma (UI/UX)'
]

const Skills = () => {
  return (
    <Main>
      <ContainerStack>
        <TitleStack>Minha Stack</TitleStack>
        <SubTitle>
          Tecnologias e ferramentas utilizadas no desenvolvimento do dia a dia.
        </SubTitle>
      </ContainerStack>

      <ContainerSkills>
        {tecnologias.map((tecnologia) => (
          <BoxSkill key={tecnologia}>
            {tecnologia}
          </BoxSkill>
        ))}
      </ContainerSkills>
    </Main>
  )
}

export default Skills