import AffiliateDetail from "@/components/admin/affiliates/AffiliateDetail";

export default function AffiliateDetailPage({ params }: { params: { id: string } }) {
  return (
    <div className="max-w-6xl mx-auto">
      <AffiliateDetail id={params.id} />
    </div>
  );
}
