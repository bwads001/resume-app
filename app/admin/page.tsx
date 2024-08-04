import { AddExperience } from "@/components/add-experience";
import { subtitle, title } from "@/components/primitives";
import { WorkExperience } from "@/components/work-experience";

export default async function AdminPage() {
  return (
    <div>
      <h1 className={title()}>Admin</h1>
      <h2 className={subtitle({ class: "mt-4" })}>Add Experience</h2>
      <br />
      <div className="flex flex-row gap-1">
        <AddExperience />
        <WorkExperience />
      </div>
    </div>
  );
}
