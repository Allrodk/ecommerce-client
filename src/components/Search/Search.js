import { FaSearchPlus } from 'react-icons/fa';
import { Container } from './Styles';

export default function Search() {
  return (
    <Container>      
      <form>
        <FaSearchPlus />
        <input type='text' placeholder='Pesquisa por plano'></input>
        <input type='submit' value='Busca'></input>
      </form>
    </Container>
  )
}