import { CampaignHero } from "@/components/Campanha/Campanha-hero";
import { CampaignOverview } from "@/components/Campanha/Camapnha-Overview";
import { ArtDirection } from "@/components/Campanha/Art-Direction";
import { DesignSystem } from "@/components/Campanha/Design-System";
import { ResponsiveExperience } from "@/components/Campanha/Responsive-Experience";
import { ProjectChapters } from "@/components/Campanha/Project-Chapter";
import { CampaignFinalFrame } from "@/components/Campanha/Final-Frame";

export default function CampaignPage() {
  return (
    <main className="w-full bg-black">
      <CampaignHero />
      <CampaignOverview />
      <ArtDirection />
      <DesignSystem />
      <ResponsiveExperience />
      <ProjectChapters />
      <CampaignFinalFrame />
    </main>
  );
}
