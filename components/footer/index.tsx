import { useIsAuthenticated } from "@/lib/hooks";
import { Container } from "./styled";
export function Footer() {
  const isLogged = useIsAuthenticated();
  const redirectToLogin = isLogged ? "/profile" : "/signin";

  return (
    <Container style={{}}>
      <div
        style={{
          width: "30%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <a href="/signin" style={{ color: "#eaa928", textDecoration: "none" }}>
          Ingresar
        </a>
        <a
          href={redirectToLogin}
          style={{ color: "#eaa928", textDecoration: "none" }}
        >
          Mi perfil
        </a>
        <a href="/search" style={{ color: "#eaa928", textDecoration: "none" }}>
          Buscar
        </a>
      </div>

      <div>
        <h2 style={{ color: "#eaa928", textDecoration: "none" }}>Redes</h2>
        <div>
          <a
            href="https://www.linkedin.com/in/dylan-pilsner"
            target="_blank"
            style={{ color: "#eaa928", textDecoration: "none" }}
          >
            Linkedin
          </a>
          ❤️️
        </div>
        <div>
          <a
            href="https://github.com/dylanpilsner"
            target="_blank"
            style={{ color: "#eaa928", textDecoration: "none" }}
          >
            Github
          </a>
          ❤️️
        </div>
      </div>
    </Container>
  );
}
