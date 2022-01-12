import { SubContainer, Item } from "./Styles";
import {
  Container,
  Title,
  Button,
  BtnSubmit,
  BtnCancel,
} from "../../../styles/Pages";
import { useNavigate } from "react-router-dom";
import Auth from "../../../utils/Auth";
import { useCallback, useEffect, useState } from "react";
import { Modal } from "react-responsive-modal";
import "react-responsive-modal/styles.css";

import axios from "axios";

export default function Profile() {
  const navigate = useNavigate();
  const [openMsg, setOpenMsg] = useState(false);
  const [message, setMessage] = useState();
  const [profile, setProfile] = useState({});
  const [mounted, setMounted] = useState(false);

  const getProfile = useCallback(async () => {
    Auth();
    await axios
      .get("auth/profile")
      .then((response) => {
        if (mounted) {
          setProfile(response.data);
        }
      })
      .catch((error) => {
        setMessage("Você não está logado ou o seu login expirou.");
        setOpenMsg(true);
      });
  }, [mounted]);

  useEffect(() => {
    setMounted(true);
    getProfile();
  }, [mounted, getProfile]);

  function handleEdit() {
    navigate("/user/edit");
  }

  function handleLogout() {
    localStorage.removeItem("token");
    navigate("/");
    window.location.reload();
  }

  function fechaModal() {
    if (openMsg) {
      setOpenMsg(false);
    }
    if (message.includes("seu login expirou")) {
      navigate("/user/login");
    }
  }

  return (
    <Container>
      <Title>
        <img src={require("../../../images/profile.png")} alt="profile-icon" />
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
            <BtnCancel type="submit" value="Logout" onClick={handleLogout} />
          </Button>
        </Item>
        <Modal open={openMsg} center showCloseIcon={false}>
          <h3>{message}</h3>
          <Button>
            <BtnCancel type="submit" value="Fechar" onClick={fechaModal} />
          </Button>
        </Modal>
      </SubContainer>
    </Container>
  );
}
