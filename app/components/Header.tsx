"use client";

import { signOut } from "aws-amplify/auth";
import useAuthRedirect from "../hooks/useAuthRedirect";

export const Header = () => {
  useAuthRedirect({
    authhStatus: "unauthenticated",
    redirectPath: "/",
  });

  const handleClick = () => {
    signOut();
  };
  return <button onClick={handleClick}>さいんあうと</button>;
};
