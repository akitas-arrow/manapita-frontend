"use client";

import "./../app/app.css";
import { Amplify } from "aws-amplify";
import outputs from "@/amplify_outputs.json";
import "@aws-amplify/ui-react/styles.css";
import { useEffect } from "react";
import { getAccessToken } from "./functions/settion";
import { signOut } from "aws-amplify/auth";

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
      HOME
      <button onClick={() => signOut()}>SignOut</button>
    </main>
  );
}
