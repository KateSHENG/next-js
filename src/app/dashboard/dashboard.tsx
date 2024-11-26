"use client"
// import { useSession } from "next-auth/react"
import { redirect } from "next/navigation";
import { SignOut } from "../../_ui/signout-button";

export  function Dashboard() {
    // const { data: session } = useSession();
    // console.log(session)
    // console.log(session)
    // if (session === null) {
    //   redirect("/login");
    // }
  
  
    return (
      <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
        <p>
          This is private dashboard page - private route. If user is already logged, stay in
          this page, if not, return to login page
        </p>
        <SignOut />
      </div>
    );
  }