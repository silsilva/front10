import { useLogout } from "@/lib/hooks";
import { useState } from "react";
import { useRouter } from "next/router";
import { useToggleSearchBar, useIsAuthenticated } from "@/lib/hooks";
import { NavMenu } from "../nav-menu";
import { Menu } from "../menu";
import { StyledButton, HeaderC } from "./styled";
import Logito from "@/ui/icons/logoo.svg";
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
        <Menu handleClick={handleMenuToggle} />

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
        <NavMenu
          isLogged={isLogged}
          user={userInformation.email}
          isOpen={navMenuStatus}
        />
      </div>
    </HeaderC>
  );
}
