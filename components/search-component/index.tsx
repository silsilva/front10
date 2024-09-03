import { ProductCards } from "../product-cards";
import { useSearch } from "@/lib/hooks";
import { useRouter } from "next/router";
import { Container } from "./styled";
export function SearchComponent() {
  const { data } = useSearch();
  const router = useRouter();
  const paginationData = data?.pagination || {};
  const { limit, total } = paginationData;
  const products = data?.results || [];
  const seeMoreDisplay = limit === total ? "none" : "inherit";
  function seeMore() {
    const { pathname, query } = router;
    const currentLimit = parseInt(query.limit as any) || 3;
    const newLimit = currentLimit + 3;
    router.push({ pathname, query: { ...query, limit: newLimit } });
  }
  function handleSubmit(e: any) {
    e.preventDefault();
    const target = e.target;
    const value = target.product.value;

    router.push(`search?q=${value}&limit=3&offset=0`);
  }
  return (
    <Container>
      {products.length === 0 ? (
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
                    background: "#36393c",
                    border: "none",
                    borderRadius: "5px",
                    color: "#fff",
                    cursor: "pointer",
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
      ) : (
        <ProductCards data={products} margin="10px 0 30px" />
      )}
      <div
        onClick={seeMore}
        style={{ display: seeMoreDisplay, cursor: "pointer" }}
      >
        Ver más
      </div>
    </Container>
  );
}
