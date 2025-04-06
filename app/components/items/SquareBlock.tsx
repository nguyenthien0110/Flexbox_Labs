interface props {
  index: number;
}

function SquareBlock(props: props) {
  return (
    <>
      <div className="bg-[#24292d] h-36 w-36 m-2 rounded-2xl relative shadow-[6px_4px_0px_0px_rgba(2,5,13)] hover:cursor-pointer hover:bg-[#646a7a]">
        <div className="h-8 w-8 bg-black text-white flex justify-center items-center rounded-xl px-6 absolute top-0 left-0 mt-2 ml-4">
          {props.index}
        </div>
      </div>
    </>
  );
}

export default SquareBlock;
