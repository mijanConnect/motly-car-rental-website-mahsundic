import Reviews from "@/app/components/view-reviews/Reviews";
import TopBar from "@/app/components/view-reviews/TopBar";

export default function Page() {
  return (
    <>
      <div className="my-5 lg:my-12">
        <TopBar />
        <Reviews />
      </div>
    </>
  );
}
