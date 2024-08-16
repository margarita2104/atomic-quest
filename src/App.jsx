import Header from "./components/Header/Header";
import Container from "./components/Shared/Container";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Characters from "./components/Characters/Characters";

function App() {
  return (
    <>
      <Header />
      <Container>
        <Hero />
        <About />
        <Characters/>
      </Container>
    </>
  );
}

export default App;
