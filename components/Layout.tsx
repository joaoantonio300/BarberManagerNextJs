import React from "react";
import HeadlessDemo from "./HeadlessDemo";

type Props = {
  children: React.ReactNode;
}

export default function Layout({ children }: Props){
  return (
    <div className="flex min-h-screen flex-col">
      <HeadlessDemo/>
      <main className="flex flex-1 justify-end p-4 text-white">{children}</main>
    </div>
  );
}
