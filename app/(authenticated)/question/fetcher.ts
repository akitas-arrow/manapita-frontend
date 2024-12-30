import { getIdToken } from "@/app/functions/amplifyServerUtils";
import { cookies } from "next/headers";

type Questions = {
  questions: string[];
};

export const fetchQuestions = async (
  url: string
): Promise<Questions | undefined> => {
  const idToken = await getIdToken({ cookies });
  try {
    const response = await fetch(url, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${idToken}`,
      },
    });
    if (!response.ok) {
      console.error("response.ok:", response.ok);
      console.error("esponse.status:", response.status);
      console.error("esponse.statusText:", response.statusText);
      throw new Error(response.statusText);
    }
    const data = await response.json();

    return data;
  } catch (error) {
    console.error("エラーが発生しました", error);
  }
};
