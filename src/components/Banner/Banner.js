import { Container, InfoBar } from './Styles'

export default function Banner(props) {
  return (
    <Container>
      <img src={props.image} alt={props.name} />
      <InfoBar>
        <span>Vários planos disponíveis</span>
        <button>Escolha o seu aqui</button>         
      </InfoBar>
    </Container>
  )
}