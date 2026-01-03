import DownloadLink from "../components/home/DownloadLink";
import FAQ from "../components/home/FAQ";
import SearchBox from "../components/home/SearchBox";
import Cars from "../components/home/Cars";

export default function Home() {
  return (
    <main>
      <SearchBox />
      <Cars />
      <DownloadLink />
      <FAQ />
    </main>
  );
}
