import { Button } from "@/components/ui/button";
import { NavLink } from "react-router-dom";

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen bg-soft-beige">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-earth-green to-olive-green py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold mb-4 text-gold">Welcome to Agro L'onious</h1>
            <p className="text-xl mb-8 text-white">Cultivating Nature's Finest Ingredients for Beauty and Wellness</p>
            <Button asChild className="bg-rust-orange hover:bg-gold text-white">
              <NavLink to="/products">
                Explore Our Products
              </NavLink>
            </Button>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values Section */}
      <section className="py-16 bg-soft-beige">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <h2 className="text-2xl font-semibold mb-4 text-earth-green">Our Mission</h2>
              <p className="text-dark-gray">To provide the highest quality natural ingredients for the beauty and wellness industry, sourced responsibly from the heart of Turkey.</p>
            </div>
            <div className="text-center">
              <h2 className="text-2xl font-semibold mb-4 text-earth-green">Our Vision</h2>
              <p className="text-dark-gray">To be the leading supplier of premium Turkish botanicals, recognized globally for our commitment to quality, sustainability, and innovation.</p>
            </div>
            <div className="text-center">
              <h2 className="text-2xl font-semibold mb-4 text-earth-green">Our Values</h2>
              <p className="text-dark-gray">Integrity, Sustainability, Quality, Innovation, and Customer-Centric Approach guide everything we do at Agro L'onious.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Journey Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8 text-earth-green">Our Journey</h2>
          <div className="max-w-3xl mx-auto">
            <ul className="space-y-4">
              <li className="flex items-center">
                <div className="bg-gold rounded-full p-2 mr-4"></div>
                <p className="text-dark-gray"><strong className="text-brown">2010:</strong> Agro L'onious founded in Istanbul, Turkey</p>
              </li>
              <li className="flex items-center">
                <div className="bg-gold rounded-full p-2 mr-4"></div>
                <p className="text-dark-gray"><strong className="text-brown">2015:</strong> Expanded product line to include Black Cumin Seed and Sumac</p>
              </li>
              <li className="flex items-center">
                <div className="bg-gold rounded-full p-2 mr-4"></div>
                <p className="text-dark-gray"><strong className="text-brown">2018:</strong> Achieved organic certification for all products</p>
              </li>
              <li className="flex items-center">
                <div className="bg-gold rounded-full p-2 mr-4"></div>
                <p className="text-dark-gray"><strong className="text-brown">2020:</strong> Launched international distribution network</p>
              </li>
              <li className="flex items-center">
                <div className="bg-gold rounded-full p-2 mr-4"></div>
                <p className="text-dark-gray"><strong className="text-brown">2023:</strong> Celebrating over a decade of excellence in natural ingredients</p>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;