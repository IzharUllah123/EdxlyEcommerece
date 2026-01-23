import Hero from '@/components/Hero'
import ServiceGrid from "@/components/ServiceGrid";
import WebsiteMakeover from '@/components/WebsiteMakeover'
import WhyChooseUs from '@/components/WhyChooseUs'
import FinalCTA from '@/components/FinalCTA'
import TestimonialCarousel from '@/components/TestimonialCarousel'
import AboutAndArticles from '@/components/AboutAndArticles'
import AboutUs from '@/components/AboutUS';

export default function Home() {
  return (
    <>
      <Hero />
      <AboutUs />
      <ServiceGrid />
      <WebsiteMakeover />
      <WhyChooseUs />
      <FinalCTA />
      <TestimonialCarousel />
      <AboutAndArticles />
    </>
  )
}