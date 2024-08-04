import { auth } from "@/auth";
import { AddExperience } from "@/components/add-experience";
import { subtitle, title } from "@/components/primitives";
import { SignIn } from "@/components/sign-in";
import { SignOut } from "@/components/sign-out";
import { WorkExperience } from "@/components/work-experience";

export default async function AdminPage() {
  const session = await auth();

  if (!session?.user) {
    return (
      <div>
        <SignIn />
      </div>
    );
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
      <div>{JSON.stringify(session)}</div>

      <SignOut />
    </div>
  );
}
