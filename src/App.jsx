import Header from "./components/Header/Header";
import Container from "./components/Shared/Container";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Characters from "./components/Characters/Characters";
import StartGame from "./components/StartGame/StartGame";
import Package from "./components/Package/Package";
import Delivery from "./components/Delivery/Delivery";
import Payment from "./components/Payment/Payment";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <Header />
      <Container>
        <Hero />
        <About />
        <Characters />
        <StartGame />
        <Package />
        <Delivery />
        <Payment />
        <Contact />
      </Container>
      <Footer />
    </>
  );
}

export default App;
