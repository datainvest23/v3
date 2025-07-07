import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { SERVICES } from "@/lib/constants";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function ServicesPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-primary/5 py-20 md:py-32">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-primary mb-4 tracking-tight">
            An Integrated System for Flawless Execution.
          </h1>
          <p className="max-w-3xl mx-auto text-lg text-muted-foreground">
            Our services are designed to work together as a single, cohesive system, eliminating the gaps where value is lost. Explore our core capabilities below.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SERVICES.map((service) => (
              <Card key={service.slug} className="flex flex-col">
                <CardHeader>
                  <CardTitle className="font-headline">{service.title}</CardTitle>
                  <CardDescription>{service.shortDescription}</CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  {/* Can add more details here if needed */}
                </CardContent>
                <CardFooter>
                  <Button asChild variant="outline" className="w-full">
                    <Link href={`/services/${service.slug}`}>Learn More <ArrowRight className="ml-2 h-4 w-4" /></Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
