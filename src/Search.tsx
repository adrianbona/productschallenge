import type {Product} from "./types";

import {useEffect, useState} from "react";

import api from "./api";

export const debounce = <T extends (...args: any[]) => any>(callback: T, waitFor: number) => {
  let timeout: ReturnType<typeof setTimeout>;

  return (...args: Parameters<T>): ReturnType<T> => {
    let result: any;

    timeout && clearTimeout(timeout);
    timeout = setTimeout(() => {
      result = callback(...args);
    }, waitFor);

    return result;
  };
};

function Search() {
  const storedProductsFav: string = JSON.parse(localStorage.getItem("productsFav"));
  const [products, setProducts] = useState<Product[]>([]);
  const [query, setQuery] = useState<string>("");
  const [productsFav, setProductsFav] = useState<Set<number>>(
    storedProductsFav ? new Set(storedProductsFav) : new Set(),
  );

  useEffect(() => {
    api.search(query).then(setProducts);
  }, [query]);

  useEffect(() => {
    localStorage.setItem("productsFav", JSON.stringify(Array.from(productsFav)));
  }, [productsFav]);

  useEffect(() => {
    const handleStorageChange = (event) => {
      if (event.key === "productsFav") {
        setProductsFav(new Set(JSON.parse(event.newValue)));
      }
    };

    window.addEventListener("storage", handleStorageChange);

    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, []);

  const setQueryDebounced = debounce(setQuery, 100);

  const handleClickProduct = (productId: number) => {
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
          <li
            key={product.id}
            className={productsFav.has(product.id) ? "fav" : ""}
            onClick={() => {
              handleClickProduct(product.id);
            }}
          >
            <h4>{product.title}</h4>
            <p className="product-description">{product.description}</p>
            <span>$ {product.price}</span>
          </li>
        ))}
      </ul>
    </>
  );
}

export default Search;
