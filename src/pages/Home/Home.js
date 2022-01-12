import Banner from "../../components/Banner/Banner";
import Search from "../../components/Search/Search";
import CardContainer from "../../components/CardContainer/CardContainer";
import Card from "../../components/Card/Card";
import axios from "axios";
import { useState, useEffect } from "react";

export default function Home() {
  const [games, setGames] = useState([]);

  const getData = async () => {
    await axios.get("/game/findMany").then((response) => {
      setGames(response.data);
    });
  };

  useEffect(() => {
    getData();
  });

  return (
    <>
      <Banner
        image="https://img.olhardigital.com.br/wp-content/uploads/2021/12/assistir-tv-online-2-shutterstock_413633761-1024x683.jpg"
        age="16"
        info="Violência, drogas"
      />
      <Search />
      <CardContainer title="Planos">
        {games.map((game) => (
          <Card
            key={game.id}
            image={game.imageUrl}
            name={game.name}
            price={game.price}
          />
        ))}
      </CardContainer>
    </>
  );
}
