import styles from "./Details.module.css";
import { NavBar } from "../components/NavBar";
import { Hero } from "../components/Hero";
import { Footer } from "../components/Footer";
import products from "../assets/products";
import { useParams } from "react-router-dom";
import { ProductCard } from "../components/ProductCard";
import { Thumbs } from "../components/Thumbs";
import { Description } from "../components/Description";
import { Checkout } from "../components/Checkout";

export function Details() {

  const { id } = useParams();
  const product = products.find((each) => each.id === id);
  const oferta = products.filter((product) => product.onsale);

  if (product) {
    return (
      <>
        <NavBar />
        <Hero first="Para" second="Más Informacion" />
        <main>
          <div className={styles["details-container"]}>
            <div id="details" className={styles["columns-container"]}>
              <Thumbs product={product}/>
              <Description product={product}/>
              <Checkout product={product}/> 
            </div>
            <div className={styles["sales-block"]}>
              <h2 className={styles["sales-title"]}>Ofertas de la semana</h2>
              <div
                id="product-container"
                className={styles["product-container"]}
              >
                {oferta.map((each) => (
                  <ProductCard
                    key = {each.id}
                    id={each.id}
                    title={each.title}
                    price={each.price}
                    color={each.colors[0]}
                    image={each.images[0]}
                  />
                ))}
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </>
    );
  }
  return <></>;
}
