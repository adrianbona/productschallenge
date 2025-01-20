import type {ProductCard} from "./types";

function ProductCard({title, description, price, className, onClick}: ProductCard) {
  return (
    <li className={className} onClick={onClick}>
      <h4>{title}</h4>
      <p className="product-description">{description}</p>
      <span>$ {price}</span>
    </li>
  );
}

export default ProductCard;
