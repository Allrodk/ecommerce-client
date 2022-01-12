import {
  Container,
  Title,
  Form,
  FormItem,
  Button,
  BtnSubmit,
  BtnCancel,
} from "../../../styles/Pages";

export default function Cart() {
  return (
    <Title>
      <img src={require("../../../images/cart.png")} />
      <h2>Carrinho</h2>
    </Title>
  );
}
