import Hero from "./components/Hero";
import About from "./components/About";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Products from "./components/Products";
import Social from "./components/Social";

function App() {
  return (
    <div className="w-screen min-h-screen flex flex-col text-center m-0 p-0">
      <Header />
      <Hero />
      <About className="flex-1" />
      <Products />
      <Social />
      <Footer />
    </div>
  );
}

export default App;
