
// Shared components (used across all pages)
import Navbar from '../../../../components/sharedComponents/Navbar';
import Footer from '../../../../components//sharedComponents/Footer';

// Critical Perspectives page specific components
import RecentlyAddedCriticalPerspectives from '../CriticalPerspectives/RecentlyAddedCriticalPerspectives';
import CriticalPerspectivesInsights from '../CriticalPerspectives/CriticalPerspectivesInsights';
import CriticalPerspectivesHero from '../CriticalPerspectives/CriticalPerspectivesHero';

// Import Premium and Newsletter from home page (reusable)
import PremiumUpgrade from '../../HomePage/PremiumUpgrade';

export const metadata = {
  title: "Critical Perspectives - Literary Palace",
  description: "Explore our curated collection of critical perspectives, analyses, and insights into various literary works and themes.",
};

export default function CriticalPerspectivesPage() {
  return (
    <main className="min-h-screen">
      {/* Global Navigation */}
      <Navbar />

      {/* Hero Section */}
      <CriticalPerspectivesHero />

      {/* Recently Added Critical Perspectives */}
      <RecentlyAddedCriticalPerspectives />

      {/* Main Critical Perspectives Insights Section */}
      <CriticalPerspectivesInsights />

      {/* Premium Upgrade CTA */}
      <PremiumUpgrade />

      {/* Global Footer with Newsletter */}
      <Footer />
    </main>
  );
}