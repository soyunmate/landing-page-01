import './App.css'
import NavBar from './components/NavBar/NavBar'
import HeroSection from './components/HeroSection/HeroSection'
import FeatureSection from './components/FeatureSection/FeatureSection'
import TestimonialSection from './components/TestimonialSection/TestimonialSection'
import PricingSection from './components/PricingSection/PricingSection'
import Footer from './components/Footer/Footer'
import CtaSection from './components/CTASection/CTASection'
import OverviewSection from './components/OverviewSection/OverviewSection'

function App() {
  return (
    <>
      <NavBar />
      <HeroSection />
      <FeatureSection />
      <OverviewSection />
      <PricingSection />
      <TestimonialSection />
      <CtaSection />
      <Footer />
    </>
  )
}

export default App
