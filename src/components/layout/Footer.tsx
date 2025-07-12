import { NAV_LINKS } from '@/lib/constants';
import Link from 'next/link';
import Logo from '@/components/Logo';
import { Facebook, Twitter, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="border-t bg-background">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <Logo />
            <p className="text-muted-foreground mt-4 text-sm">
              Intelligence Accelerated. Execution Perfected.
            </p>
          </div>
          <div className="md:col-span-3 grid grid-cols-2 md:grid-cols-3 gap-8">
            <div>
              <h4 className="font-headline font-semibold mb-4">Sitemap</h4>
              <ul className="space-y-2">
                {NAV_LINKS.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="text-muted-foreground hover:text-primary text-sm">
                      {link.label}
                    </Link>
                  </li>
                ))}
                <li>
                  <Link href="/contact" className="text-muted-foreground hover:text-primary text-sm">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-headline font-semibold mb-4">Contact Us</h4>
              <ul className="space-y-2 text-sm">
                <li className="text-muted-foreground">contact@SYMplify.digital</li>
                <li className="text-muted-foreground">(555) 123-4567</li>
                <li className="text-muted-foreground">123 Innovation Drive, Tech City</li>
              </ul>
            </div>
            <div>
              <h4 className="font-headline font-semibold mb-4">Follow Us</h4>
              <div className="flex space-x-4">
                <Link href="#" className="text-muted-foreground hover:text-primary">
                  <Twitter className="h-5 w-5" />
                </Link>
                <Link href="#" className="text-muted-foreground hover:text-primary">
                  <Linkedin className="h-5 w-5" />
                </Link>
                <Link href="#" className="text-muted-foreground hover:text-primary">
                  <Facebook className="h-5 w-5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} SYMplify. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
