import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import api from "./api";
import { Product } from "./types";
import withLocalStorage from "./withLocalStorage";

function Search({
  localStorageValue: storedProductsFav = [],
  updateLocalStorage,
}: {
  localStorageValue: number[];
  updateLocalStorage: (value: number[]) => void;
}) {
  const [products, setProducts] = useState<Product[]>([]);
  const [query, setQuery] = useState<string>("");
  const [productsFav, setProductsFav] = useState<Set<number>>(new Set(storedProductsFav));

  useEffect(() => {
    api.search(query).then(setProducts);
  }, [query]);

  useEffect(() => {
    updateLocalStorage(Array.from(productsFav));
  }, [productsFav, updateLocalStorage]);

  useEffect(() => {
    setProductsFav(new Set(storedProductsFav));
  }, [storedProductsFav]);

  const debounce = <T extends (...args: any[]) => any>(callback: T, waitFor: number) => {
    let timeout: ReturnType<typeof setTimeout>;

    return (...args: Parameters<T>): void => {
      if (timeout) clearTimeout(timeout);
      timeout = setTimeout(() => callback(...args), waitFor);
    };
  };

  const setQueryDebounced = debounce(setQuery, 100);

  const handleProductClick = (productId: number) => {
    setProductsFav((prevProductsFav) => {
      const newProductsFav = new Set(prevProductsFav);

      if (newProductsFav.has(productId)) {
        newProductsFav.delete(productId);
      } else {
        newProductsFav.add(productId);
      }

      return newProductsFav;
    });
  };

  return (
    <>
      <input
        name="text"
        placeholder="Search..."
        type="text"
        onChange={(e) => setQueryDebounced(e.target.value)}
      />
      <ul>
        {products.map((product) => (
          <ProductCard
            key={`product-card-${product.id}`}
            className={productsFav.has(product.id) ? "fav" : "not-fav"}
            description={product.description}
            price={product.price}
            title={product.title}
            onClick={() => handleProductClick(product.id)}
          />
        ))}
      </ul>
    </>
  );
}

export default withLocalStorage(Search, "productsFav");
