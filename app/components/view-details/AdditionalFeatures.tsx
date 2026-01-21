import Image from "next/image";
import { ReactNode } from "react";

export default function ModalAdditionalFeatures({
  imageUrl,
  PolicyHeader,
  PolicyType,
  PolicyDescription,
}: {
  imageUrl: string | ReactNode;
  PolicyHeader: string;
  PolicyType: string;
  PolicyDescription: string;
}) {
  return (
    <>
      <div className="flex-1">
        <div className="flex gap-3 items-center">
          {typeof imageUrl === "string" ? (
            <Image src={imageUrl} alt={PolicyHeader} width={44} height={44} />
          ) : (
            imageUrl
          )}
          <div>
            <p className="text-[16px] lg:text-[20px] text-primaryText font-medium">
              {PolicyHeader}
            </p>
            <p className="text-[14px] lg:text-[16px] font-medium text-primary">
              {PolicyType}
            </p>
          </div>
        </div>
        <p className="mt-1.5 description">{PolicyDescription}</p>
      </div>
    </>
  );
}
