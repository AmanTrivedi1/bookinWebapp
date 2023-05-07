"use client";
import { AiOutlineMenu } from "react-icons/ai";
const UserMenu = () => {
  return (
    <>
      <div className="relative">
        <div className="flex flex-row items-center  gap-3">
          <div
            onClick={() => {}}
            className="hidden md:block text-sm font-semibold py-3
              px-4 rounded-full hover:bg-neutral-100 transition cursor-pointer"
          >
            Airbnd Your Home{" "}
            <div
              className="p-4 md:py-1 md:px-1 border-[1px] border-neutral-100
              rounded-full cursor-pointer  hover:shadow-md transition
              flex flex-row items-center gap-3"
              onClick={() => {}}
            >
              {/* <AiOutlineMenu /> */}
              <div className="hidden md:block"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserMenu;
