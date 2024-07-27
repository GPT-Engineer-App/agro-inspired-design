import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const services = [
  {
    title: "Custom Formulations",
    description: "We work closely with our clients to develop custom formulations tailored to their specific needs, leveraging our expertise in Turkish botanicals."
  },
  {
    title: "Quality Assurance",
    description: "Our rigorous quality control processes ensure that all our products meet the highest standards of purity and efficacy."
  },
  {
    title: "Sustainable Sourcing",
    description: "We partner with local farmers to source our ingredients sustainably, supporting local communities while preserving the environment."
  },
  {
    title: "Research and Development",
    description: "Our dedicated R&D team continuously explores new applications for our botanical ingredients, driving innovation in the beauty and wellness industry."
  },
  {
    title: "Technical Support",
    description: "We provide comprehensive technical support to our clients, offering guidance on product integration and formulation optimization."
  },
  {
    title: "Global Distribution",
    description: "With our extensive distribution network, we ensure timely delivery of our products to clients worldwide."
  }
];

const Services = () => {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-8 text-center text-green-800">Our Services</h1>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <Card key={index} className="flex flex-col">
            <CardHeader>
              <CardTitle className="text-xl font-semibold text-green-700">{service.title}</CardTitle>
            </CardHeader>
            <CardContent className="flex-grow">
              <p>{service.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Services;