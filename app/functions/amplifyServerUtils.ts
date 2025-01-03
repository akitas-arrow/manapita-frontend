import { createServerRunner } from "@aws-amplify/adapter-nextjs";
import outputs from "@/amplify_outputs.json";
import { fetchAuthSession } from "aws-amplify/auth/server";

export const { runWithAmplifyServerContext } = createServerRunner({
  config: outputs,
});

type NextServerContext = Parameters<
  typeof runWithAmplifyServerContext
>[0]["nextServerContext"];

export const getAuthenticated = async (
  nextServerContext: NextServerContext
) => {
  return await runWithAmplifyServerContext({
    nextServerContext: nextServerContext,
    operation: async (contextSpec) => {
      try {
        const session = await fetchAuthSession(contextSpec);
        return (
          session.tokens?.accessToken !== undefined &&
          session.tokens?.idToken !== undefined
        );
      } catch (error) {
        console.log(error);
        return false;
      }
    },
  });
};

export const getIdToken = async (nextServerContext: NextServerContext) => {
  return await runWithAmplifyServerContext({
    nextServerContext: nextServerContext,
    operation: async (contextSpec) => {
      try {
        const session = await fetchAuthSession(contextSpec);
        return session.tokens?.idToken;
      } catch (error) {
        console.log(error);
        return undefined;
      }
    },
  });
};
