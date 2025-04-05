import { FaDropbox, FaGithub } from "react-icons/fa";
import Button from "../items/Button";
import { BsBoxArrowUpRight } from "react-icons/bs";

function Header() {
  return (
    <>
      <div className="flex items-center justify-center fixed h-[50px] w-full bg-[#050505] mt-2">
        <div className="w-1/2 h-full flex items-center gap-2">
          <FaDropbox className="w-8 h-8 ml-8" color="#782fef" />
          <p className="text-[#fff] text-xl">Flexbox Labs</p>
          <div className="border rounded-2xl h-[40%] w-0.5 opacity-70 bg-gray-500" />
          <div className="">
            <Button text="Flexbox" icon={<BsBoxArrowUpRight />} />
          </div>
        </div>

        <div className="w-1/2 h-full flex items-center justify-end">
          <div className="h-auto w-auto mx-8">
            <Button text="Star on GitHub" icon={<FaGithub />} />
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
