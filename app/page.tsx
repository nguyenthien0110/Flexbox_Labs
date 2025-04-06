"use client";

import FlexLayoutControls from "./components/main/FlexLayoutControls";
import Header from "./components/main/Header";
import Nav from "./components/main/Nav";
import Playground from "./components/main/Playground";
import clsx from "clsx";

export default function Home() {
  return (
    <>
      <div className="bg-[#050505] w-full h-screen fixed">
        <div className="w-full h-16 top-0 left-0 fixed">
          <Header />
        </div>
        <div className="flex w-full h-screen pt-16 gap-2">
          <div className="bg-[#131417] min-h-[100hv] w-16 ml-2 border rounded-2xl mb-4 relative">
            <Nav />
          </div>
          <div
            className={clsx(
              `bg-[#131417] min-h-[100hv] w-96 border rounded-2xl mb-4 justify-center`,
              true ? "flex" : "hidden"
            )}
          >
            <FlexLayoutControls />
          </div>
          <div className="bg-[#131417] min-h-[100hv] flex-1 mr-2 border rounded-2xl mb-4">
            <Playground />
          </div>
        </div>
      </div>
    </>
  );
}
