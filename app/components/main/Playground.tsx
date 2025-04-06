import SquareBlock from "../items/SquareBlock";

function Playground() {
  return (
    <>
      <div className="h-full w-full rounded-2xl bg-[radial-gradient(#ffffff33_1px,#131417_1px)] bg-[size:24px_24px]">
        <div className="h-full w-full p-6 flex">
          <SquareBlock index={1} />
          <SquareBlock index={2} />
          <SquareBlock index={3} />
        </div>
      </div>
    </>
  );
}

export default Playground;
