import Reviews from "@/app/components/view-reviews/Reviews";
import TopBar from "@/app/components/view-reviews/TopBar";

export default function Page() {
  return (
    <>
      <div className="py-6 lg:py-15">
        <TopBar />
        <Reviews />
      </div>
    </>
  );
}
