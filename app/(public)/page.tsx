import ProductList from "@/app/components/home/ProductList";
import SearchBox from "../components/home/SearchBox";
import CarCard from "../components/home/CarCard";

export default function Home() {
  return (
    <main>
      <SearchBox />
      <CarCard />
      <ProductList />
    </main>
  );
}
