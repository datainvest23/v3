"use client"

import { HeroSection } from "@/components/ui/hero-section"
import { Icons } from "@/components/ui/icons"

export function HeroSectionDemo() {
  return (
    <HeroSection
      badge={{
        text: "Introducing our new components",
        action: {
          text: "Learn more",
          href: "/docs",
        },
      }}
      title="Build faster with beautiful components"
      description="Premium UI components built with React and Tailwind CSS. Save time and ship your next project faster with our ready-to-use components."
      actions={[
        {
          text: "Get Started",
          href: "/docs/getting-started",
          variant: "default",
        },
        {
          text: "GitHub",
          href: "https://github.com/your-repo",
          variant: "glow",
          icon: <Icons.gitHub className="h-5 w-5" />,
        },
      ]}
      image={{
        light: "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=1248&h=765&fit=crop&crop=entropy&auto=format&q=80",
        dark: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=1248&h=765&fit=crop&crop=entropy&auto=format&q=80",
        alt: "UI Components Preview",
      }}
    />
  )
} 