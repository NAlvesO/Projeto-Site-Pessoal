import Banner from "./components/Banner"
import { CardSection } from "./components/CardSection"
import { Certificacao } from "./components/certificacao"
import Footer from "./components/Footer"
import Header from "./components/Header"
import Card from "./components/Main"

export default function App() {
  return (
    <>
      <Header />
      <Banner />
      <CardSection>
        <Card/>
      </CardSection>
      <Certificacao />
      <Footer />
    </>
  )
}