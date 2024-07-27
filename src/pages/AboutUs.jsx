import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, Building2, Dog } from "lucide-react";

const teamMembers = [
  {
    name: "Melis Akungor",
    role: "CEO & Founder",
    bio: "Melis leads Agro L'onious with passion and expertise, driving our mission to provide premium Turkish botanicals to the global market.",
    icon: <Users className="h-6 w-6 text-earth-green" />
  },
  {
    name: "Bogdan Iordache",
    role: "Head of Software Development",
    bio: "Bogdan ensures our digital presence and internal systems are cutting-edge, supporting our commitment to innovation and efficiency.",
    icon: <Building2 className="h-6 w-6 text-earth-green" />
  },
  {
    name: "Tofi",
    role: "Company Dog",
    bio: "Tofi brings joy and comfort to our team, embodying our values of warmth and companionship in the workplace.",
    icon: <Dog className="h-6 w-6 text-earth-green" />
  }
];

const AboutUs = () => {
  return (
    <div className="container mx-auto px-4 py-16 bg-soft-beige">
      <h1 className="text-4xl font-bold mb-8 text-center text-earth-green">
        About Agro L'onious
      </h1>
      
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-4 text-olive-green flex items-center">
          <Building2 className="h-6 w-6 mr-2 text-earth-green" />
          Company Background
        </h2>
        <p className="mb-4 text-dark-gray">
          Founded in 2010, Agro L'onious has established itself as a leading supplier of premium Turkish botanicals for the beauty and wellness industry. Our commitment to quality, sustainability, and innovation has made us a trusted partner for companies worldwide.
        </p>
        <p className="text-dark-gray">
          Based in the heart of Istanbul, we leverage Turkey's rich botanical heritage and combine it with modern scientific research to deliver exceptional natural ingredients. Our products, including Turkish Anise, Black Cumin Seed, and Sumac, are sourced from the finest agricultural regions in Turkey and processed using state-of-the-art techniques to preserve their natural properties.
        </p>
      </section>
      
      <section>
        <h2 className="text-2xl font-semibold mb-6 text-olive-green flex items-center">
          <Users className="h-6 w-6 mr-2 text-earth-green" />
          Our Team
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          {teamMembers.map((member, index) => (
            <Card key={index} className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader className="bg-earth-green text-white">
                <CardTitle className="flex items-center">
                  {member.icon}
                  <span className="ml-2">{member.name}</span>
                </CardTitle>
                <p className="text-sm">{member.role}</p>
              </CardHeader>
              <CardContent className="mt-4">
                <p className="text-dark-gray">{member.bio}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
};

export default AboutUs;