import type {Product} from "./types";

import {useEffect, useState} from "react";

import api from "./api";

function debounce(func: any, delay: number) {
  let timer: number;

  return function (...args: any[]) {
    clearTimeout(timer);
    timer = setTimeout(() => func.apply(this, args), delay);
  };
}

function Search() {
  const [products, setProducts] = useState<Product[]>([]);
  const [query, setQuery] = useState<string>("");
  const [productsFav, setProductsFav] = useState<Set<number>>(new Set<number>());

  useEffect(() => {
    api.search(query).then(setProducts);
  }, [query]);

  const setQueryDebounced = debounce(setQuery, 100);

  const handleClickProduct = (productId: number) => {
    if (productsFav.has(productId)) {
      productsFav.delete(productId);
      setProductsFav(new Set([...productsFav]));
    } else {
      productsFav.add(productId);
      setProductsFav(new Set([...productsFav]));
    }
  };

  return (
    <>
      <input
        name="text"
        placeholder="search..."
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
