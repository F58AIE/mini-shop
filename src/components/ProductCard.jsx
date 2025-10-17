import React from "react";

export default function ProductCard({ product }) {
  return (
    <div className="border rounded-lg shadow-md p-4 hover:shadow-xl transition">
      <img src={product.image} alt={product.name} className="w-full h-40 object-cover rounded" />
      <h2 className="mt-2 font-bold text-lg">{product.name}</h2>
      <p className="mt-1 text-gray-700">${product.price}</p>
      <button className="mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
        Add to Cart
      </button>
    </div>
  );
}
