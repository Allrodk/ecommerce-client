import { Container, Title } from "../../styles/Pages";
import { Items, AddCart, Cart } from "./Styles";
import axios from "axios";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { BsCartPlus, BsCartFill } from "react-icons/bs";

export default function Details() {
  const location = useLocation();
  const [plano, setPlano] = useState({});
  const [listed, setListed] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    axios.get(`plano/findOne/${location.state}`).then((response) => {
      setPlano(response.data);
    });
    if (localStorage.token) {
      const token = localStorage.token;
      const config = {
        headers: { Authorization: `Bearer ${token}` },
      };
      axios.get("user/cartList", "", config).then((response) => {
        const planos = response.data.planos;
        planos.map((cart) => {
          if (location.state === cart.id) {
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
      await axios.patch(`user/addList/${plano.id}`, config).then((response) => {
        if (response.data.message.toString().includes("adicionado")) {
          setListed(true);
        } else {
          setListed(false);
        }
      });
    }
  };

  function handlePrice(number){
    return new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(number)    
  }

  return (
    <Container>
      <Title>
        <h2>Plano {plano.name}</h2>
      </Title>
      <Items>
        <p>
          {plano.duration} Dias de duração com direito à {plano.screen} Tela.{" "}
        </p>
        <p>Inclui Canais SD, HD, Full HD, H265 e 4K,</p>
        <p>Mais de 70.000 Filmes, Séries e Novelas,</p>
        <p>E também inclui Canais Legendados.</p>
        <span>Por Apenas {"R$ " + handlePrice(plano.price)}</span>
      </Items>
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
