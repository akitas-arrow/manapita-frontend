"use client";

import { Amplify } from "aws-amplify";
import { generateClient } from "aws-amplify/api";
import outputs from "@/amplify_outputs.json";

Amplify.configure(outputs, { ssr: true });

export const client = generateClient();

export default function ConfigureAmplifyClientSide() {
  return null;
}
