"use client";

import { Amplify } from "aws-amplify";
import outputs from "@/amplify_outputs.json";
import { useEffect } from "react";
import { getAccessToken } from "./functions/settion";
import { signOut } from "aws-amplify/auth";
import Link from "next/link";

Amplify.configure(outputs);

export default function App() {
  useEffect(() => {
    const authCheck = async () => {
      const token = await getAccessToken();
      console.log(token?.toString());
      const response = await fetch(
        "https://d1e8m765cc.execute-api.ap-northeast-1.amazonaws.com/study/authcheck",
        {
          headers: {
            Authorization: `Bearer ${token?.toString() ?? ""}`,
            "Content-Type": "application/json",
          },
        }
      );
      const json = response.json();
    };
    authCheck();
  }, []);

  return (
    <main>
      <h1>なにであそぶ?</h1>
      <div>
        <Link href={"/subject/animal"}>どうぶつ</Link>
      </div>
      <button onClick={() => signOut()}>SignOut</button>
    </main>
  );
}
