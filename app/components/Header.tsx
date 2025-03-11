"use client";

import { signOut } from "aws-amplify/auth";
import useAuthRedirect from "../hooks/useAuthRedirect";
import Image from "next/image";
import { Button } from "@/app/components/Button";
import { Kosugi_Maru } from "next/font/google";

const kosugiMaru = Kosugi_Maru({
  display: "swap",
  weight: "400",
  subsets: ["latin"],
});

export const Header = () => {
  useAuthRedirect({
    authhStatus: "unauthenticated",
    redirectPath: "/",
  });

  const handleClick = () => {
    signOut();
  };
  return (
    <header
      className={`py-4 px-5 flex h-20 items-center justify-between ${kosugiMaru.className}`}
    >
      <Image
        alt="manapita logo"
        src="/logo.svg"
        width={228.51}
        height={76}
        className="h-full"
      />
      <Button onClick={handleClick} variant="outline">
        さいんあうと
      </Button>
    </header>
  );
};
