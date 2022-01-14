import Banner from "../../components/Banner/Banner";
import Search from "../../components/Search/Search";
import CardContainer from "../../components/CardContainer/CardContainer";
import Card from "../../components/Card/Card";
import axios from "axios";
import { useState, useEffect } from "react";

export default function Home() {
  const [planos, setPlanos] = useState([]);

  const getData = async () => {
    await axios.get("/plano/findAll").then((response) => {
      setPlanos(response.data);
    });
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <Banner image="https://img.olhardigital.com.br/wp-content/uploads/2021/12/assistir-tv-online-2-shutterstock_413633761-1024x683.jpg" />
      <Search />
      <CardContainer title="Planos">
        {planos.map((plano) => (
          <Card
            key={plano.id}
            id={plano.id}            
            name={plano.name}
            image={plano.duration}
            price={plano.price}
          />
        ))}
      </CardContainer>
    </>
  );
}
