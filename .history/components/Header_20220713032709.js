import React from "react";
import Image from "next/image";

import { RiMessengerLine } from "react-icons/ri";
import { BsPlusSquare } from "react-icons/bs";
import { MdOutlineExplore } from "react-icons/md";
import { MdHomeFilled } from "react-icons/md";

import {
  SearchIcon,
  PlusCircleIcon,
  UserGroupIcon,
  HeartIcon,
  PaperAirplaneIcon,
  MenuIcon,
} from "@heroicons/react/outline";
import { HomeIcon } from "@heroicons/react/solid";
import { useSession, signIn, signOut } from "next-auth/react";
import { useRouter } from "next/router";
import { useRecoilState } from "recoil";
import { modalState } from "../atoms/modalAtom";

function Header() {
  const { data: session } = useSession();
  const [open, Setopen] = useRecoilState(modalState);
  const router = useRouter();

  console.log(session);
  return (
    <div className="shadow-sm border-b  bg-white sticky top-0 z-50">
      <div className="flex justify-between max-w-6xl mx-5 xl:mx-auto ">
        <div
          onClick={() => router.push("/")}
          className="relative hidden lg:inline-grid w-24 cursor-pointer "
        >
          <Image
            src="https://links.papareact.com/ocw"
            layout="fill"
            objectFit="contain"
          />
        </div>

        <div
          onClick={() => router.push("/")}
          className=" relative w-10   lg:hidden flex-shrink-0 cursor-pointer"
        >
          <Image
            src="https://links.papareact.com/jjm"
            layout="fill"
            objectFit="contain"
          />
        </div>

        {/* Middle Search Input Field */}
        <div className=" max-w-xs ml-10">
          <div className=" relative mt-1  p-3 rounded-md ">
            <div className=" absolute inset-y-3  pl-3 flex items-center pointer-events-none ">
              <SearchIcon className="h-5  w-5 text-gray-500" />
            </div>
            <input
              className="bg-gray-50 block w-full pl-10 sm:text-sm border-gray-300  focus:ring-black  focus:border-black rounded-md"
              type="text"
              placeholder="Search"
            />
          </div>
        </div>
        {/* Right side */}
        <div className="flex items-center  justify-end space-x-4">
          <MdHomeFilled className=" h-7 w-8 navBtn" />
          <MenuIcon className=" h-6 md:hidden cursor-pointer " />

          {session ? (
            <>
              <div className=" relative navBtn ">
                <RiMessengerLine className="h-7 w-8  navBtn" />
                <div className=" absolute -top-1 -right-2  text-xs w-5 h-5 bg-red-500  rounded-full flex items-center  justify-center animate-none text-white ">
                  8
                </div>
              </div>

              <BsPlusSquare
                onClick={() => Setopen(true)}
                className="h-6 w-6 cursor-pointer"
              />
              {/* <UserGroupIcon className="navBtn"/> */}
              <MdOutlineExplore className=" hidden h-7  w-8 md:inline-flex cursor-pointer hover:scale-125 transition-all duration-150 ease-out   " />
              <HeartIcon className="navBtn" />

              <img
                onClick={signOut}
                className="h-6 w-6 rounded-full  cursor-pointer"
                src={session?.user?.image}
                alt="profile pic"
              />
            </>
          ) : (
            <button onClick={signIn}> Sign in</button>
          )}
        </div>
      </div>
    </div>
  );
}

export default Header;
