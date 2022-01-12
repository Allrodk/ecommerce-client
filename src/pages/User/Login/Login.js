// import { Container, Form, Button, FormItem } from "./Styles";
import { useState } from "react";
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
import { Modal } from "react-responsive-modal";
import "react-responsive-modal/styles.css";

import axios from "axios";

export default function Login() {
  const [openMsg, setOpenMsg] = useState(false);
  const [message, setMessage] = useState();

  const [email, setEmail] = useState("");
  const [nickname, setNickname] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();

    const login = {
      email: email,
      nickname: nickname,
      password: password,
    };

    axios
      .post("/auth/login", login)
      .then((response) => {
        const token = response.data.token;
        localStorage.setItem("token", token);
        navigate("/");
        window.location.reload();
      })
      .catch((error) => {
        setMessage(error.response.data.message);
        setOpenMsg(true);
      });
  };

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
        <img src={require("../../../images/login.png")} alt="login-icon" />
        <h2>Login</h2>
      </Title>
      <Form onSubmit={handleSubmit}>
        <FormItem>
          <label htmlFor="login">E-mail / Apelido:</label>
          <input
            type="text"
            id="login"
            placeholder="Email ou apelido"
            required
            onChange={(event) => {
              setEmail(event.target.value);
              setNickname(event.target.value);
            }}
          ></input>
        </FormItem>
        <FormItem>
          <label htmlFor="password">Senha:</label>
          <input
            type="password"
            id="password"
            placeholder="Senha"
            required
            onChange={(event) => {
              setPassword(event.target.value);
            }}
          ></input>
        </FormItem>
        <FormItem>
          <Button>
            <BtnSubmit type="submit" value="Login" />
          </Button>
        </FormItem>
        <FormItem>
          <a href="/user/register">Clique aqui para se Cadastrar</a>
        </FormItem>
      </Form>
      <Modal open={openMsg} center showCloseIcon={false}>
        <h3>{message}</h3>
        <Button>
          <BtnCancel type="submit" value="Fechar" onClick={fechaModal} />
        </Button>
      </Modal>
    </Container>
  );
}
