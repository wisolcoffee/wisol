import React, { Children } from "react";
import Header from "./Header";
import FooterJS from "./FooterJS";
export default function Layout({ children }) {
  return (
    <div className="">
      <Header />
      <div
        style={{ display: "flex", flex: 1, gap: "10px" }}
        className="min-h-screen"
      >
        {/* <SideNav /> */}
        <main className="mt-1 pl-5 pr-5" style={{ flex: 1, paddingTop: "5px" }}>
          {children}
        </main>
      </div>
      <FooterJS />
    </div>
  );
}
