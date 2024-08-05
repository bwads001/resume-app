import { redirect } from "next/navigation";

import { AddExperience } from "@/app/components/add-experience";
import { subtitle, title } from "@/app/components/primitives";
import { SignOut } from "@/app/components/sign-out";
import { WorkExperience } from "@/app/components/work-experience";
import { auth } from "@/auth";
export default async function AdminPage() {
  const session = await auth();

  if (!session?.user) {
    redirect("/api/auth/signin");
  }

  return (
    <div>
      <h1 className={title()}>Admin</h1>
      <h2 className={subtitle({ class: "mt-4" })}>Add Experience</h2>
      <br />
      <div className="flex flex-row gap-1">
        <AddExperience />
        <WorkExperience />
      </div>
      <SignOut />
    </div>
  );
}
