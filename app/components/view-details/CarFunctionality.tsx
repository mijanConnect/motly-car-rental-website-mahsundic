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
    </div>
  );
}
