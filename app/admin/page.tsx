import { subtitle, title } from "@/components/primitives";
import { experienceList, userInfo } from "@/lib/data";

export default async function AdminPage() {
  const user = await userInfo("Bryan Wadsworth");
  const experiences = await experienceList();

  return (
    <div>
      <h1 className={title()}>{user.name}</h1>
      <h2 className={subtitle({ class: "mt-4" })}>{user.about}</h2>
      <br />
      <div>
        {experiences.map((experience) => (
          <div
            key={experience.id}
            className="flex col-auto border-b border-gray-100 pb-4 gap-4"
          >
            <div className="flex width-2/5 items-center justify-between gap-8">
              <h2>{experience.company}</h2>
              <h3>{experience.position}</h3>
              <span>
                {experience.startDate} - {experience.endDate}
              </span>
            </div>
            <div className="flex width-3/5">{experience.experience}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
