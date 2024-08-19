import Banner from "./components/Banner"
import { Certificacao } from "./components/certificacao"
import CursosEmAndamento from "./components/Main/CursosEmAndamento"
import Footer from "./components/Footer"
import Header from "./components/Header"
import Main from "./components/Main/Main"

export default function App() {
  return (
    <>
      <Header />
      <Banner />
      <Main/>
      <CursosEmAndamento/>
      <Certificacao />
      <Footer />
    </>
  )
}