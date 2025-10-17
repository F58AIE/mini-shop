import React from "react";
import ProductCard from "../components/ProductCard";

const products = [
  { id: 1, name: "Product 1", price: 50, image: "https://via.placeholder.com/150" },
  { id: 2, name: "Product 2", price: 75, image: "https://via.placeholder.com/150" },
  { id: 3, name: "Product 3", price: 120, image: "https://via.placeholder.com/150" },
];

export default function Store() {
  return (
    <div className="p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}
