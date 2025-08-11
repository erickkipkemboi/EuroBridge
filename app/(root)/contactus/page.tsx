import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";
import Content3 from "@/app/components/Content3";

const ContactUs = () => {
  return (
    <>
      {/* Hero Section */}
      <div className="relative">
        <Content3 />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
          <h3 className="text-4xl font-bold">Contact Us</h3>
          <p className="text-xl">Home / Contact Us</p>
        </div>
      </div>

      {/* Contact + Map Section */}
      <div className="flex justify-center items-center py-10 bg-gray-50">
        <div className="max-w-6xl w-full px-6 grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* Left Column - Contact Info + Form */}
          <Card className="bg-white shadow-lg rounded-lg">
            <CardHeader className="text-center py-5">
              <h2 className="text-3xl font-semibold text-gray-800">Get in Touch</h2>
              <p className="text-gray-500 mt-2">We would love to hear from you!</p>
            </CardHeader>

            <CardContent className="space-y-8 p-8">
              {/* Contact Details */}
              <div className="space-y-4">
                <div className="flex items-center space-x-3 text-gray-700">
                  <FaEnvelope className="w-5 h-5" />
                  <span>contact@company.com</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-700">
                  <FaPhone className="w-5 h-5" />
                  <span>+254 793 042 033</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-700">
                  <FaMapMarkerAlt className="w-5 h-5" />
                  <span>1234 Main St, Nairobi</span>
                </div>
              </div>

              {/* Contact Form */}
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                    Your Name
                  </label>
                  <Input id="name" placeholder="Enter your full name" required />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                    Your Email
                  </label>
                  <Input id="email" type="email" placeholder="Enter your email" required />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                    Your Message
                  </label>
                  <Textarea id="message" placeholder="Write your message here" rows={6} required />
                </div>
                <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Right Column - Map */}
          <div className="w-full h-[600px] border rounded-lg overflow-hidden shadow-md">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d722.463242920518!2d35.278109029316326!3d0.5161094587720638!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1sen!2ske!4v1754738128653!5m2!1sen!2ske"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactUs;
