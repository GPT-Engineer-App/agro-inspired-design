import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const products = [
  {
    name: "Turkish Anise",
    scientificName: "Pimpinella anisum",
    origin: "Native to the Eastern Mediterranean region, including Turkey",
    chemicalFormulation: "Contains anethole, estragole, and other essential oils",
    applications: "Used in cosmetics for its aromatic properties and mild antiseptic effects. Found in perfumes, soaps, and lotions."
  },
  {
    name: "Black Cumin Seed",
    scientificName: "Nigella sativa",
    origin: "Native to the Middle East and South Asia",
    chemicalFormulation: "Contains thymoquinone, nigellone, and various alkaloids",
    applications: "Known for its anti-inflammatory, antioxidant, and antimicrobial properties. Used in skincare products to treat acne, eczema, and other skin conditions."
  },
  {
    name: "Sumac",
    scientificName: "Rhus coriaria",
    origin: "Native to the Mediterranean and Middle Eastern regions",
    chemicalFormulation: "Rich in tannins, flavonoids, and organic acids",
    applications: "Used in cosmetics for its astringent and antioxidant properties. Incorporated into toners, face masks, and scrubs to tighten pores and protect the skin from free radicals."
  }
];

const Products = () => {
  return (
    <div className="container mx-auto px-4 py-16 bg-soft-beige">
      <h1 className="text-4xl font-bold mb-8 text-center text-earth-green">Our Products</h1>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map((product, index) => (
          <Card key={index} className="flex flex-col bg-white">
            <CardHeader className="bg-olive-green text-white">
              <CardTitle className="text-xl font-semibold">{product.name}</CardTitle>
              <p className="text-sm italic">{product.scientificName}</p>
            </CardHeader>
            <CardContent className="flex-grow">
              <img src="/placeholder.svg" alt={product.name} className="w-full h-48 object-cover mb-4 rounded" />
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