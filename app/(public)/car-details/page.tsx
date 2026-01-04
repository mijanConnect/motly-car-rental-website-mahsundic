import Category from "@/app/components/car-details/Category";
import DetailsCars from "@/app/components/car-details/DetailsCars";
import PopularTab from "@/app/components/car-details/PopularTab";
import FilterPanel from "@/app/components/car-details/SideFilter";
import SideSearch from "@/app/components/car-details/SideSearch";

export default function page() {
  return (
    // <div className="flex gap-2 my-6 items-start">
    //   <div className="flex-4/18">
    //     <SideSearch />
    //   </div>
    //   <div className="flex-14/18 bg-gray-400 p-2 gap-2 rounded-lg flex flex-col">
    //     <div className="bg-violet-200 text-white p-6 rounded-lg min-h-48">
    //       Car Details Top
    //     </div>
    //     <div className="flex gap-2">
    //       <div className="flex-9/14 bg-violet-500 text-white p-6 rounded-lg min-h-48">
    //         Car Details
    //       </div>
    //       <div className="flex-5/14 bg-blue-500 text-white p-6 rounded-lg min-h-48">
    //         Car Details
    //       </div>
    //     </div>
    //   </div>
    // </div>
    <div className="flex gap-4 my-12 items-start">
      {/* Sidebar */}
      <div className="flex-4/18">
        <SideSearch />
        <FilterPanel />
      </div>
      <div className="flex-14/18 gap-4 rounded-lg flex flex-col">
        <Category />
        <PopularTab />
        <div className="flex gap-4">
          <div className="flex-9/14 rounded-lg">
            <DetailsCars />
          </div>
          <div className="flex-5/14 rounded-lg">
            <div>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.0633996377896!2d90.40503067589765!3d23.780756587609194!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c71f812bea6b%3A0xc289a221fd0c83e5!2sAQUA%20Tower!5e0!3m2!1sen!2sbd!4v1767518564822!5m2!1sen!2sbd"
                width="100%"
                height="668"
                frameBorder="0"
                className="rounded-lg"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
