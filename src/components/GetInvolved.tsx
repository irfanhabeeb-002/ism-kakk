
import { Button } from "@/components/ui/button";
import { Users, Heart, BookOpen, MessageCircle } from "lucide-react";

const GetInvolved = () => {
  const handleWhatsAppContact = () => {
    // Replace with actual WhatsApp number
    const phoneNumber = "+919876543210"; // Replace with actual ISM Kakkanad WhatsApp number
    const message = "Hello, I'm interested in joining ISM Kakkanad programs. Please provide me with more information.";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section id="get-involved" className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-blue-600 to-purple-700 text-white">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">
            Connect With Us
          </h2>
          <div className="w-24 h-1 bg-white mx-auto mb-6 sm:mb-8"></div>
          <p className="text-lg sm:text-xl text-blue-100 max-w-3xl mx-auto px-4">
            Ready to be part of our community? Join us in our mission to empower youth through faith, knowledge, and service.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-12">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 sm:p-8 text-center hover:bg-white/20 transition-all duration-300">
            <Users className="w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-4 sm:mb-6 text-blue-200" />
            <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3">Join Programs</h3>
            <p className="text-sm sm:text-base text-blue-100">Participate in our regular educational and spiritual programs</p>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 sm:p-8 text-center hover:bg-white/20 transition-all duration-300">
            <Heart className="w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-4 sm:mb-6 text-blue-200" />
            <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3">Volunteer</h3>
            <p className="text-sm sm:text-base text-blue-100">Contribute to community service and dawah activities</p>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 sm:p-8 text-center hover:bg-white/20 transition-all duration-300">
            <BookOpen className="w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-4 sm:mb-6 text-blue-200" />
            <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3">Learn & Grow</h3>
            <p className="text-sm sm:text-base text-blue-100">Enhance your knowledge through our educational initiatives</p>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 sm:p-8 text-center hover:bg-white/20 transition-all duration-300">
            <MessageCircle className="w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-4 sm:mb-6 text-blue-200" />
            <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3">Stay Connected</h3>
            <p className="text-sm sm:text-base text-blue-100">Join our community and stay updated with activities</p>
          </div>
        </div>
        
        <div className="text-center">
          <Button 
            onClick={handleWhatsAppContact}
            size="lg" 
            className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 text-lg font-semibold rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
          >
            <svg className="w-6 h-6 mr-3" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.570-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.688"/>
            </svg>
            Connect on WhatsApp
          </Button>
          <p className="text-blue-200 mt-4 text-sm">
            Get in touch with us directly and join our growing community
          </p>
        </div>
      </div>
    </section>
  );
};

export default GetInvolved;
