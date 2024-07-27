import { useEffect, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('/src/data/products.json');
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className="container mx-auto px-4 py-16 bg-soft-beige section-padding">
      <h1 className="text-4xl font-bold mb-8 text-center text-earth-green">Our Products</h1>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map((product, index) => (
          <Card key={index} className="flex flex-col bg-white shadow-lg hover:shadow-xl transition-shadow duration-300 card-padding">
            <CardHeader className="bg-olive-green text-white">
              <CardTitle className="text-xl font-semibold">{product.name}</CardTitle>
              <Badge variant="secondary" className="mt-2">{product.scientificName}</Badge>
            </CardHeader>
            <CardContent className="flex-grow mt-4">
              <img src={product.image} alt={product.name} className="w-full h-48 object-cover mb-4 rounded" />
              <h3 className="font-semibold mb-2 text-brown">Origin:</h3>
              <p className="mb-4 text-dark-gray">{product.origin}</p>
              <h3 className="font-semibold mb-2 text-brown">Chemical Formulation:</h3>
              <p className="mb-4 text-dark-gray">{product.chemicalFormulation}</p>
              <h3 className="font-semibold mb-2 text-brown">Applications:</h3>
              <p className="text-dark-gray">{product.applications}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Products;