import "./Campaing.css";

export default function CampaignLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="campaign-layout">{children}</div>;
}
