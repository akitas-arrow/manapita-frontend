"use client";

import { Inter } from "next/font/google";
import "./app.css";
import { Authenticator } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";
import { I18n } from "aws-amplify/utils";
import { vocabularies } from "./vocabularies";
import Image from "next/image";
import styles from "@/app/layout.module.scss";

const inter = Inter({ subsets: ["latin"] });

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
        <Authenticator hideSignUp components={compoennts}>
          {children}
        </Authenticator>
      </body>
    </html>
  );
}
