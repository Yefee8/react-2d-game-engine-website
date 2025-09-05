import Header from "./components/Header";
import EasyToUse from "./components/Homepage/EasyToUse";
import Entry from "./components/Homepage/Entry";
import Fast from "./components/Homepage/Fast";
import OpenSource from "./components/Homepage/OpenSource";

export default function Home() {
  return (
    <div className="w-full flex flex-col items-center">
      <Header />
      <Entry />
      <Fast />
      <EasyToUse />
      <OpenSource />
    </div>
  );
}
