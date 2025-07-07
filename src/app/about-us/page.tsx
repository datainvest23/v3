import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function AboutUsPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-primary/5 py-20 md:py-32">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-primary mb-4 tracking-tight">
            We Built the Agency We Wished Existed.
          </h1>
          <p className="max-w-3xl mx-auto text-lg text-muted-foreground">
            SYM was founded by business leaders who were frustrated by the persistent friction between brilliant strategy and flawed execution. We knew there had to be a better way.
          </p>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
                <Image 
                    src="https://placehold.co/800x600.png"
                    alt="SYM team collaborating"
                    width={800}
                    height={600}
                    data-ai-hint="team collaboration"
                    className="rounded-lg shadow-xl"
                />
            </div>
            <div className="text-left">
              <h2 className="text-3xl font-bold mb-4">Our Story</h2>
              <p className="text-muted-foreground text-lg mb-4">
                SYM is a next-generation marketing agency built for the speed of modern business. We were founded to solve one of the most persistent challenges for leadership: the costly delay and friction between a strategic idea and its flawless implementation.
              </p>
              <p className="text-muted-foreground text-lg">
                For CEOs and decision-makers, this means an end to missed deadlines, misaligned creative, and ambiguous results. We provide a seamless, reliable system that turns your vision into tangible market impact—with the speed and precision you expect.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Statement Section */}
      <section className="bg-primary text-primary-foreground py-20 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Mission</h2>
          <p className="max-w-4xl mx-auto text-lg text-primary-foreground/80 mb-8">
            To empower executive leaders by closing the critical gap between strategic vision and market execution. We fuse real-time business intelligence with AI-powered automation to deliver precisely the right marketing assets—on time, on brief, and on budget—ensuring great ideas achieve their full market impact without delay.
          </p>
           <Button asChild size="lg" variant="secondary">
              <Link href="/why-sym">Discover the SYM Advantage <ArrowRight className="ml-2 h-5 w-5" /></Link>
            </Button>
        </div>
      </section>
    </div>
  );
}
