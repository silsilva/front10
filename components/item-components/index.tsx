import { placeOrder } from "@/lib/hooks";
import { useRouter } from "next/router";
import { useGetStorageData } from "@/lib/hooks";
import { Container, Img, Text } from "./styled";

export function ProductComponent({ data }: any) {
  const router = useRouter();
  const auth_token = useGetStorageData("user_information");
  async function redirectToPayment() {
    if (auth_token) {
      const order = await placeOrder(data.objectID);
      router.push(order.url);
    }
  }

  return (
    <div
      style={{
        height: "83vh",
      }}
    >
      {!auth_token ? (
        <p>INICIA SESION</p>
      ) : (
        <Container>
          <Img src={data.Images[0].url} />

          <Text style={{}}>
            <h2>{data.Name}</h2>
            <p>${data["Unit cost"]}</p>
            <button
              style={{
                width: "200px",
                height: "25px",
                background: "#36393c",
                border: "none",
                borderRadius: "5px",
                color: "#fff",
                cursor: "pointer",
                boxShadow: "0 2px 4px rgba(0, 0, 0, .2)",
                WebkitBoxShadow: "0 2px 4px rgba(0, 0, 0, .2)",
                MozBoxShadow: "0 2px 4px rgba(0, 0, 0, .2)",
              }}
              onClick={() => redirectToPayment()}
            >
              Comprar
            </button>
          </Text>
        </Container>
      )}
    </div>
  );
}
