import { useLogout } from "@/lib/hooks";
import { useIsAuthenticated } from "@/lib/hooks";
type NavMenuProps = {
  isLogged: boolean;
  user: string;
  isOpen: "opened" | "closed";
};

export function NavMenu({ isOpen }: NavMenuProps) {
  const setLogout = useLogout();
  function handleLogout() {
    setLogout(true);
  }
  const userInformation: any = useIsAuthenticated();

  const isLogged = userInformation ? true : false;
  return (
    <div>
      <div
        className={isOpen === "opened" ? "opened" : "closed"}
        style={{
          backgroundColor: "#36393c",
          width: "110%",
          position: "absolute",
          left: "105%",
          right: "0px",
        }}
      >
        {isOpen === "opened" && isLogged && (
          <button
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
          </button>
        )}
        {isOpen === "opened" && !isLogged && (
          <a
            href="/signin"
            style={{
              color: "#eaa928",
              textDecoration: "none",
              marginTop: "10vh",
            }}
          >
            Ingresar
          </a>
        )}

        {isOpen === "opened" && (
          <div>
            <a
              href="/profile"
              style={{ color: "#eaa928", textDecoration: "none" }}
            >
              Mi perfil
            </a>
          </div>
        )}
        {isOpen === "opened" && (
          <div>
            <a
              href="/search?q="
              style={{ color: "#eaa928", textDecoration: "none" }}
            >
              Buscar
            </a>
          </div>
        )}
        {isOpen === "opened" && (
          <div>
            <a href="/" style={{ color: "#eaa928", textDecoration: "none" }}>
              Home
            </a>
          </div>
        )}
      </div>
    </div>
  );
}
