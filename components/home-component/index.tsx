import { ProductCards } from "../product-cards";
import { useRouter } from "next/router";
import { Contaneiner } from "./styled";

type ProductArray = {
  data: any[];
};

export function HomeComponent({ data }: ProductArray) {
  const router = useRouter();

  function handleSubmit(e: any) {
    console.log("hace click");

    e.preventDefault();
    const target = e.target;
    const value = target.product.value;

    router.push(`search?q=${value}&limit=3&offset=0`);
  }

  return (
    <Contaneiner>
      <div
        style={{
          paddingTop: "0px",
          backgroundColor: "#b57c00",
        }}
      >
        <h2
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "0px",
            paddingTop: "30px",
          }}
        >
          E-commerce
        </h2>
        <div>
          <div
            style={{
              height: "9vh",
              display: "flex",
              justifyContent: "center",
              alignItems: "flex-end",
            }}
          >
            <p>Encontra lo que buscas </p>
          </div>

          <div
            style={{
              height: "20vh",
              display: "flex",
              justifyContent: "center",
              alignItems: "flex-start",
            }}
          >
            <div>
              <form onSubmit={handleSubmit} style={{ width: "200px" }}>
                <input
                  style={{
                    width: "200px",
                    marginBottom: "5px",
                    border: "1px solid #ccc",
                    borderRadius: "5px",
                    boxShadow: "0 0 5px rgba(0, 0, 0, 0.1)",
                    WebkitBoxShadow: "0 0 5px rgba(0, 0, 0, 0.1)",
                    MozBoxShadow: "0 0 5px rgba(0, 0, 0, 0.1)",
                  }}
                  name="product"
                />

                <button
                  style={{
                    width: "200px",
                    height: "25px",
                    background: "#36393c" /* Color de fondo */,
                    border: "none",
                    borderRadius: "5px",
                    color: "#fff" /* Color de texto */,
                    cursor: "pointer" /* Mostrar cursor de puntero */,
                    boxShadow: "0 2px 4px rgba(0, 0, 0, .2)",
                    WebkitBoxShadow: "0 2px 4px rgba(0, 0, 0, .2)",
                    MozBoxShadow: "0 2px 4px rgba(0, 0, 0, .2)",
                  }}
                >
                  BUSCAR
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div>
        <h2
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "0px",
          }}
        >
          PRODUCTOS DESTACADOS
        </h2>
        <div>
          <ProductCards data={data} />
        </div>
      </div>
    </Contaneiner>
  );
}
