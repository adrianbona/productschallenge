import type {Product} from "./types";

import {useEffect, useState} from "react";

import api from "./api";
import ProductCard from "./ProductCard";

function Recommended() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    api.search().then(setProducts);
  }, []);

  return (
    <main>
      <h1>Recommended products</h1>
      <ul>
        {[...products]
          .sort(() => (Math.random() > 0.5 ? 1 : -1))
          .slice(0, 2)
          .map((product) => (
            <ProductCard
              key={`product-${product.id}`}
              description={product.description}
              price={product.price}
              title={product.title}
            />
          ))}
      </ul>
    </main>
  );
}

export default Recommended;
