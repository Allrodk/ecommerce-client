import { Container, Title, Empty } from "../../../styles/Pages";
import CardContainer from "../../../components/CardContainer/CardContainer";
import Card from "../../../components/Card/Card";
import axios from "axios";
import { useState, useEffect } from "react";

export default function Cart() {
  const [planos, setPlanos] = useState([]);

  const getData = async () => {
    await axios.get("/user/cartList").then((response) => {
      setPlanos(response.data.planos);
    });
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <Container>
      <Title>
        <img src={require("../../../images/cart.png")} alt="cart-icon" />
        <h2>Carrinho</h2>
      </Title>
      {planos.length > 0 ? (
        <CardContainer>
          {planos.map((plano) => (
            <Card
              key={plano.id}
              id={plano.id}
              // image={plano.imageUrl}
              name={plano.name}
              price={plano.price}
            />
          ))}
        </CardContainer>
      ) : (
        <Empty>
          <h3>Seu carrinho está vazio</h3>
        </Empty>
      )}
    </Container>
  );
}
