"use client";

import { useRouter } from "next/navigation";

export const BackButton = () => {
  const router = useRouter();
  const handleBack = () => {
    router.back();
  };

  return <button onClick={handleBack}>もどる</button>;
};