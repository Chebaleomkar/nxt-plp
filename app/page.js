'use client';
import Header from "../components/Header";
import ProductListing from "../components/ProductListing";
import Footer from "../components/footer";
import Hero from "../components/Hero"

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <ProductListing />
      <Footer />
    </main>
  );
}
