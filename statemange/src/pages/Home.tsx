import { products } from "../assets/data/products";
import ProductCard from "../components/ProductCard";

export default function Home() {
  return (
    <div className="grid grid-cols-4 gap-6 p-6">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}
