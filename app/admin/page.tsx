import { experienceList, userInfo } from "@/app/lib/data";
import { AddExperience } from "@/components/add-experience";
import { subtitle, title } from "@/components/primitives";
import { Key } from "react";

export default async function AdminPage() {
  const user = await userInfo("Bryan Wadsworth");
  const experiences = await experienceList();

  return (
    <div>
      <h1 className={title()}>{user.name}</h1>
      <h2 className={subtitle({ class: "mt-4" })}>{user.about}</h2>
      <br />
      <div>
        {experiences.reverse().map((experience: { id: Key; position: string; company: string; startDate: string; endDate: string; }) => (
          <div key={experience.id}>
            <h3>{experience.position}</h3>
            <h4>{experience.company}</h4>
            <p>
              {experience.startDate} - {experience.endDate}
            </p>
            <hr />
          </div>
        ))}
      </div>
      <AddExperience />
    </div>
  );
}
