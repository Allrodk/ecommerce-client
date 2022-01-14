import { SubContainer, Item, Auth } from "./Styles";
import {
  Container,
  Title,
  Button,
  BtnSubmit,
  BtnCancel,
  Empty,
} from "../../../styles/Pages";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

import axios from "axios";

export default function Profile() {
  const navigate = useNavigate();
  const [logged, setLogged] = useState(false);
  const [profile, setProfile] = useState({});
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    if (localStorage.token) {
      const token = localStorage.token;
      const config = {
        headers: { Authorization: `Bearer ${token}` },
      };
      axios.get("auth/profile", "", config).then((response) => {
        setProfile(response.data);
        setLogged(true);
      });
    }
  }, [mounted]);

  function handleEdit() {
    navigate("/user/edit");
  }

  function handleLogout() {
    localStorage.removeItem("token");
    navigate("/");
    window.location.reload();
  }

  return (
    <Container>
      {logged ? (
        <>
          <Title>
            <img
              src={require("../../../images/profile.png")}
              alt="profile-icon"
            />
            <h2>Meu Perfil</h2>
          </Title>
          <SubContainer>
            <Item>
              <label>Nome:</label>
              <span>{profile.name}</span>
            </Item>

            <Item>
              <label>Apelido:</label>
              <span>{profile.nickname}</span>
            </Item>

            <Item>
              <label>E-mail:</label>
              <span>{profile.email}</span>
            </Item>

            <Item>
              <label>Data de Nascimento:</label>
              <span>{profile.birthdate}</span>
            </Item>

            <Item>
              <img src={profile.imageUrl} alt="Minha Foto" />
            </Item>

            <Item>
              <Button>
                <BtnSubmit type="submit" value="Editar" onClick={handleEdit} />
                <BtnCancel
                  type="submit"
                  value="Logout"
                  onClick={handleLogout}
                />
              </Button>
            </Item>
          </SubContainer>
        </>
      ) : (
        <>
          <Empty>
            <h2>Você não está logado</h2>
            <Auth>
              <p>
                Clique em
                <a href={"/user/login"}> Login </a>
                para se autenticar
              </p>
            </Auth>
          </Empty>
        </>
      )}
    </Container>
  );
}
