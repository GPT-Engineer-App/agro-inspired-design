import { useEffect, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Sprout, Search } from "lucide-react";
import { Input } from "@/components/ui/input";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

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

  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    product.scientificName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container mx-auto px-4 py-16 bg-soft-beige section-padding">
      <h1 className="text-4xl font-bold mb-8 text-center text-earth-green flex items-center justify-center">
        <Sprout className="h-8 w-8 mr-2" />
        Our Products
      </h1>
      
      <div className="mb-8 flex items-center justify-center">
        <div className="relative w-full max-w-md">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <Input
            type="text"
            placeholder="Search products..."
            className="pl-10 pr-4 py-2 w-full"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProducts.map((product, index) => (
          <Card key={index} className="flex flex-col bg-white shadow-lg hover:shadow-xl transition-shadow duration-300 card-padding">
            <CardHeader className="bg-light-pastel rounded-t-lg">
              <CardTitle className="text-xl font-semibold flex items-center text-earth-green">
                {product.name}
              </CardTitle>
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