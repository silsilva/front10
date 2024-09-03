import { Layout } from "@/components/layout";
import { getProductDetails } from "@/lib/hooks";
import { ProductComponent } from "@/components/item-components";

export default function ItemPage({ data }: any) {
  return (
    <Layout>
      <ProductComponent data={data} />
    </Layout>
  );
}

export function getStaticPaths() {
  return {
    paths: [],
    fallback: "blocking",
  };
}

export async function getStaticProps(context: any) {
  const data = await getProductDetails(context.params.itemId);

  return {
    props: {
      data,
    },
    revalidate: 3600,
  };
}
