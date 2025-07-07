import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { BarChartIcon, BrainCircuitIcon, TargetIcon, ArrowRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-primary/5 py-20 md:py-32">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-primary mb-4 tracking-tight">
            End the Execution Gap.
            <br />
            Turn Strategy into Market Impact, Instantly.
          </h1>
          <p className="text-2xl text-primary/90 mb-4 font-headline">Intelligence Accelerated. Execution Perfected.</p>
          <p className="max-w-3xl mx-auto text-lg text-muted-foreground mb-8">
            SYM is the first marketing agency designed for the speed of leadership. We integrate real-time business intelligence with a powerful AI engine to close the costly gap between your vision and its flawless implementation.
          </p>
          <div className="flex justify-center gap-4">
            <Button asChild size="lg">
              <Link href="/how-it-works">See How It Works <ArrowRight className="ml-2 h-5 w-5" /></Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href="/contact">Schedule a Consultation</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Problem/Solution Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">The Distance Between Insight and Impact is No Longer Weeks. It's Hours.</h2>
          <p className="max-w-4xl mx-auto text-muted-foreground text-lg">
            In a world of fleeting opportunities, the delay between a strategic idea and its execution is a critical point of failure. Missed deadlines, misaligned creative, and ambiguous results are symptoms of a broken model. We built SYM to fix it, providing a seamless system that turns your vision into tangible results with unparalleled speed and precision.
          </p>
        </div>
      </section>

      {/* Core Pillars Section */}
      <section className="py-16 md:py-24 bg-primary/5">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">A New Agency Model</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center">
              <CardHeader>
                <div className="mx-auto bg-primary/10 rounded-full p-3 w-fit mb-4">
                  <BarChartIcon className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="font-headline">Real-Time Intelligence</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">We replace static quarterly plans with continuous strategy calibration based on live market data.</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <div className="mx-auto bg-primary/10 rounded-full p-3 w-fit mb-4">
                  <BrainCircuitIcon className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="font-headline">AI-Powered Execution</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">We generate high-impact, on-brand content and campaigns at a scale and speed that traditional agencies cannot match.</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <div className="mx-auto bg-primary/10 rounded-full p-3 w-fit mb-4">
                  <TargetIcon className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="font-headline">Executive-First Delivery</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Our entire process, from dashboards to deliverables, is designed to respect the C-suite's time and focus on the metrics that matter.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      
      {/* Visual Section: Integrated Approach */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="text-left">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">From Data to Deliverable, Seamlessly.</h2>
              <p className="text-muted-foreground text-lg mb-4">
                Our model is built on intelligence and automation. We provide a single, AI-accelerated pipeline from insight to impact, eliminating the friction and manual handoffs that cause delays.
              </p>
              <Button asChild>
                <Link href="/how-it-works">Explore Our Process</Link>
              </Button>
            </div>
            <div>
              <Image 
                src="https://placehold.co/600x800.png" 
                alt="Integrated Service Pyramid" 
                width={600} 
                height={800}
                data-ai-hint="pyramid chart"
                className="rounded-lg shadow-xl mx-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 md:py-32 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Close the Gap?</h2>
          <p className="max-w-2xl mx-auto text-lg text-primary-foreground/80 mb-8">
            Stop waiting for marketing to catch up to your business. Let's accelerate your success.
          </p>
          <Button asChild size="lg" variant="secondary">
            <Link href="/contact">Get Started</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
