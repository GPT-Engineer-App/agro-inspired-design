import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const teamMembers = [
  {
    name: "Melis Akungor",
    role: "CEO & Founder",
    bio: "Melis leads Agro L'onious with passion and expertise, driving our mission to provide premium Turkish botanicals to the global market."
  },
  {
    name: "Bogdan Iordache",
    role: "Head of Software Development",
    bio: "Bogdan ensures our digital presence and internal systems are cutting-edge, supporting our commitment to innovation and efficiency."
  },
  {
    name: "Zeynep Kaya",
    role: "Head of Research & Development",
    bio: "Zeynep's innovative approach to product development has been key to our success in creating high-quality natural ingredients."
  },
  {
    name: "Mehmet Demir",
    role: "Operations Manager",
    bio: "Mehmet ensures the smooth running of our production facilities, maintaining the highest standards of quality and efficiency."
  },
  {
    name: "Tofi",
    role: "Company Dog",
    bio: "Tofi brings joy and comfort to our team, embodying our values of warmth and companionship in the workplace."
  }
];

const AboutUs = () => {
  return (
    <div className="container mx-auto px-4 py-16 bg-soft-beige">
      <h1 className="text-4xl font-bold mb-8 text-center text-earth-green">About Agro L'onious</h1>
      
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-4 text-olive-green">Company Background</h2>
        <p className="mb-4 text-dark-gray">
          Founded in 2010, Agro L'onious has established itself as a leading supplier of premium Turkish botanicals for the beauty and wellness industry. Our commitment to quality, sustainability, and innovation has made us a trusted partner for companies worldwide.
        </p>
        <p className="text-dark-gray">
          Based in the heart of Istanbul, we leverage Turkey's rich botanical heritage and combine it with modern scientific research to deliver exceptional natural ingredients. Our products, including Turkish Anise, Black Cumin Seed, and Sumac, are sourced from the finest agricultural regions in Turkey and processed using state-of-the-art techniques to preserve their natural properties.
        </p>
      </section>
      
      <section>
        <h2 className="text-2xl font-semibold mb-6 text-olive-green">Our Team</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {teamMembers.map((member, index) => (
            <Card key={index} className="bg-white">
              <CardHeader className="bg-earth-green text-white">
                <CardTitle>{member.name}</CardTitle>
                <p className="text-sm">{member.role}</p>
              </CardHeader>
              <CardContent>
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