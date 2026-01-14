import { Suspense } from "react";
import Checkout from "@/app/components/checkout/Checkout";

function CheckoutFallback() {
  return <div className="my-5 lg:my-12">Loading...</div>;
}

export default function Page() {
  return (
    <>
      <Suspense fallback={<CheckoutFallback />}>
        <div className="my-5 lg:my-12">
          <Checkout />
        </div>
      </Suspense>
    </>
  );
}
