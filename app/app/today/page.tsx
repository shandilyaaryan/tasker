"use client";

import { AddTask } from "@/components/add-task";

const Page = () => {
  const today = new Date();
  const formatted = today.toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "short",
  });

  return (
        <AddTask />
  );
};

export default Page;
