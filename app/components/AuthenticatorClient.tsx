"use client";

import { Authenticator } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";
import { I18n } from "aws-amplify/utils";
import { vocabularies } from "../vocabularies";
import useAuthRedirect from "../hooks/useAuthRedirect";

export default function AuthenticatorClient() {
  I18n.putVocabularies(vocabularies);
  I18n.setLanguage("ja");

  useAuthRedirect({
    authhStatus: "authenticated",
    redirectPath: "/subject",
  });

  return <Authenticator hideSignUp />;
}
