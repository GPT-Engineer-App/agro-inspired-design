import { useEffect, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { Skeleton } from "@/components/ui/skeleton";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('/src/data/products.json');
        const data = await response.json();
        setProducts(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching products:", error);
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  };

  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    product.scientificName.toLowerCase().includes(searchQuery.toLowerCase()) ||
    product.applications.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="container mx-auto px-4 py-16 bg-soft-beige section-padding">
      <motion.h1 
        className="text-4xl font-bold mb-8 text-center text-earth-green"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Our Products
      </motion.h1>
      
      <div className="mb-8 relative">
        <Input
          type="text"
          placeholder="Search products..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="pl-10"
        />
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
      </div>

      <motion.div 
        className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {loading ? (
          // Skeleton loading state
          Array(6).fill().map((_, index) => (
            <Card key={index} className="flex flex-col bg-white shadow-lg hover:shadow-xl transition-shadow duration-300 card-padding">
              <CardHeader className="bg-yellow-100 rounded-t-lg">
                <Skeleton className="h-6 w-3/4" />
                <Skeleton className="h-4 w-1/2 mt-2" />
              </CardHeader>
              <CardContent className="flex-grow mt-4">
                <Skeleton className="w-full h-48 mb-4 rounded-lg" />
                <Skeleton className="h-4 w-3/4 mb-2" />
                <Skeleton className="h-4 w-full mb-4" />
                <Skeleton className="h-4 w-3/4 mb-2" />
                <Skeleton className="h-4 w-full mb-4" />
                <Skeleton className="h-4 w-3/4 mb-2" />
                <Skeleton className="h-4 w-full" />
              </CardContent>
            </Card>
          ))
        ) : (
          filteredProducts.map((product, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card className="flex flex-col bg-white shadow-lg hover:shadow-xl transition-all duration-300 card-padding transform hover:-translate-y-1">
                <CardHeader className="bg-yellow-100 rounded-t-lg">
                  <CardTitle className="text-xl font-semibold text-earth-green">{product.name}</CardTitle>
                  <Badge variant="secondary" className="mt-2 bg-yellow-200 text-earth-green">{product.scientificName}</Badge>
                </CardHeader>
                <CardContent className="flex-grow mt-4">
                  <div className="w-full h-48 mb-4 rounded-lg overflow-hidden">
                    <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
                  </div>
                  <h3 className="font-semibold mb-2 text-brown">Origin:</h3>
                  <p className="mb-4 text-dark-gray">{product.origin}</p>
                  <h3 className="font-semibold mb-2 text-brown">Chemical Formulation:</h3>
                  <p className="mb-4 text-dark-gray">{product.chemicalFormulation}</p>
                  <h3 className="font-semibold mb-2 text-brown">Applications:</h3>
                  <p className="text-dark-gray">{product.applications}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))
        )}
      </motion.div>
    </div>
  );
};

export default Products;