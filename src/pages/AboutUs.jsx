import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Award, Users, Leaf } from "lucide-react";

const teamMembers = [
  {
    name: "Melis Akungor",
    role: "CEO & Founder",
    bio: "Melis leads Agro L'onious with passion and expertise, driving our mission to provide premium Turkish botanicals to the global market.",
    icon: <Award className="h-12 w-12 mb-4 text-gold" />
  },
  {
    name: "Bogdan Iordache",
    role: "Head of Software Development",
    bio: "Bogdan ensures our digital presence and internal systems are cutting-edge, supporting our commitment to innovation and efficiency.",
    icon: <Users className="h-12 w-12 mb-4 text-gold" />
  },
  {
    name: "Tofi",
    role: "Company Dog",
    bio: "Tofi brings joy and comfort to our team, embodying our values of warmth and companionship in the workplace.",
    icon: <Leaf className="h-12 w-12 mb-4 text-gold" />
  }
];

const AboutUs = () => {
  return (
    <div className="container mx-auto px-4 py-16 bg-soft-beige">
      <motion.h1 
        className="text-4xl font-bold mb-12 text-center text-earth-green"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        About Agro L'onious
      </motion.h1>
      
      <motion.section 
        className="mb-16"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        <h2 className="text-2xl font-semibold mb-6 text-olive-green">Company Background</h2>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <p className="mb-4 text-dark-gray leading-relaxed">
            Founded in 2010, Agro L'onious has established itself as a leading supplier of premium Turkish botanicals for the beauty and wellness industry. Our commitment to quality, sustainability, and innovation has made us a trusted partner for companies worldwide.
          </p>
          <p className="text-dark-gray leading-relaxed">
            Based in the heart of Istanbul, we leverage Turkey's rich botanical heritage and combine it with modern scientific research to deliver exceptional natural ingredients. Our products, including Turkish Anise, Black Cumin Seed, and Sumac, are sourced from the finest agricultural regions in Turkey and processed using state-of-the-art techniques to preserve their natural properties.
          </p>
        </div>
      </motion.section>
      
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.5 }}
      >
        <h2 className="text-2xl font-semibold mb-8 text-olive-green">Our Team</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 * index, duration: 0.5 }}
            >
              <Card className="bg-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <CardHeader className="bg-earth-green text-white text-center py-6">
                  <div className="flex justify-center">
                    {member.icon}
                  </div>
                  <CardTitle>{member.name}</CardTitle>
                  <p className="text-sm text-gold">{member.role}</p>
                </CardHeader>
                <CardContent className="mt-4">
                  <p className="text-dark-gray text-center">{member.bio}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.section>
    </div>
  );
};

export default AboutUs;