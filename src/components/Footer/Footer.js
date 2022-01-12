import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaTwitterSquare,
  FaYoutubeSquare,
} from "react-icons/fa";
import { Container, Social, Item } from "./Styles";

export default function Footer() {
  return (
    <Container>
      <Social>
        <Item>
          <a href="#foo">
            <FaFacebookSquare />
          </a>
        </Item>
        <Item>
          <a href="#foo">
            <FaInstagramSquare />
          </a>
        </Item>
        <Item>
          <a href="#foo">
            <FaTwitterSquare />
          </a>
        </Item>
        <Item>
          <a href="#foo">
            <FaYoutubeSquare />
          </a>
        </Item>
      </Social>
      <span>
        © 2022 TV Online. Não nos reponsabilizamos pelo que vocês assistem.
      </span>
    </Container>
  );
}
