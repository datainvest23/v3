import { ContactForm } from "@/components/ContactForm";
import { Mail, Phone, MapPin } from "lucide-react";

export default function ContactPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-primary/5 py-20 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4 tracking-tight">
            Let's Accelerate Your Success.
          </h1>
          <p className="max-w-3xl mx-auto text-lg text-muted-foreground">
            Reach out to discover how SYM can close your execution gap and turn your strategic vision into market reality.
          </p>
        </div>
      </section>

      {/* Contact Form and Info Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-16">
            <div>
              <h2 className="text-3xl font-bold mb-6">Schedule My Consultation</h2>
              <ContactForm />
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-6">Contact Information</h2>
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <Mail className="h-6 w-6 text-primary" />
                  <a href="mailto:contact@sym-agency.com" className="text-lg hover:text-primary">contact@sym-agency.com</a>
                </div>
                <div className="flex items-center gap-4">
                  <Phone className="h-6 w-6 text-primary" />
                  <a href="tel:555-123-4567" className="text-lg hover:text-primary">(555) 123-4567</a>
                </div>
                <div className="flex items-center gap-4">
                  <MapPin className="h-6 w-6 text-primary" />
                  <p className="text-lg">123 Innovation Drive, Tech City, 10101</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
