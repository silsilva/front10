import { useRouter } from "next/router";
import { Contaneiner, Form } from "./styled";

type ProductArray = {
  data: any[];
  margin?: string;
};

type Product = {
  image: string;
  title: string;
  price: number;
  id: string;
  onClick: () => void;
};

export function ProductCards({ data, margin }: ProductArray) {
  const router = useRouter();

  return (
    <Contaneiner style={{}}>
      {data.map((i): any => {
        return (
          <ProductCard
            key={i.id}
            image={i.Images[0].url}
            title={i.Name}
            price={i["Unit cost"]}
            id={i.objectID}
            onClick={() => {
              console.log("onClick called");
              router.push(`/item/${i.id}`);
            }}
          />
        );
      })}
    </Contaneiner>
  );
}

function ProductCard({ image, title, price, id }: Product) {
  const router = useRouter();

  function goToItem() {
    router.push(`/item/${id}`);
  }
  return (
    <Form onClick={goToItem}>
      <img
        src={image}
        style={{
          width: "30vh",
          height: "30vh",
          padding: "3vh",
        }}
      />

      <p
        style={{
          width: 142,
          wordWrap: "break-word",
        }}
      >
        {title}
      </p>

      <h2>${price}</h2>
    </Form>
  );
}
