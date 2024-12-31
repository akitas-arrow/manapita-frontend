import { fetchAuthSession } from "aws-amplify/auth";

export type Questions = {
  category: string;
  question_ids: string[];
};

export const fetchQuestions = async (url: string): Promise<Questions> => {
  const session = await fetchAuthSession();
  try {
    const response = await fetch(url, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${session.tokens?.idToken ?? ""}`,
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
    throw error;
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

export const fetchQuestion = async (url: string): Promise<QuestionDetail> => {
  const session = await fetchAuthSession();
  try {
    const response = await fetch(url, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${session.tokens?.idToken ?? ""}`,
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
    throw error;
  }
};

export type PostData = {
  category: string;
  is_wrong: boolean;
  question_id: string;
};

export const postResult = async (
  url: string,
  { arg }: { arg: PostData }
): Promise<QuestionDetail> => {
  const session = await fetchAuthSession();
  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${session.tokens?.idToken ?? ""}`,
      },
      body: JSON.stringify(arg),
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
    throw error;
  }
};
