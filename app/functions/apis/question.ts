import { getIdToken } from "@/app/functions/amplifyServerUtils";
import { cookies } from "next/headers";

type Questions = {
  category: string;
  question_ids: string[];
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

type QuestionDetail = {
  category: string;
  question: {
    question_id: string;
    answer: string;
    image_url: string;
    options: string[];
  };
};

export const fetchQuestion = async (
  url: string
): Promise<QuestionDetail | undefined> => {
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
