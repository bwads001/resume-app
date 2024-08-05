import { experienceList } from "@/app/lib/data";
import { auth } from "@/auth";
import { DeleteExperience } from "@/components/delete-experience";

export async function WorkExperience() {
  const experiences = await experienceList();
  const experiencesSorted = experiences.sort(
    (a, b) =>
      (b.startDate.split("/")[1] as any) - (a.startDate.split("/")[1] as any),
  );
  const session = await auth();

  return (
    <div className="flex flex-col gap-2 basis-3/5 max-w-3xl">
      {experiencesSorted.map((experience) => (
        <div
          key={experience.id}
          className="flex flex-col p-4 rounded-xl border-1 font-sans"
        >
          <div className="flex flex-row">
            <div className="flex flex-col w-2/5">
              <h3 className="text-lg">{experience.position}</h3>
              <h4 className="text-xl text-primary-600">{experience.company}</h4>
              <p className="text-xs text-foreground-500 mb-1">
                {experience.startDate} - {experience.endDate}
              </p>
            </div>
            <div className="float-right">
              {session?.user && <DeleteExperience id={experience.id} />}
            </div>
          </div>
          <hr />
          <div className="flex text-wrap mt-2 w-full text-md">
            {experience.experience}
          </div>
        </div>
      ))}
    </div>
  );
}
