import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import Features from '../components/Features';
import Overview from '../components/Overview';
import NewDiv from '../components/Overview/NewDiv';
import Pricing from '../components/Pricing';
import Team from '../components/Team';
import Testimonials from '../components/Testimonials';
import Banner from '../components/Testimonials/Banner';
import Faq from '../components/Faq';
import Blog from '../components/Blog';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <Features />
      <Overview />
      <NewDiv />
      <Pricing />
      <Team />
      <Testimonials />
      <Banner />
      <Faq />
      <Blog />
      <Footer />
    </div>
  )
}
