import { Button } from "@/components/ui/button";
import { NavLink } from "react-router-dom";

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen bg-soft-beige font-sans">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-earth-green to-olive-green section-padding">
        <div className="content-max-width">
          <div className="max-w-3xl mx-auto text-center text-spacing">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gold">Welcome to Agro L'onious</h1>
            <p className="text-2xl mb-8 text-white font-semibold drop-shadow-lg">Cultivating Nature's Finest Ingredients for Beauty and Wellness</p>
            <Button asChild size="lg" className="bg-rust-orange hover:bg-gold text-white transition-colors duration-300 hover-grow">
              <NavLink to="/products">
                Explore Our Products
              </NavLink>
            </Button>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values Section */}
      <section className="section-padding bg-soft-beige">
        <div className="content-max-width">
          <div className="grid md:grid-cols-3 gap-8">
            {['Mission', 'Vision', 'Values'].map((title) => (
              <div key={title} className="text-center bg-white p-6 rounded-lg shadow-md hover-lift">
                <h2 className="text-2xl font-semibold mb-4 text-earth-green">{`Our ${title}`}</h2>
                <p className="text-dark-gray">
                  {title === 'Mission' && "To provide the highest quality natural ingredients for the beauty and wellness industry, sourced responsibly from the heart of Turkey."}
                  {title === 'Vision' && "To be the leading supplier of premium Turkish botanicals, recognized globally for our commitment to quality, sustainability, and innovation."}
                  {title === 'Values' && "Integrity, Sustainability, Quality, Innovation, and Customer-Centric Approach guide everything we do at Agro L'onious."}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Journey Section */}
      <section className="section-padding bg-white">
        <div className="content-max-width">
          <h2 className="text-3xl font-bold text-center mb-8 text-earth-green">Our Journey</h2>
          <div className="max-w-3xl mx-auto">
            <ul className="space-y-4">
              {[
                { year: '2010', event: 'Agro L'onious founded in Istanbul, Turkey' },
                { year: '2015', event: 'Expanded product line to include Black Cumin Seed and Sumac' },
                { year: '2018', event: 'Achieved organic certification for all products' },
                { year: '2020', event: 'Launched international distribution network' },
                { year: '2023', event: 'Celebrating over a decade of excellence in natural ingredients' }
              ].map(({ year, event }) => (
                <li key={year} className="flex items-center bg-soft-beige p-4 rounded-lg shadow-sm hover-lift">
                  <div className="bg-gold rounded-full p-2 mr-4"></div>
                  <p className="text-dark-gray"><strong className="text-brown">{year}:</strong> {event}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;