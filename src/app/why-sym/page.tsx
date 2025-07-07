import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Zap, Target, GaugeCircle, ShieldCheck } from "lucide-react";
import Link from "next/link";

export default function WhySymPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-primary/5 py-20 md:py-32">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-primary mb-4 tracking-tight">
            Marketing That Moves at the Pace of Business.
          </h1>
          <p className="max-w-3xl mx-auto text-lg text-muted-foreground">
            Traditional agencies deliver data without direction. Consultants deliver direction without execution. SYM delivers both in a single, accelerated pipeline.
          </p>
        </div>
      </section>

      {/* Differentiation Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">The SYM Advantage</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="border-primary/20 bg-primary/5">
              <CardHeader>
                <Target className="h-8 w-8 text-primary mb-2"/>
                <CardTitle className="font-headline text-lg">Precision-Matched Deliverables</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">We replace subjective creative cycles with data-driven asset generation. Your deliverables are always boardroom-ready and perfectly aligned with your vision.</p>
              </CardContent>
            </Card>
            <Card className="border-primary/20 bg-primary/5">
              <CardHeader>
                <GaugeCircle className="h-8 w-8 text-primary mb-2"/>
                <CardTitle className="font-headline text-lg">Real-Time Intelligence</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">We swap static quarterly plans for continuous strategy calibration based on live market data, keeping you perpetually ahead of market shifts.</p>
              </CardContent>
            </Card>
            <Card className="border-primary/20 bg-primary/5">
              <CardHeader>
                <Zap className="h-8 w-8 text-primary mb-2"/>
                <CardTitle className="font-headline text-lg">Guaranteed Speed & Reliability</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">We automate the entire execution workflow, compressing project timelines from months to hours and delivering on guaranteed SLAs.</p>
              </CardContent>
            </Card>
            <Card className="border-primary/20 bg-primary/5">
              <CardHeader>
                <ShieldCheck className="h-8 w-8 text-primary mb-2"/>
                <CardTitle className="font-headline text-lg">Executive-First Design</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">Our entire process, from dashboards to delivery, is designed to respect the C-suite's time and focus on the metrics that drive growth.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Value Proposition Section */}
      <section className="bg-primary text-primary-foreground py-20 md:py-24">
        <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Promise to You</h2>
            <p className="max-w-4xl mx-auto text-lg text-primary-foreground/80 mb-8">
                With SYM, you never wait for what you need. Every insight, every asset, and every result is delivered with the speed, reliability, and relevance that modern leaders demand. We don't just provide services—we transform how you approach marketing execution.
            </p>
            <Button asChild size="lg" variant="secondary">
                <Link href="/contact">Schedule a Consultation</Link>
            </Button>
        </div>
      </section>
    </div>
  );
}
