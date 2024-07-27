import { Button } from "@/components/ui/button";
import { NavLink } from "react-router-dom";

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-700 to-green-900 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold mb-4">Welcome to Agro L'onious</h1>
            <p className="text-xl mb-8">Cultivating Nature's Finest Ingredients for Beauty and Wellness</p>
            <Button asChild>
              <NavLink to="/products" className="bg-white text-green-800 hover:bg-gray-100">
                Explore Our Products
              </NavLink>
            </Button>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <h2 className="text-2xl font-semibold mb-4 text-green-800">Our Mission</h2>
              <p>To provide the highest quality natural ingredients for the beauty and wellness industry, sourced responsibly from the heart of Turkey.</p>
            </div>
            <div className="text-center">
              <h2 className="text-2xl font-semibold mb-4 text-green-800">Our Vision</h2>
              <p>To be the leading supplier of premium Turkish botanicals, recognized globally for our commitment to quality, sustainability, and innovation.</p>
            </div>
            <div className="text-center">
              <h2 className="text-2xl font-semibold mb-4 text-green-800">Our Values</h2>
              <p>Integrity, Sustainability, Quality, Innovation, and Customer-Centric Approach guide everything we do at Agro L'onious.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Journey Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8 text-green-800">Our Journey</h2>
          <div className="max-w-3xl mx-auto">
            <ul className="space-y-4">
              <li className="flex items-center">
                <div className="bg-green-500 rounded-full p-2 mr-4"></div>
                <p><strong>2010:</strong> Agro L'onious founded in Istanbul, Turkey</p>
              </li>
              <li className="flex items-center">
                <div className="bg-green-500 rounded-full p-2 mr-4"></div>
                <p><strong>2015:</strong> Expanded product line to include Black Cumin Seed and Sumac</p>
              </li>
              <li className="flex items-center">
                <div className="bg-green-500 rounded-full p-2 mr-4"></div>
                <p><strong>2018:</strong> Achieved organic certification for all products</p>
              </li>
              <li className="flex items-center">
                <div className="bg-green-500 rounded-full p-2 mr-4"></div>
                <p><strong>2020:</strong> Launched international distribution network</p>
              </li>
              <li className="flex items-center">
                <div className="bg-green-500 rounded-full p-2 mr-4"></div>
                <p><strong>2023:</strong> Celebrating over a decade of excellence in natural ingredients</p>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;