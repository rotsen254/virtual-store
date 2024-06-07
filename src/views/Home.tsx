import styles from "./Home.module.css";
import { NavBar } from "../components/NavBar";
import { Hero } from "../components/Hero";
import { Footer } from "../components/Footer";
import { ProductCard } from "../components/ProductCard";
import products from "../assets/products";

export function Home() {
  return (
    <>
      <NavBar />
      <Hero
        first="Bienvenido a Nuestra Tienda"
        second="Explora nuestros productos"
      />
      <main>
        <div className={styles["product-container"]} id="products">
        {products.map((each) => (
        <ProductCard
          key={each.id}
          id={each.id}
          title={each.title}
          price={each.price}
          color={each.colors[0]}
          image={each.images[0]}
        />
      ))}
        </div>
      </main>
      <Footer />
    </>
  );
}
