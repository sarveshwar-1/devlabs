"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

function Page() {
  const router = useRouter();

  useEffect(() => {
    // Redirect to projects page
    router.replace("/mentor/project");
  }, [router]);

  return null; // Don't render anything as we're redirecting
}

export default Page;
