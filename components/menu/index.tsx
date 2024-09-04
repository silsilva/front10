import { useIsAuthenticated } from "@/lib/hooks";
import { Container } from "./styled";
import { useLogout } from "@/lib/hooks";
import { useState } from "react";
import { useRouter } from "next/router";

//import { NavMenu } from "../nav-menu";

import { StyledButton, HeaderC, ButtonMenu } from "./styled";
import Logito from "@/ui/icons/logoo.svg";
import Hamburguesa from "@/ui/icons/hamburguesa.svg";
export function Menu() {
  const [navMenuStatus, setNavMenuStatus]: any = useState("");
  const router = useRouter();
  const userInformation: any = useIsAuthenticated();

  const setLogout = useLogout();
  const isLogged = userInformation ? true : false;

  const redirectToLogin = isLogged ? "/profile" : "/signin";
  function handleLogout() {
    setLogout(true);
  }

  function signIn() {
    router.push("/signin");
  }

  return (
    <Container style={{}}>
      {isLogged ? (
        <button
          onClick={handleLogout}
          style={{
            backgroundColor: "#36393c",
            border: "none",
            color: "#eaa928",
            marginBottom: "30px",
          }}
        >
          {userInformation.email} <br />
          Cerrar sesión
        </button>
      ) : (
        <button
          onClick={signIn}
          style={{
            backgroundColor: "#36393c",
            color: "white",
            padding: "10px 20px",
            border: "none",
            marginBottom: "30px",
          }}
        >
          Ingresar
        </button>
      )}
      <div
        style={{
          width: "30%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <a
          href="/signin"
          style={{
            color: "#eaa928",
            textDecoration: "none",
            marginBottom: "30px",
          }}
        >
          Ingresar
        </a>
        <a
          href={redirectToLogin}
          style={{
            color: "#eaa928",
            textDecoration: "none",
            marginBottom: "30px",
          }}
        >
          Mi perfil
        </a>
        <a
          href="/search"
          style={{
            color: "#eaa928",
            textDecoration: "none",
            marginBottom: "30px",
          }}
        >
          Buscar
        </a>
        <a
          href="/"
          style={{
            color: "#eaa928",
            textDecoration: "none",
            marginBottom: "30px",
          }}
        >
          Home
        </a>
      </div>
    </Container>
  );
}
