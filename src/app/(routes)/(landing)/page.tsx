import AboutUsSection from "./_components/AboutUsSection";
import BestSellerSection from "./_components/BestSellerSection";
import CompaniesSection from "./_components/CompaniesSection";
import GallerySection from "./_components/GallerySection";
import PopularItemsSection from "./_components/PopularItemsSection";
import RulesSection from "./_components/RulesSection";
import ShopNowSection from "./_components/ShopNowSection";
import Testimonials from "./_components/Testmonial";

export default function Home() {
  return (
    <>
      <main className="flex flex-col gap-8">
        <ShopNowSection />
        <RulesSection />
        <BestSellerSection />
        <PopularItemsSection />
        <AboutUsSection />
        <GallerySection />
        <Testimonials />
        <CompaniesSection />
      </main>
    </>
  );
}
