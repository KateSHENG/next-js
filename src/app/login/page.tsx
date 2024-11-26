/** Login page: /app/login/page.tsx */

"use client";
import Link from 'next/link'
import type { NextRequest } from "next/server";
// import { signIn, useSession } from "next-auth/react";
import { redirect } from "next/navigation";
export default function Login(req: NextRequest) {
  // const { data: session } = useSession();
  // if (session) {
  //   redirect("/dashboard");
  // }
  return (
    <div>
      <p>This is login page - public route</p>
      {/* <button onClick={() => signIn("github")}>Sign in with github</button>
      <button onClick={() => signIn("google")}>Sign in with google</button>
      */}
      <Link href="/auth/login">Login</Link>
      {/* <button onClick={() => signIn("DC-CAS")}>Sign in with CAS</button>  */}
    </div>
  );
}