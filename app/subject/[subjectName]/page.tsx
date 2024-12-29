"use client";

import { Amplify } from "aws-amplify";
import Link from "next/link";
import outputs from "@/amplify_outputs.json";

Amplify.configure(outputs);

export default function SubjectDetail() {
  return (
    <>
      <div>
        <Link href={"/"}>もどる</Link>
      </div>
    </>
  );
}
