import React from "react";
import AboutUsSection from "../(landing)/_components/AboutUsSection";
import TeamsSection from "../(landing)/_components/TeamsSection";
import RulesSection from "../(landing)/_components/RulesSection";
import InstagramSection from "../(landing)/_components/InstagramSection";
import CompaniesSection from "../(landing)/_components/CompaniesSection";
import Testimonials from "../(landing)/_components/Testmonial";

export default function AboutPage() {
  return (
    <main className="flex flex-col gap-8">
        <AboutUsSection />
        <Testimonials/>
        <TeamsSection />
        <RulesSection />
        <InstagramSection />
        <CompaniesSection />
    </main>
  );
}
