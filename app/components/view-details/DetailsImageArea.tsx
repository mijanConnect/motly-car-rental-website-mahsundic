import Image from "next/image";

export default function ImageArea() {
  return (
    <>
      <div className="relative w-full h-[700px]">
        <Image
          src="/assets/view-details/car-1.png"
          alt="Car Image"
          fill
          className="object-cover rounded-lg"
          priority
        />
      </div>
    </>
  );
}
