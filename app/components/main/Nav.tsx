import { menuItemsList } from "@/app/utils/type";
import MenuItem from "./MenuItem";
import { TbLayoutSidebarLeftCollapse } from "react-icons/tb";
import { RiCodeSSlashFill } from "react-icons/ri";

function Nav() {
  return (
    <>
      <div className="text-black fixed">
        <div className="flex justify-center w-16 h-auto">
          <MenuItem icon={<TbLayoutSidebarLeftCollapse />} isButton={true} />
        </div>
        <div className="h-[0.1rem] w-full flex justify-center">
          <div className="h-[0.1rem] w-[60%] bg-gray-600" />
        </div>
        <div className="w-16 h-auto mt-2">
          {menuItemsList.map((item) => {
            return (
              <div key={item.title} className="flex justify-center">
                <MenuItem icon={item.icon} />
              </div>
            );
          })}
        </div>
        <div className="h-[0.1rem] w-full flex justify-center mt-2">
          <div className="h-[0.1rem] w-[60%] bg-gray-600" />
        </div>
        <div className="flex justify-center w-16 h-auto">
          <MenuItem icon={<RiCodeSSlashFill />} />
        </div>
      </div>
    </>
  );
}

export default Nav;
