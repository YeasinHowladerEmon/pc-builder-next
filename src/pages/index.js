import RootLayout from "@/components/Layouts/RootLayout";
import Banner from "@/components/Ui/Banner";
import Categories from "@/components/Ui/Categories";
import Product from "@/components/Ui/Product";
import Head from "next/head";


const HomePage = ({ product }) => {
  return (
    <>
      <Head>
        <title>
          MULTIPLAN CITY
        </title>
        <meta
          name="description"
          content="This is a PC BUILDER WEBSITE"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Banner />
      <Categories />
      <Product product={product} />
    </>
  )
}
export default HomePage;

HomePage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>
}

export const getStaticProps = async () => {
  const res = await fetch(`http://127.0.0.1:3000/api/products`)
  const data = await res.json();
  return {
    props: {
      product: data.data
    }
  }
}