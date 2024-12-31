import { cookies } from "next/headers";
import { getAuthenticated } from "../functions/amplifyServerUtils";
import AuthenticatorClient from "../components/AuthenticatorClient";
import { redirect } from "next/navigation";

export default async function SignIn() {
  const authenticated = await getAuthenticated({ cookies });

  if (authenticated) {
    redirect("/subject");
  }

  return (
    <div style={{ marginTop: "100px" }}>
      <AuthenticatorClient />
    </div>
  );
}
