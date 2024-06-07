import styles from "./Thumbs.module.css"


export function Thumbs({product}){
  
    return(
        <>
        <section className={styles["product-images-block"]}>
              <div className={styles["product-images"]}>
                  {product.images.map((each, index) => (
                    <img
                      key = {index}
                      className={styles["mini-img"]}
                      src={each}
                      alt={product.id}
                    />
                  ))}
                </div>
                <img
                  className={styles["big-img"]}
                  id="big-img"
                  src={product.images[0]}
                  alt={product.id}
                />
              </section>
        </>
    )
}