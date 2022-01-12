import { FaRegHeart } from 'react-icons/fa';
import { Container, Item, Wish } from './Styles';

export default function Card(props) {
  return (
    <Container>
      <Item>
        <img src={props.image} alt={props.name} />
        <h2>{props.name}</h2>
        <span>{'R$ ' + props.price}</span>
      </Item>
      <Wish>
        <FaRegHeart />
      </Wish>
    </Container>
  )
}