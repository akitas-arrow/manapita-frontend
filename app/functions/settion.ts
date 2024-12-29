import { fetchAuthSession } from "aws-amplify/auth";

export const getAccessToken = async () => {
  const session = await fetchAuthSession();
  return session.tokens?.idToken;
};
