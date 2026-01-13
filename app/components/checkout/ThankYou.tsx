import Image from "next/image";

export default function ThankYou() {
  return (
    <div>
      <Image
        src="/assets/thanks.png"
        alt="Car Image"
        width={1066}
        height={795}
      />
      <h1 className="text-[32px] lg:text-[64px] text-primaryText font-bold text-center mt-4 lg:mt-10">
        Thank you!
      </h1>
      <p className="text-[16px] lg:text-[22px] text-primaryText font-medium text-center mt-1">
        Your payment was successful. We appreciate your booking and look forward
        to hosting you! 🏡
      </p>
    </div>
  );
}
