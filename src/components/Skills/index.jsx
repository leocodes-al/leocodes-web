import {
  Main,
  ContainerStack,
  TitleStack,
  SubTitle,
  ContainerSkills,
  BoxSkill

} from './styles'

const Skills = () => {
  return (
    <Main>
      <ContainerStack>
        <TitleStack>Minha Stack</TitleStack>
        <SubTitle>Tecnologias e ferramentas utilizadas no desenvolvimento do dia a dia.</SubTitle>
      </ContainerStack>

      <ContainerSkills>
        <BoxSkill>React</BoxSkill>
        <BoxSkill>JavaScript (ES6+)</BoxSkill>
        <BoxSkill>HTML / CSS3</BoxSkill>
        <BoxSkill>styled-components</BoxSkill>
        <BoxSkill>Git & GitHub</BoxSkill>
        <BoxSkill>Vite</BoxSkill>
        <BoxSkill>Figma (UI/UX)</BoxSkill>
      </ContainerSkills>
    </Main>
  )
}

export default Skills