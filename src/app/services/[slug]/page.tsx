import { notFound } from 'next/navigation';
import { SERVICES } from '@/lib/constants';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle } from 'lucide-react';

type ServicePageProps = {
  params: {
    slug: string;
  };
};

export async function generateStaticParams() {
  return SERVICES.map((service) => ({
    slug: service.slug,
  }));
}

export default function ServicePage({ params }: ServicePageProps) {
  const { slug } = params;
  const service = SERVICES.find((s) => s.slug === slug);

  if (!service) {
    notFound();
  }

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-primary/5 py-20 md:py-24">
        <div className="container mx-auto px-4">
          <Link href="/services" className="text-sm text-primary hover:underline mb-4 inline-block">
            &larr; Back to all services
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4 tracking-tight">
            {service.title}
          </h1>
          <p className="max-w-3xl text-lg text-muted-foreground">
            {service.description}
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-12">
            {/* Key Benefits */}
            <div className="md:col-span-1">
              <h2 className="text-2xl font-bold mb-4">Key Benefits</h2>
              <ul className="space-y-3">
                {service.benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-1 shrink-0" />
                    <span className="text-muted-foreground">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Executive Value */}
            <div className="md:col-span-2">
                <Card className="bg-primary/5 border-primary/20">
                    <CardHeader>
                        <CardTitle className="font-headline text-primary">What This Means For You</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="text-lg text-muted-foreground">
                            {service.executiveValue}
                        </p>
                    </CardContent>
                </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gray-100 dark:bg-gray-800 py-20">
        <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to build your strategy on a foundation of data?</h2>
            <Button asChild size="lg">
                <Link href="/contact">Contact Us</Link>
            </Button>
        </div>
      </section>
    </div>
  );
}
