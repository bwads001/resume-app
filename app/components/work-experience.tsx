import { DeleteExperience } from "@/app/components/delete-experience";
import { experienceList } from "@/app/lib/data";
import { auth } from "@/auth";

export async function WorkExperience() {
  const session = await auth();
  const experiences = await experienceList();
  const experiencesSorted = experiences.sort(
    (a, b) =>
      (b.startDate.split("/")[1] as any) - (a.startDate.split("/")[1] as any),
  );

  return (
    <div className="flex flex-col gap-2 basis-3/5 max-w-3xl">
      {experiencesSorted.map((experience) => (
        <div
          key={experience.id}
          className="flex flex-col p-4 rounded-xl bg-background-950/60 font-sans divide-foreground-600"
        >
          <div className="flex flex-row relative">
            <div className="flex flex-col">
              <h3 className="text-xl font-semibold">{experience.position}</h3>
              <h4 className="text-lg text-primary">{experience.company}</h4>
              <p className="text-xs mb-1 font-semibold text-foreground-600">
                {experience.startDate} - {experience.endDate}
              </p>
            </div>
            <div className="absolute right-1 top-0 text-lg">
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
