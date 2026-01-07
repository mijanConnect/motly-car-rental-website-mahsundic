import Image from "next/image";

export default function AdditionalFeatures({
  imageUrl,
  PolicyHeader,
  PolicyType,
  PolicyDescription,
}: {
  imageUrl: string;
  PolicyHeader: string;
  PolicyType: string;
  PolicyDescription: string;
}) {
  return (
    <>
      <div className="flex-1">
        <div className="flex gap-3 items-center">
          <Image src={imageUrl} alt="Icon" width={44} height={44} />
          <div>
            <p className="text-[20px] text-primaryText font-medium">
              {PolicyHeader}
            </p>
            <p className="text-[16px] font-medium text-primary">{PolicyType}</p>
          </div>
        </div>
        <p className="mt-1.5 text-[16px] text-primaryText">
          {PolicyDescription}
        </p>
      </div>
    </>
  );
}
