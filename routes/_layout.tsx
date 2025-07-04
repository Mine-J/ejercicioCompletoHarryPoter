import { PageProps } from "$fresh/server.ts";
import { Footer } from "../components/Footer.tsx";
import { Header } from "../components/Header.tsx";

export default function Layout({ Component}: PageProps) {
  // do something with state here
  return (
      <>
          <Header/>
          <Component />
          <Footer/>
    </>
  );
}