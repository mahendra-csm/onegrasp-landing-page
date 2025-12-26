import { Mail, Phone, MapPin, Globe } from "lucide-react";

const Footer = () => {
  const services = [
    "Career Counselling",
    "Psychometric Tests",
    "Study Abroad",
    "Indian Degrees",
    "Certifications",
    "Scientific Events",
    "Startup Support"
  ];

  const quickLinks = [
    { label: "About Us", href: "#" },
    { label: "Services", href: "#services" },
    { label: "Student Dashboard", href: "#dashboard" },
    { label: "Partner Universities", href: "#partners" },
    { label: "Contact Us", href: "#contact" },
  ];

  return (
    <footer className="bg-foreground text-background">
      <div className="container-custom py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="space-y-6">
            <div>
              <span className="text-3xl font-display font-extrabold">
                <span className="text-primary">One</span>
                <span className="text-background">Grasp</span>
              </span>
            </div>
            <p className="text-background/70 text-sm leading-relaxed">
              India's one-stop future-proof career and education ecosystem — 
              from Classroom to Boardroom. Serving since 2010.
            </p>
            <div className="flex items-center gap-2 text-sm text-background/70">
              <MapPin className="h-4 w-4 text-primary" />
              <span>4th Floor, MN Capital, Kokapet, Hyderabad</span>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-display font-bold text-background mb-6">Our Services</h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <a href="#" className="text-sm text-background/70 hover:text-primary transition-colors">
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-bold text-background mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-sm text-background/70 hover:text-primary transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-bold text-background mb-6">Contact Us</h4>
            <div className="space-y-4">
              <a href="tel:+918977760442" className="flex items-center gap-3 text-sm text-background/70 hover:text-primary transition-colors">
                <Phone className="h-4 w-4" />
                +91 89777 60442 / 43
              </a>
              <a href="mailto:support@onegrasp.com" className="flex items-center gap-3 text-sm text-background/70 hover:text-primary transition-colors">
                <Mail className="h-4 w-4" />
                support@onegrasp.com
              </a>
              <a href="https://onegrasp.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-sm text-background/70 hover:text-primary transition-colors">
                <Globe className="h-4 w-4" />
                onegrasp.com
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-background/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-background/50">
              © {new Date().getFullYear()} OneGrasp. All rights reserved.
            </p>
            <div className="flex gap-6">
              <a href="#" className="text-sm text-background/50 hover:text-primary transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-sm text-background/50 hover:text-primary transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
