import React from 'react';
import { Hero } from '../components/home/Hero';
import { CategoryShowcase } from '../components/home/CategoryShowcase';
import { FeaturedShowcase } from '../components/home/FeaturedShowcase';
import { StorySection } from '../components/home/StorySection';
import { FabricGuideSection } from '../components/home/FabricGuideSection';
import { TestimonialsSection } from '../components/home/TestimonialsSection';
import { FaqSection } from '../components/home/FaqSection';
import { InstagramSection } from '../components/home/InstagramSection';

export default function HomePage() {
  return (
    <>
      <Hero />
      <CategoryShowcase />
      <FeaturedShowcase />
      <StorySection />
      <FabricGuideSection />
      <TestimonialsSection />
      <FaqSection />
      <InstagramSection />
    </>
  );
}
