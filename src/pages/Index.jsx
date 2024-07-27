import { Button } from "@/components/ui/button";
import { NavLink } from "react-router-dom";
import { Sprout, Target, Leaf, History } from "lucide-react";

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen bg-soft-beige">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-earth-green to-olive-green py-20 section-padding">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-6xl font-bold mb-4 text-white font-handwritten" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.5)' }}>Welcome to Agro L'onious</h1>
            <p className="text-2xl mb-8 text-gold font-semibold drop-shadow-lg">Cultivating Nature's Finest Ingredients for Beauty and Wellness</p>
            <Button asChild size="lg" className="bg-rust-orange hover:bg-gold text-white transition-colors duration-300 btn-transition">
              <NavLink to="/products" className="flex items-center gap-2">
                <Sprout className="h-5 w-5" />
                Explore Our Products
              </NavLink>
            </Button>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values Section */}
      <section className="py-16 bg-soft-beige section-padding">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 card-padding">
              <Target className="h-12 w-12 mx-auto mb-4 text-earth-green" />
              <h2 className="text-2xl font-semibold mb-4 text-earth-green">Our Mission</h2>
              <p className="text-dark-gray">To provide the highest quality natural ingredients for the beauty and wellness industry, sourced responsibly from the heart of Turkey.</p>
            </div>
            <div className="text-center bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 card-padding">
              <Leaf className="h-12 w-12 mx-auto mb-4 text-earth-green" />
              <h2 className="text-2xl font-semibold mb-4 text-earth-green">Our Vision</h2>
              <p className="text-dark-gray">To be the leading supplier of premium Turkish botanicals, recognized globally for our commitment to quality, sustainability, and innovation.</p>
            </div>
            <div className="text-center bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 card-padding">
              <Sprout className="h-12 w-12 mx-auto mb-4 text-earth-green" />
              <h2 className="text-2xl font-semibold mb-4 text-earth-green">Our Values</h2>
              <p className="text-dark-gray">Integrity, Sustainability, Quality, Innovation, and Customer-Centric Approach guide everything we do at Agro L'onious.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Journey Section */}
      <section className="py-16 bg-white section-padding">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8 text-earth-green">Our Journey</h2>
          <div className="max-w-3xl mx-auto">
            <ul className="space-y-4">
              <li className="flex items-center bg-soft-beige p-4 rounded-lg shadow-sm">
                <History className="h-8 w-8 mr-4 text-gold" />
                <p className="text-dark-gray"><strong className="text-brown">2010:</strong> Agro L'onious founded in Istanbul, Turkey</p>
              </li>
              <li className="flex items-center bg-soft-beige p-4 rounded-lg shadow-sm">
                <History className="h-8 w-8 mr-4 text-gold" />
                <p className="text-dark-gray"><strong className="text-brown">2015:</strong> Expanded product line to include Black Cumin Seed and Sumac</p>
              </li>
              <li className="flex items-center bg-soft-beige p-4 rounded-lg shadow-sm">
                <History className="h-8 w-8 mr-4 text-gold" />
                <p className="text-dark-gray"><strong className="text-brown">2018:</strong> Achieved organic certification for all products</p>
              </li>
              <li className="flex items-center bg-soft-beige p-4 rounded-lg shadow-sm">
                <History className="h-8 w-8 mr-4 text-gold" />
                <p className="text-dark-gray"><strong className="text-brown">2020:</strong> Launched international distribution network</p>
              </li>
              <li className="flex items-center bg-soft-beige p-4 rounded-lg shadow-sm">
                <History className="h-8 w-8 mr-4 text-gold" />
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