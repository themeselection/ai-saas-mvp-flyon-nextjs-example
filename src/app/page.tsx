import FAQ from '../components/FAQ';
import Features from '../components/Features';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Hero from '../components/Hero';
import HowItWorks from '../components/HowItWorks';
import Pricing from '../components/Pricing';
import Problem from '../components/Problem';
import Solution from '../components/Solution';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Problem />
      <Solution />
      <Features />
      <HowItWorks />
      <Pricing />
      <FAQ />
      <Footer />
    </div>
  );
}
