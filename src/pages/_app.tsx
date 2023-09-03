import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { useState } from "react";
import Login from "@/components/Login";

export default function App({ Component, pageProps }: AppProps) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  if (!isLoggedIn) {
    return <Login isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />;
  }

  return (
    <div className="relative flex h-screen flex-row">
      <div className="sticky left-0 top-0 h-full">
        <Sidebar setIsLoggedIn={setIsLoggedIn} />
      </div>

      <div className="flex h-full w-full flex-col ">
        <div className="sticky top-0 z-10">
          <Header />
        </div>
        <div className=" hide-scrollbar h-full overflow-y-auto bg-blue-50">
          <Component {...pageProps} />
        </div>
      </div>
    </div>
  );
}
