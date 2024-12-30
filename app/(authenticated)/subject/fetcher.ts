import { getIdToken } from "@/app/functions/amplifyServerUtils";
import { cookies } from "next/headers";

type Subjects = {
  subject: string[];
};

export const fetchSubject = async (
  url: string
): Promise<Subjects | undefined> => {
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

type SubjectCategories = {
  category: string[];
};

export const fetchSubjectCategories = async (
  url: string
): Promise<SubjectCategories | undefined> => {
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
    console.log({ data });
    return data;
  } catch (error) {
    console.error("エラーが発生しました", error);
  }
};
