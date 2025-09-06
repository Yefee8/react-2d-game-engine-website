import Header from "./components/Header";
import Create from "./components/Homepage/Create";
import EasyToUse from "./components/Homepage/EasyToUse";
import Entry from "./components/Homepage/Entry";
import Fast from "./components/Homepage/Fast";
import OpenSource from "./components/Homepage/OpenSource";
import ScrollHelper from "./components/Homepage/ScrollHelper";

export default function Home() {
  return (
    <div className="w-full flex flex-col items-center">
      <ScrollHelper />
      <Header />
      <div className="flex flex-col w-full items-center max-md:px-4">
        <Entry />
        <Fast />
        <EasyToUse />
        <OpenSource />
        <Create />
      </div>
    </div>
  );
}
