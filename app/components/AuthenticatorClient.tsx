"use client";

import styles from "@/app/layout.module.scss";
import { Authenticator } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";
import "@/app/globals.css";
import { I18n } from "aws-amplify/utils";
import { vocabularies } from "../vocabularies";
import useAuthRedirect from "../hooks/useAuthRedirect";
import Image from "next/image";

export default function AuthenticatorClient() {
  I18n.putVocabularies(vocabularies);
  I18n.setLanguage("ja");

  useAuthRedirect({
    authhStatus: "authenticated",
    redirectPath: "/subject",
  });

  const compoennts = {
    Header() {
      return (
        <div className={styles.logoWrapper}>
          <Image
            alt="manapita logo"
            src="/logo.svg"
            width={228.51}
            height={76}
          />
        </div>
      );
    },
  };
  return <Authenticator hideSignUp components={compoennts} />;
}
