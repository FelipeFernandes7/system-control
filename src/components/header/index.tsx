"use client";

import Link from "next/link";
import { FiLoader, FiLock, FiLogOut, FiUser } from "react-icons/fi";
import { signIn, signOut, useSession } from "next-auth/react";

export function Header() {
  const { status, data } = useSession();
  async function handleLogin() {
    await signIn();
  }

  async function logOut() {
    await signOut();
  }

  return (
    <header className="w-full flex items-center px-2 py-4 bg-zinc-800 h-20 shadow-sm">
      <div className=" w-full flex items-center justify-between max-w-7xl mx-auto">
        <Link href={"/"}>
          <h1 className="text-2xl font-bold pl-1 hover:tracking-widest transition-all duration-300">
            <span className="text-indigo-500">SYSTEM</span>
            CONTROL
          </h1>
        </Link>

        {status === "loading" && (
          <button className=" bg-zinc-700 p-2 rounded-lg hover:scale-110 active:scale-95 transition-all duration-300 ">
            <FiLoader className="animate-spin" size={26} color={"#fff"} />
          </button>
        )}

        {status === "unauthenticated" && (
          <button
            onClick={handleLogin}
            className=" bg-zinc-700 p-2 rounded-lg hover:scale-110 active:scale-95 transition-all duration-300"
          >
            <FiLock size={26} color={"#fff"} />
          </button>
        )}

        {status === "authenticated" && (
          <div className="flex items-center gap-4">
            <Link
              href={"/dashboard"}
              className=" bg-zinc-700 p-2 rounded-lg hover:scale-110 active:scale-95 transition-all duration-300"
            >
              <FiUser size={26} color={"#fff"} />
            </Link>
            <button className=" bg-zinc-700 p-2 rounded-lg hover:scale-110 active:scale-95 transition-all duration-300">
              <FiLogOut size={26} color={"#fff"} />
            </button>
          </div>
        )}
      </div>
    </header>
  );
}
