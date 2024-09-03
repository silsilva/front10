import Head from "next/head";
import { Layout } from "@/components/layout";
import { getProductListgetProductList } from "@/lib/hooks";
import { HomeComponent } from "@/components/home-component";

function Home({ data }: any) {
  const results = data.results;

  return (
    <Layout>
      <Head>
        <title>Home</title>
      </Head>
      <HomeComponent data={results} />
    </Layout>
  );
}

export default Home;

export async function getStaticProps() {
  const data = await getProductListgetProductList();

  return {
    props: {
      data,
    },
    revalidate: 3600,
  };
}
