import DetailsMain from "@/app/components/view-details/DetailsMain";

type PageProps = {
  searchParams: Promise<{ id?: string }>;
};

export default async function Page({ searchParams }: PageProps) {
  const params = await searchParams;
  const carId = params.id ? parseInt(params.id) : null;

  return (
    <>
      <div className="my-5 lg:my-12">
        <DetailsMain carId={carId} />
      </div>
    </>
  );
}
