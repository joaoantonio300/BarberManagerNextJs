import React from "react";
import HeadlessDemo from "./HeadlessDemo";

type Props = {
  children: React.ReactNode;
}

export default function Layout({ children }: Props){
  return (
    <>
      <HeadlessDemo/>
        <main className="flex justify-end p-4 4 ml-13.5">{children}</main>
    </>
  );
}
