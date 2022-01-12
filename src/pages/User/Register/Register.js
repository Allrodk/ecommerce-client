import { useState } from "react";
import axios from "axios";
import {
  Container,
  Title,
  Form,
  FormItem,
  Terms,
  Button,
  BtnSubmit,
  BtnCancel,
} from "../../../styles/Pages";
import { useNavigate } from "react-router-dom";
import { Modal } from "react-responsive-modal";
import "react-responsive-modal/styles.css";

export default function Register() {
  const navigate = useNavigate();

  const [openMsg, setOpenMsg] = useState(false);
  const [message, setMessage] = useState();
  const [name, setName] = useState("");
  const [nickname, setNickname] = useState("");
  const [email, setEmail] = useState("");
  const [birthdate, setBirthdate] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setConfirmationPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    const user = {
      name: name,
      nickname: nickname,
      email: email,
      birthdate: birthdate,
      imageUrl: imageUrl,
      password: password,
      passwordConfirmation: passwordConfirmation,
    };

    axios
      .post("user/register", user)
      .then((response) => {
        setMessage("Usuário cadastrado com sucesso");
        setOpenMsg(true);
        navigate("/");
      })
      .catch((error) => {
        setMessage(error.response.data.message);
        setOpenMsg(true);
      });
  };

  function Voltar() {
    navigate("/");
  }

  function fechaModal() {
    if (openMsg) {
      setOpenMsg(false);
    }
  }

  return (
    <Container>
      <Title>
        <img
          src={require("../../../images/register.png")}
          alt="register-icon"
        />
        <h2>Cadastro de Usuário</h2>
      </Title>
      <Form onSubmit={handleSubmit}>
        <FormItem>
          <label htmlFor="name">Nome</label>
          <input
            type="text>"
            id="name"
            onChange={(event) => setName(event.target.value)}
            required
          ></input>
        </FormItem>

        <FormItem>
          <label htmlFor="nickname">Apelido</label>
          <input
            type="text"
            id="nickname"
            onChange={(event) => setNickname(event.target.value)}
            required
          ></input>
        </FormItem>

        <FormItem>
          <label htmlFor="email">E-mail</label>
          <input
            type="email"
            id="email"
            onChange={(event) => setEmail(event.target.value)}
            required
          ></input>
        </FormItem>

        <FormItem>
          <label htmlFor="birthdate">Nascimento</label>
          <input
            type="date"
            id="birthdate"
            onChange={(event) => setBirthdate(event.target.value)}
            required
          ></input>
        </FormItem>

        <FormItem>
          <label htmlFor="imageUrl">Foto</label>
          <input
            type="text"
            id="imageUrl"
            onChange={(event) => setImageUrl(event.target.value)}
            required
          ></input>
        </FormItem>

        <FormItem>
          <label htmlFor="password">Senha</label>
          <input
            type="password"
            id="password"
            onChange={(event) => setPassword(event.target.value)}
            required
          ></input>
        </FormItem>

        <FormItem>
          <label htmlFor="confirmationPassword">Confirmação da Senha</label>
          <input
            type="password"
            id="confirmationPassword"
            onChange={(event) => setConfirmationPassword(event.target.value)}
            required
          ></input>
        </FormItem>

        <FormItem>
          <Terms>
            <input type="checkbox" id="term" required />
            <label htmlFor="term">Eu concordo com os termos</label>
          </Terms>
        </FormItem>

        <FormItem>
          <Button>
            <BtnSubmit type="submit" value="Enviar" />
            <BtnCancel type="submit" value="Voltar" onClick={Voltar} />
          </Button>
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
