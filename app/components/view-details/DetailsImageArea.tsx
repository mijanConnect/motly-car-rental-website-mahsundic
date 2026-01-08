import Image from "next/image";

export default function ImageArea() {
  return (
    <>
      <div className="relative w-full h-[300px] md:h-[500px] lg:h-[700px] overflow-hidden">
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
