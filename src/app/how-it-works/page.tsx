import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle2 } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function HowItWorksPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-primary/5 py-20 md:py-32">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-primary mb-4 tracking-tight">
            Your Strategy, Executed Flawlessly.
          </h1>
          <p className="max-w-3xl mx-auto text-lg text-muted-foreground">
            Our model is designed for clarity, speed, and results. We eliminate the gaps where value is typically lost.
          </p>
        </div>
      </section>

      {/* The SYM Integrated Service Pyramid Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">A Foundation of Intelligence</h2>
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="flex justify-center">
              <Image 
                src="https://placehold.co/600x800.png"
                alt="Integrated Service Pyramid"
                width={500}
                height={700}
                data-ai-hint="pyramid chart"
                className="rounded-lg shadow-2xl"
              />
            </div>
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <CheckCircle2 className="h-8 w-8 text-primary mt-1 shrink-0"/>
                <div>
                  <h3 className="text-xl font-bold font-headline mb-1">Layer 1: Data-Validated Strategy</h3>
                  <p className="text-muted-foreground">It all starts with data. We use predictive modeling and real-time market analysis to ensure your strategy is built on a rock-solid foundation.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <CheckCircle2 className="h-8 w-8 text-primary mt-1 shrink-0"/>
                <div>
                  <h3 className="text-xl font-bold font-headline mb-1">Layer 2: AI-Generated Assets</h3>
                  <p className="text-muted-foreground">Our AI engine takes your strategic objectives and generates on-brand, high-performance assets—copy, visuals, and multimedia—at scale.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <CheckCircle2 className="h-8 w-8 text-primary mt-1 shrink-0"/>
                <div>
                  <h3 className="text-xl font-bold font-headline mb-1">Layer 3: Automated Workflows</h3>
                  <p className="text-muted-foreground">We manage multi-channel campaigns through a sophisticated, automated workflow, ensuring seamless execution from concept to launch.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <CheckCircle2 className="h-8 w-8 text-primary mt-1 shrink-0"/>
                <div>
                  <h3 className="text-xl font-bold font-headline mb-1">Layer 4: Real-Time KPI Dashboard</h3>
                  <p className="text-muted-foreground">You get a real-time dashboard for strategic KPIs, giving you complete visibility and control over performance and ROI.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Proactive-to-Reactive Spectrum Section */}
      <section className="bg-primary/5 py-16 md:py-24">
        <div className="container mx-auto px-4">
           <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Full-Spectrum Marketing, Managed Intelligently.</h2>
           <p className="text-lg text-muted-foreground text-center max-w-3xl mx-auto mb-12">
            From proactive strategy development and customer intelligence to reactive crisis management, our integrated system covers every marketing need. By managing the full spectrum, we ensure your brand is always prepared, consistent, and moving forward.
           </p>
           <div className="flex justify-center">
             <Image 
                src="https://placehold.co/1200x400.png"
                alt="Marketing Services Spectrum"
                width={1200}
                height={400}
                data-ai-hint="spectrum graph"
                className="rounded-lg shadow-xl"
              />
           </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">See Our Services in Action.</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto mb-8">Explore our core capabilities and see how they form a single, cohesive system for growth.</p>
            <Button asChild size="lg">
                <Link href="/services">Explore Services</Link>
            </Button>
        </div>
      </section>
    </div>
  );
}
