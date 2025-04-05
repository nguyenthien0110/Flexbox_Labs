"use client";

import FlexLayoutControls from "./components/main/FlexLayoutControls";
import Header from "./components/main/Header";
import Nav from "./components/main/Nav";
import useStore from "./store/useStore";

export default function Home() {
  const state = useStore();
  console.log(state);
  return (
    <>
      <div className="bg-[#050505] w-full h-screen fixed">
        <div className="w-full h-16 top-0 left-0 fixed">
          <Header />
        </div>
        <div className="flex w-full h-screen pt-16 gap-2">
          <div className="bg-[#131417] min-h-[100hv] w-16 ml-2 border rounded-2xl mb-4">
            <Nav />
          </div>
          <div className="bg-[#131417] min-h-[100hv] w-96 border rounded-2xl mb-4 flex justify-center">
            <FlexLayoutControls />
          </div>
          <div className="bg-[#131417] min-h-[100hv] flex-1 mr-2 border rounded-2xl mb-4"></div>
        </div>
      </div>
    </>
  );
}
