'use client';
import Header from "../components/Header";
import ProductListing from "../components/ProductListing";
import Footer from "../components/footer";
import Hero from "../components/Hero"

export default function Home() {
  return (
    <main>
      <Hero />
      <ProductListing />
    </main>
  );
}
