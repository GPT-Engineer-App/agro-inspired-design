import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

const Contact = () => {
  return (
    <div className="container mx-auto px-4 py-16 bg-soft-beige">
      <h1 className="text-4xl font-bold mb-8 text-center text-earth-green">Contact Us</h1>
      
      <div className="grid md:grid-cols-2 gap-8">
        <Card className="bg-white">
          <CardHeader>
            <CardTitle className="text-2xl font-semibold text-earth-green">Contact Information</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="mb-4 text-dark-gray"><strong className="text-brown">Address:</strong> 123 Botanical Street, Istanbul, Turkey</p>
            <p className="mb-4 text-dark-gray"><strong className="text-brown">Phone:</strong> +90 (212) 555-1234</p>
            <p className="mb-4 text-dark-gray"><strong className="text-brown">Email:</strong> info@agrolonious.com</p>
            <p className="text-dark-gray"><strong className="text-brown">Business Hours:</strong> Monday - Friday, 9:00 AM - 5:00 PM (GMT+3)</p>
          </CardContent>
        </Card>
        
        <Card className="bg-white">
          <CardHeader>
            <CardTitle className="text-2xl font-semibold text-earth-green">Send Us a Message</CardTitle>
          </CardHeader>
          <CardContent>
            <form className="space-y-4">
              <div>
                <Label htmlFor="name" className="text-brown">Name</Label>
                <Input id="name" placeholder="Your Name" className="bg-soft-beige" />
              </div>
              <div>
                <Label htmlFor="email" className="text-brown">Email</Label>
                <Input id="email" type="email" placeholder="Your Email" className="bg-soft-beige" />
              </div>
              <div>
                <Label htmlFor="message" className="text-brown">Message</Label>
                <Textarea id="message" placeholder="Your Message" className="bg-soft-beige" />
              </div>
              <Button type="submit" className="w-full bg-rust-orange hover:bg-gold text-white">Send Message</Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Contact;