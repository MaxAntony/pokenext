import Head from "next/head";
import { FC } from "react";
import { Navbar } from "../ui";

type props = { children: JSX.Element[] | JSX.Element, title?: string }
export const Layout: FC<props> = ({ children, title }) => {
  return (
    <>
      <Head>
        <title>{title || 'Pokemon App'}</title>
        <meta name="author" content="Max Antony" />
        <meta name="description" content="Catalogo de pokemons" />
        <meta name="keywords" content="Pokemon, Catalogo" />
      </Head>
      <Navbar />
      <main style={{
        padding: '0px 20px'
      }}>
        {children}
      </main>
    </>
  )
}
