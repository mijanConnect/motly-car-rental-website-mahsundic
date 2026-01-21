import { Door, Seat, Suitcase, Autometic, Climate } from "../Svg";

const carcarFeatures = [
  { component: Door, label: "4 Doors" },
  { component: Seat, label: "5 Seats" },
  { component: Suitcase, label: "2 Suitcases" },
  { component: Autometic, label: "Automatic" },
  { component: Climate, label: "Climate" },
];

export default function CarFunctionality() {
  return (
    <div className="flex gap-2 items-center flex-wrap mt-4">
      {carcarFeatures.map((carFeatures) => {
        const Component = carFeatures.component;
        return (
          <div
            key={carFeatures.label}
            className="flex flex-col gap-1 lg:gap-2 items-center border px-2 py-2 md:px-4 rounded-sm border-strock"
          >
            <div className="block md:hidden">
              <Component width={18} height={18} />
            </div>

            <div className="hidden md:block lg:hidden">
              <Component width={28} height={28} />
            </div>

            <div className="hidden lg:block">
              <Component width={32} height={32} />
            </div>
            <p className="text-primaryText text-[12px] md:text-[16px]">
              {carFeatures.label}
            </p>
          </div>
        );
      })}

      {/* Doors */}
      {/* <div className="flex flex-col gap-2 items-center border px-5 py-2 rounded-sm border-strock">
        <Image
          src="/assets/view-details/door.png"
          alt="Icon"
          width={32}
          height={32}
        />
        <p className="text-primaryText text-[20px]">4 Doors</p>
      </div> */}
      {/* Seats */}
      {/* <div className="flex flex-col gap-2 items-center border px-5 py-2 rounded-sm border-strock">
        <Image
          src="/assets/view-details/seat.png"
          alt="Icon"
          width={32}
          height={32}
        />
        <p className="text-primaryText text-[20px]">5 Seats</p>
      </div> */}
      {/* Suitcase */}
      {/* <div className="flex flex-col gap-2 items-center border px-5 py-2 rounded-sm border-strock">
        <Image
          src="/assets/view-details/suitcase.png"
          alt="Icon"
          width={32}
          height={32}
        />
        <p className="text-primaryText text-[20px]">2 Suitcases</p>
      </div> */}
      {/* Automatic */}
      {/* <div className="flex flex-col gap-2 items-center border px-5 py-2 rounded-sm border-strock">
        <Image
          src="/assets/view-details/autometic.png"
          alt="Icon"
          width={32}
          height={32}
        />
        <p className="text-primaryText text-[20px]">Automatic</p>
      </div> */}
      {/* Climate */}
      {/* <div className="flex flex-col gap-2 items-center border px-5 py-2 rounded-sm border-strock">
        <Image
          src="/assets/view-details/climate.png"
          alt="Icon"
          width={32}
          height={32}
        />
        <p className="text-primaryText text-[20px]">Climate</p>
      </div> */}
    </div>
  );
}
