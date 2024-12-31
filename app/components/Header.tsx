"use client";

import { signOut } from "aws-amplify/auth";
import useAuthRedirect from "../hooks/useAuthRedirect";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export const Header = () => {
  useAuthRedirect({
    authhStatus: "unauthenticated",
    redirectPath: "/",
  });

  const handleClick = () => {
    signOut();
  };
  return (
    <header className="p-3 flex h-16 items-center justify-between pl-[116px]">
      <Image
        alt="manapita logo"
        src="/logo.svg"
        width={228.51}
        height={76}
        className="h-full w-full"
      />
      <Button onClick={handleClick}>さいんあうと</Button>
    </header>
  );
};
