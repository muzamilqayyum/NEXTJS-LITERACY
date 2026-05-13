import Navbar from '../sharedComponents/Navbar';
import Footer from '../sharedComponents/Footer';
import AboutUsHero from '../components/Pages/AboutUsPage/AboutUsHero';
import AboutUsMain from '../components/Pages/AboutUsPage/AboutUsMain';
import PremiumUpgrade from "../components/Pages/HomePage/PremiumUpgrade";

export const metadata = {
  title: 'About Us - Literary Palace',
  description: 'About Literary Palace — mission, what we offer, our team, and trust & integrity',
};

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <Navbar />

      <AboutUsHero />

      <AboutUsMain />

      
      <PremiumUpgrade />

      <Footer />
    </main>
  );
}
