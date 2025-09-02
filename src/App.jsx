import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Products from './components/Products';
import Gallery from './components/Gallery';
import ShopLocation from './components/ShopLocation';
import AgeGate from './components/AgeGate';
import Footer from './components/Footer';

function App() {
  return (
    <div id="top" className="min-h-[100dvh] md:min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <AgeGate />
        <Hero />
        <About />
        <Products />
        <Gallery />
        <ShopLocation />
      </main>
      <Footer />
    </div>
  );
}

export default App;
