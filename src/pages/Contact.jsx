import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { motion } from "framer-motion";

const Contact = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 }
  };

  return (
    <div className="container mx-auto px-4 py-16 bg-soft-beige section-padding">
      <motion.h1 
        className="text-4xl font-bold mb-12 text-center text-earth-green"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Contact Us
      </motion.h1>
      
      <div className="grid md:grid-cols-2 gap-8">
        <motion.div {...fadeInUp}>
          <Card className="bg-white shadow-lg card-padding h-full">
            <CardHeader>
              <CardTitle className="text-2xl font-semibold text-earth-green">Contact Information</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="flex items-center">
                  <MapPin className="h-6 w-6 mr-4 text-brown" />
                  <div>
                    <p className="font-semibold text-brown">Address:</p>
                    <p className="text-dark-gray">123 Botanical Street, Istanbul, Turkey</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <Phone className="h-6 w-6 mr-4 text-brown" />
                  <div>
                    <p className="font-semibold text-brown">Phone:</p>
                    <p className="text-dark-gray">+90 (212) 555-1234</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <Mail className="h-6 w-6 mr-4 text-brown" />
                  <div>
                    <p className="font-semibold text-brown">Email:</p>
                    <p className="text-dark-gray">info@agrolonious.com</p>
                  </div>
                </div>
                <div>
                  <p className="font-semibold text-brown">Business Hours:</p>
                  <p className="text-dark-gray">Monday - Friday, 9:00 AM - 5:00 PM (GMT+3)</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
        
        <motion.div {...fadeInUp} transition={{ delay: 0.2 }}>
          <Card className="bg-white shadow-lg card-padding">
            <CardHeader>
              <CardTitle className="text-2xl font-semibold text-earth-green">Send Us a Message</CardTitle>
            </CardHeader>
            <CardContent>
              <form className="space-y-6">
                <div>
                  <Label htmlFor="name" className="text-brown">Name</Label>
                  <Input id="name" placeholder="Your Name" className="bg-soft-beige mt-1" />
                </div>
                <div>
                  <Label htmlFor="email" className="text-brown">Email</Label>
                  <Input id="email" type="email" placeholder="Your Email" className="bg-soft-beige mt-1" />
                </div>
                <div>
                  <Label htmlFor="message" className="text-brown">Message</Label>
                  <Textarea id="message" placeholder="Your Message" className="bg-soft-beige mt-1" rows={4} />
                </div>
                <Button type="submit" className="w-full bg-rust-orange hover:bg-gold text-white transition-colors duration-300 btn-transition group">
                  <span>Send Message</span>
                  <Send className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </form>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;