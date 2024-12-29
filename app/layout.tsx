"use client";

import { Authenticator } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";
import "@/app/globals.css";
import { I18n } from "aws-amplify/utils";
import { vocabularies } from "./vocabularies";
import Image from "next/image";
import styles from "@/app/layout.module.scss";

const compoennts = {
  Header() {
    return (
      <div className={styles.logoWrapper}>
        <Image
          alt="manapita logo"
          src={`logo.svg`}
          width={228.51}
          height={76}
        />
      </div>
    );
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  I18n.putVocabularies(vocabularies);
  I18n.setLanguage("ja");

  return (
    <html lang="ja">
      <body>
        レイアウト
        <Authenticator hideSignUp components={compoennts}>
          {children}
        </Authenticator>
      </body>
    </html>
  );
}
