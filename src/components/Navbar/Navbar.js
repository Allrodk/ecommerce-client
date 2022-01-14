import { Container, Logo, Links, List, ListItem, Hamburger } from "./Styles";
import { useEffect, useState } from "react";
import Auth from "../../utils/Auth";
import { useNavigate } from "react-router-dom";

import axios from "axios";

export default function Navbar() {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [myTimeout, setMyTimeout] = useState("");
  const [menu, setMenu] = useState([]);
  const [mounted, setMounted] = useState(false);

  const deslogado = [
    {
      href: "/",
      link: "Home",
      icon: "home.png",
    },
    {
      href: "/user/login",
      link: "Login",
      icon: "login.png",
    },
    {
      href: "/user/register",
      link: "Cadastro",
      icon: "register.png",
    },
  ];

  const logado = [
    {
      href: "/",
      link: "Home",
      icon: "home.png",
    },
    {
      href: "/user/cart",
      link: "Carrinho",
      icon: "cart.png",
    },
    {
      href: "/user/profile",
      link: "Perfil",
      icon: "profile.png",
    },
    {
      href: "/",
      link: "Logout",
      icon: "logout.png",
    },
  ];

  async function getProfile() {   
    const config = Auth();
    if (localStorage.token) {
      await axios
        .get("auth/profile", '', config)
        .then((response) => {
          setMenu(logado);
        })
        .catch((error) => {
          setMenu(deslogado);
          localStorage.removeItem("token");
          navigate("/");
        });
    } else {
      setMenu(deslogado);
    }
  }

  useEffect(() => {
    setMounted(true);
    getProfile();
  }, [mounted]);

  const handleAbreMenu = () => {
    if (!open) {
      setOpen(true);
      setMyTimeout(
        setTimeout(() => {
          setOpen(false);
        }, 5000)
      );
    } else {
      setOpen(false);
      clearTimeout(myTimeout);
    }
  };

  const handleMouseOver = () => {
    setOpen(true);
    clearTimeout(myTimeout);
  };

  const handleMouseOut = () => {
    setOpen(false);
  };

  function handleLogout() {
    localStorage.removeItem("token");
    navigate("/");
    window.location.reload();
  }

  const handleClick = () => {
    setOpen(false);
  };

  return (
    <Container>
      <Logo href="/">
        <span>TV Online</span>
      </Logo>

      <Links>
        <List
          activation={open}
          onMouseOver={handleMouseOver}
          onMouseOut={handleMouseOut}
        >
          {/* Cria lista de menu  */}
          {menu.map((item) => {
            return (
              <ListItem
                onClick={item.link === "Logout" ? handleLogout : handleClick}
                key={item.link.toString()}
              >
                <a href={item.href}>
                  <img
                    src={require(`../../images/${item.icon}`)}
                    alt={item.link}
                  />
                  <span>{item.link}</span>
                </a>
              </ListItem>
            );
          })}
        </List>
        <Hamburger onClick={handleAbreMenu}>
          <a href="#foo">
            <span></span>
            <span></span>
            <span></span>
          </a>
        </Hamburger>
      </Links>
    </Container>
  );
}
