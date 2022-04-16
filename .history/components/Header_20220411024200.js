import React from "react";
import Image from "next/image";
import { RiMessengerLine } from "react-icons/ri";
import { BsPlusSquare } from "react-icons/bs";

import {
    SearchIcon,
    PlusCircleIcon,
    UserGroupIcon,
    HeartIcon,
    PaperAirplaneIcon,
    MenuIcon
} from "@heroicons/react/outline"
import {HomeIcon } from "@heroicons/react/solid";

function Header() {
  return (
    <div>
      <div className="flex justify-between max-w-6xl mx-5 xl:mx-auto ">
        <div className="relative hidden lg:inline-grid w-24 h-24">
          <Image
            src="https://links.papareact.com/ocw"
            layout="fill"
            objectFit="contain"
          />
        </div>

        <div className=" relative w-10 h-10  lg:hidden flex-shrink-0 cursor-pointer">
          <Image
            src="https://links.papareact.com/jjm"
            layout="fill"
            objectFit="contain"
          />
        </div>

        {/* Middle Search Input Field */}
        <div className=" max-w-xs">
        <div className=" relative mt-1 p-3 rounded-md ">
            <div className=" absolute inset-y-3  pl-3 flex items-center pointer-events-none ">
             <SearchIcon  className="h-5  w-5 text-gray-500" />
            </div>
            <input className="bg-gray-50 block w-full pl-10 sm:text-sm border-gray-300  focus:ring-black  focus:border-black rounded-md" type="text" placeholder="Search" />

        </div>
        </div>
       {/* Right side */}
       <div className="flex items-center  justify-end space-x-4">
       <HomeIcon className=" navBtn" />
       <MenuIcon className=" h-6 md:hidden cursor-pointer " />
       <div className=" relative navBtn ">
       <RiMessengerLine className="h-6 w-7" />
       <div className=" absolute -top-1 -right-2  text-xs w-5 h-5 bg-red-500  rounded-full flex items-center  justify-center animate-pulse text-white ">18</div>
       </div>
       
       <BsPlusSquare  className="h-5 w-6"/>
       {/* <UserGroupIcon className="navBtn"/> */}
       <HeartIcon     className="navBtn"  />

       <img className="h-10 rounded-full  cursor-pointer" src="https:links.papareact.com/3ke" alt="profile pic"  />
       </div>
      </div>
    </div>
  );
}

export default Header;