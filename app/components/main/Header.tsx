import { FaDropbox, FaGithub } from "react-icons/fa";
import Button from "../items/Button";
import { BsBoxArrowUpRight } from "react-icons/bs";
import { useRouter } from "next/navigation";

function Header() {
  const router = useRouter();
  const handleRetureHomePage = () => {
    router.push("/");
  };

  return (
    <>
      <div className="flex items-center justify-center fixed h-[50px] w-full bg-[#050505] mt-2">
        <div className="w-1/2 h-full flex items-center gap-2">
          <FaDropbox
            onClick={() => handleRetureHomePage()}
            className="w-8 h-8 ml-8 hover:cursor-pointer hover:shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)]"
            color="#782fef"
          />
          <p
            onClick={() => handleRetureHomePage()}
            className="text-[#fff] text-xl hover:cursor-pointer hover:shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)]"
          >
            Flexbox Labs
          </p>
          <div className="border rounded-2xl h-[40%] w-0.5 opacity-70 bg-gray-500" />
          <div className="">
            <Button
              onclick={() => router.push("/")}
              text="Grids"
              icon={<BsBoxArrowUpRight />}
            />
          </div>
        </div>

        <div className="w-1/2 h-full flex items-center justify-end">
          <div className="h-auto w-auto mx-8">
            <Button
              onclick={() =>
                router.push("https://github.com/nguyenthien0110/Flexbox_Labs")
              }
              text="Star on GitHub"
              icon={<FaGithub />}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
