import { useEffect } from "react";
import { BsCartPlus, BsCartFill } from "react-icons/bs";
import { Container, Item, AddCart, Cart, Square } from "./Styles";
import axios from "axios";
import { useState } from "react/cjs/react.development";
import { useNavigate } from "react-router-dom";

export default function Card(props) {
  const [mounted, setMounted] = useState(false);
  const [listed, setListed] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setMounted(true);
    if (localStorage.token) {
      const token = localStorage.token;
      const config = {
        headers: { Authorization: `Bearer ${token}` },
      };
      axios.get("user/cartList", "", config).then((response) => {
        const planos = response.data.planos;
        planos.map((plano) => {
          if (props.id === plano.id) {
            setListed(true);
          }
        });
      });
    }
  }, [mounted]);

  const handleAddList = async () => {
    if (localStorage.token) {
      const token = localStorage.token;
      const config = {
        headers: { Authorization: `Bearer ${token}` },
      };
      await axios.patch(`user/addList/${props.id}`, config).then((response) => {
        if (response.data.message.toString().includes("adicionado")) {
          setListed(true);
        } else {
          setListed(false);
        }
      });
    }
  };

  function handlePlano() {
    navigate("/plano/details", { state: props.id });
  }

  function handlePrice(number) {
    return new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(number);
  }

  return (
    <Container>
      <Item onClick={handlePlano}>
        <Square>
          <p>{props.image}</p>
          <p>Dias</p>
        </Square>
        <h2>{props.name}</h2>
        <span>{"R$ " + handlePrice(props.price)}</span>
      </Item>
      <AddCart onClick={handleAddList}>
        {listed ? (
          <>
            <Cart>
              <BsCartFill />
            </Cart>
            <p>Remover</p>
          </>
        ) : (
          <>
            <Cart>
              <BsCartPlus />
            </Cart>
            <p>Adicionar</p>
          </>
        )}
      </AddCart>
    </Container>
  );
}
