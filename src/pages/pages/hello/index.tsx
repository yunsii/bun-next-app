import type { NextPage } from "next";
import dynamic from "next/dynamic";
import { Suspense } from "react";

const Button = dynamic(() => import("../../../components/Button").then((module) => module.Button), {
  ssr: false,
});

export const Page: NextPage = () => {
  return (
    <div>
      <h1>Hello</h1>
      <Button>test 1</Button>
    </div>
  );
};

export default Page;
