// import { Container, Form, Button, FormItem } from "./Styles";
import {
  Container,
  Title,
  Form,
  FormItem,
  Button,
  BtnSubmit,
  BtnCancel,
} from "../../../styles/Pages";
import { useNavigate } from "react-router-dom";
import { useCallback, useEffect, useState } from "react";
import { Modal } from "react-responsive-modal";
import "react-responsive-modal/styles.css";
import Auth from "../../../utils/Auth";

import axios from "axios";

export default function Edit(props) {
  const navigate = useNavigate();

  const [open, setOpen] = useState(false);
  const [openMsg, setOpenMsg] = useState(false);
  const [message, setMessage] = useState(false);
  const [defaultPassword, setDefaultPassword] = useState("");
  const [profile, setProfile] = useState({});
  const [mounted, setMounted] = useState(false);

  const [name, setName] = useState("");
  const [nickname, setNickname] = useState("");
  const [email, setEmail] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [password, setPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [passwordConfirmation, setConfirmationPassword] = useState("");

  Auth();
  const getProfile = useCallback(async () => {
    await axios
      .get("auth/profile")
      .then((response) => {
        if (mounted) {
          setProfile(response.data);
          setName(response.data.name);
          setNickname(response.data.nickname);
          setEmail(response.data.email);
          setImageUrl(response.data.imageUrl);
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

  const handleSubmit = (event) => {
    event.preventDefault();

    const userUpdate = {
      name: name,
      nickname: nickname,
      email: email,
      imageUrl: imageUrl,
      password: password,
      newPassword: newPassword,
      passwordConfirmation: passwordConfirmation,
    };

    axios
      .patch(`/user/update/${profile.id}`, userUpdate)
      .then((response) => {
        setMessage("Perfil alterado com sucesso");
        navigate("/user/profile", props.message);
      })
      .catch((error) => {
        const msgError = error.response.data.message;

        if (msgError.toString().includes("must be an email")) {
          setMessage("Insira um e-mail válido");
        } else if (msgError.toString().includes("must be longer than")) {
          setMessage("A senha deve conter de 6 a 15 caracteres.");
        } else {
          setMessage(msgError);
        }
        setOpenMsg(true);
      });
  };

  async function deleteUser() {
    await axios.delete(`/user/remove/${profile.id}`).then((response) => {
      setMessage(response.data.message);
    });
    FechaModal();
    navigate("/", props.message);
  }

  // funcoes de abertura e fechamento do modal
  const AbreModal = (event) => {
    event.preventDefault();
    setOpen(true);
    setDefaultPassword("******");
    setPassword(defaultPassword);
    setNewPassword(defaultPassword);
    setConfirmationPassword(defaultPassword);
  };
  const FechaModal = () => {
    if (open) {
      setOpen(false);
      setDefaultPassword("");
      setPassword(defaultPassword);
      setNewPassword(defaultPassword);
      setConfirmationPassword(defaultPassword);
    }
    if (openMsg) {
      setOpenMsg(false);
    }
  };

  return (
    <Container>
      <Title>
        <img src={require("../../../images/profile.png")} alt="profile-icon" />
        <h2>Editar Perfil</h2>
      </Title>
      <Form onSubmit={handleSubmit}>
        <FormItem>
          <label htmlFor="name">Nome</label>
          <input
            type="text>"
            id="name"
            defaultValue={profile.name}
            onChange={(event) => setName(event.target.value)}
            required
          ></input>
        </FormItem>

        <FormItem>
          <label htmlFor="nickname">Apelido</label>
          <input
            type="text"
            id="nickname"
            defaultValue={profile.nickname}
            onChange={(event) => setNickname(event.target.value)}
            required
          ></input>
        </FormItem>

        <FormItem>
          <label htmlFor="email">E-mail</label>
          <input
            type="email"
            id="email"
            defaultValue={profile.email}
            onChange={(event) => setEmail(event.target.value)}
            required
          ></input>
        </FormItem>

        <FormItem>
          <label htmlFor="imageUrl">Foto</label>
          <input
            type="text"
            id="imageUrl"
            defaultValue={profile.imageUrl}
            onChange={(event) => setImageUrl(event.target.value)}
            required
          ></input>
        </FormItem>

        <FormItem>
          <label htmlFor="password">Senha Antiga</label>
          <input
            type="password"
            id="password"
            defaultValue={defaultPassword}
            onChange={(event) => setPassword(event.target.value)}
            required
          ></input>
        </FormItem>

        <FormItem>
          <label htmlFor="newPassword">Nova Senha</label>
          <input
            type="password"
            id="newPassword"
            defaultValue={defaultPassword}
            onChange={(event) => setNewPassword(event.target.value)}
            required
          ></input>
        </FormItem>

        <FormItem>
          <label htmlFor="confirmationPassword">Confirmação da Senha</label>
          <input
            type="password"
            id="confirmationPassword"
            defaultValue={defaultPassword}
            onChange={(event) => setConfirmationPassword(event.target.value)}
            required
          ></input>
        </FormItem>

        <FormItem>
          <Button>
            <BtnSubmit type="submit" value="Alterar" />
            <BtnCancel type="submit" value="Excluir" onClick={AbreModal} />
          </Button>
          <Modal open={open} center showCloseIcon={false}>
            <h2>Deseja Realmente Excluir o Perfil?</h2>
            <Button>
              <BtnSubmit type="submit" value="Não" onClick={FechaModal} />
              <BtnCancel type="submit" value="Sim" onClick={deleteUser} />
            </Button>
          </Modal>
          <Modal open={openMsg} center showCloseIcon={false}>
            <h3>{message}</h3>
            <Button>
              <BtnCancel type="submit" value="Fechar" onClick={FechaModal} />
            </Button>
          </Modal>
        </FormItem>
      </Form>
    </Container>
  );
}
