import ProductList from "@/app/components/home/ProductList";
import SearchBox from "../components/home/SearchBox";

export default function Home() {
  return (
    <main>
      <SearchBox />
      <ProductList />
    </main>
  );
}
