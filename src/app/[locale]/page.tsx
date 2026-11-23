import React from "react";
import { HeroSection } from "@/components/home/HeroSection";
import { TwoTrackSection } from "@/components/home/TwoTrackSection";
import { SolutionsShowcase } from "@/components/home/SolutionsShowcase";
import { ProductsShowcase } from "@/components/home/ProductsShowcase";
import { RoiCalculator } from "@/components/home/RoiCalculator";
import { HowWeWork } from "@/components/home/HowWeWork";
import { SecurityTrustBar } from "@/components/home/SecurityTrustBar";
import { BeforeAfterSection } from "@/components/home/BeforeAfterSection";
import { FinalCtaSection } from "@/components/home/FinalCtaSection";

export default function HomePage() {
  return (
    <>
      {/* 1. Hero Section with Live React/SVG AI Workflow Diagram */}
      <HeroSection />

      {/* 2. Two-Track Crossroads (Custom Engineering vs Ready Products) */}
      <TwoTrackSection />

      {/* 3. Core Custom AI Solutions */}
      <SolutionsShowcase />

      {/* 4. Ready-to-Deploy Modular Products */}
      <ProductsShowcase />

      {/* 5. Interactive AI ROI Calculator (Lead Magnet) */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <RoiCalculator />
        </div>
      </section>

      {/* 6. Execution Steps, Security Trust Bar & Before/After Proof */}
      <HowWeWork />
      <SecurityTrustBar />
      <BeforeAfterSection />

      {/* 7. Final Strategic Consultation CTA */}
      <FinalCtaSection />
    </>
  );
}
