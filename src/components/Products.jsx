import glasspipe from "../assets/glasspipe.jpg";
import grinder from "../assets/grinder.jpg";
import rollingpapers from "../assets/rollingpapers.jpg";
import React from "react";

// Example product data (replace with real data or props as needed)
const products = [
  {
    name: "Premium Glass Pipe",
    image: glasspipe,
    description: "Handcrafted glass pipe with unique design.",
    price: "$29.99",
  },
  {
    name: "Herbal Grinder",
    image: grinder,
    description: "Durable metal grinder for herbs.",
    price: "$19.99",
  },
  {
    name: "Rolling Papers",
    image: rollingpapers,
    description: "Organic hemp rolling papers.",
    price: "$3.99",
  },
];

function Products() {
  return (
    <section className="py-12 w-full">
      <div className="max-w-5xl mx-auto px-6 mb-10">
        <h2 className="text-2xl md:text-3xl font-bold text-body mb-8 text-center">
          Featured Products
        </h2>
        <div className="grid gap-8 grid-cols-1 md:grid-cols-3">
          {products.map((product, idx) => (
            <div
              key={idx}
              className="bg-card rounded-3xl shadow-2xl p-10 flex flex-col items-center hover:scale-105 hover:shadow-primary/40 transition-all duration-200"
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-56 h-56 object-cover rounded-2xl mb-6 border-4 border-white shadow-md"
              />
              <h3 className="text-2xl font-extrabold text-body mb-2 drop-shadow-sm">
                {product.name}
              </h3>
              <p className="text-body text-base mb-2 text-center font-medium drop-shadow-sm">
                {product.description}
              </p>
              <span className="text-body font-extrabold text-xl drop-shadow-sm">
                {product.price}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Products;
