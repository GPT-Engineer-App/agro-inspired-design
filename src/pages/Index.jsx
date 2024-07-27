import { Button } from "@/components/ui/button";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Leaf, Shield, Recycle } from "lucide-react";

const Index = () => {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  return (
    <div className="flex flex-col min-h-screen bg-soft-beige">
      {/* Hero Section */}
      <motion.section 
        className="bg-gradient-to-r from-earth-green to-olive-green py-24 section-padding relative overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <motion.h1 
              className="text-5xl font-bold mb-6 text-gold font-calligraphy"
              {...fadeIn}
            >
              Welcome to Agro L'onious
            </motion.h1>
            <motion.p 
              className="text-2xl mb-8 text-soft-beige font-semibold drop-shadow-lg"
              {...fadeIn}
              transition={{ delay: 0.2 }}
            >
              Cultivating Nature's Finest Ingredients for Beauty and Wellness
            </motion.p>
            <motion.div {...fadeIn} transition={{ delay: 0.4 }}>
              <Button asChild size="lg" className="bg-rust-orange hover:bg-gold text-white transition-colors duration-300 btn-transition group">
                <NavLink to="/products" className="flex items-center">
                  Explore Our Products
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </NavLink>
              </Button>
            </motion.div>
          </div>
        </div>
        <div className="absolute inset-0 bg-earth-green opacity-20 pattern-leaves"></div>
      </motion.section>

      {/* Mission, Vision, Values Section */}
      <section className="py-20 bg-soft-beige section-padding">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "Our Mission", icon: <Leaf className="h-8 w-8 mb-4 text-earth-green" />, content: "To provide the highest quality natural ingredients for the beauty and wellness industry, sourced responsibly from the heart of Turkey." },
              { title: "Our Vision", icon: <Shield className="h-8 w-8 mb-4 text-earth-green" />, content: "To be the leading supplier of premium Turkish botanicals, recognized globally for our commitment to quality, sustainability, and innovation." },
              { title: "Our Values", icon: <Recycle className="h-8 w-8 mb-4 text-earth-green" />, content: "Integrity, Sustainability, Quality, Innovation, and Customer-Centric Approach guide everything we do at Agro L'onious." }
            ].map((item, index) => (
              <motion.div 
                key={index}
                className="text-center bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 card-padding transform hover:-translate-y-1"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
              >
                {item.icon}
                <h2 className="text-2xl font-semibold mb-4 text-earth-green">{item.title}</h2>
                <p className="text-dark-gray">{item.content}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Journey Section */}
      <section className="py-20 bg-white section-padding">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-earth-green">Our Journey</h2>
          <div className="max-w-3xl mx-auto">
            <ul className="space-y-6">
              {[
                { year: "2010", event: "Agro L'onious founded in Istanbul, Turkey" },
                { year: "2015", event: "Expanded product line to include Black Cumin Seed and Sumac" },
                { year: "2018", event: "Achieved organic certification for all products" },
                { year: "2020", event: "Launched international distribution network" },
                { year: "2023", event: "Celebrating over a decade of excellence in natural ingredients" }
              ].map((item, index) => (
                <motion.li 
                  key={index}
                  className="flex items-center bg-soft-beige p-6 rounded-lg shadow-sm"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="bg-gold rounded-full p-3 mr-6 flex-shrink-0">
                    <span className="text-earth-green font-bold">{item.year}</span>
                  </div>
                  <p className="text-dark-gray flex-grow">{item.event}</p>
                </motion.li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;