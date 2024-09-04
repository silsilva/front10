import { useLogout } from "@/lib/hooks";
import { useState } from "react";
import { useRouter } from "next/router";
import { useToggleSearchBar, useIsAuthenticated } from "@/lib/hooks";
//import { NavMenu } from "../nav-menu";
import { Menu } from "../menu";
import { StyledButton, HeaderC, ButtonMenu } from "./styled";
import Logito from "@/ui/icons/logoo.svg";
import Hamburguesa from "@/ui/icons/hamburguesa.svg";
export function Header() {
  const [navMenuStatus, setNavMenuStatus]: any = useState("");
  const router = useRouter();
  const userInformation: any = useIsAuthenticated();

  const setLogout = useLogout();
  const isLogged = userInformation ? true : false;
  const { searchBarStatus, updateSearchBarStatus } = useToggleSearchBar();
  function handleLogout() {
    setLogout(true);
  }

  function signIn() {
    router.push("/signin");
  }

  function handleMenuToggle() {
    if (window.innerWidth < 800) {
      navMenuStatus === "opened"
        ? setNavMenuStatus("closed")
        : setNavMenuStatus("opened");
    } else {
      navMenuStatus === "opened"
        ? setNavMenuStatus("closed")
        : setNavMenuStatus("");
    }
    updateSearchBarStatus(!searchBarStatus);
    console.log("Se ha presionado el botón de menú");
  }

  return (
    <HeaderC
      style={{
        backgroundColor: "#36393c",
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      <div>
        <a href="/">
          <Logito
            style={{
              width: "40px",
              height: "40px",
            }}
          />
        </a>
      </div>

      <div>
        <div>
          <ButtonMenu
            style={{
              width: "40px",
              height: "40px",
            }}
          >
            <a href="/menu">
              <Hamburguesa
                style={{
                  width: "40px",
                  height: "40px",
                }}
              />
            </a>
          </ButtonMenu>
        </div>

        {isLogged ? (
          <StyledButton
            onClick={handleLogout}
            style={{
              backgroundColor: "#36393c",
              color: "#eaa928",
              padding: "10px 20px",
              border: "none",
              cursor: "pointer",
            }}
          >
            {userInformation.email} <br />
            Cerrar sesión
          </StyledButton>
        ) : (
          <StyledButton
            onClick={signIn}
            style={{
              backgroundColor: "#36393c",
              color: "white",
              padding: "10px 20px",
              border: "none",
            }}
          >
            Ingresar
          </StyledButton>
        )}
      </div>
    </HeaderC>
  );
}
