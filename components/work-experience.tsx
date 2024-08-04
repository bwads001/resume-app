import { Snippet } from "@nextui-org/snippet";

import { experienceList } from "@/app/lib/data";

export async function WorkExperience() {
  const experiences = await experienceList();

  return (
    <div>
      {experiences.reverse().map((experience) => (
        <Snippet
          key={experience.id}
          hideCopyButton
          hideSymbol
          className="flex p-4"
          variant="bordered"
        >
          <h3 className="text-lg">{experience.position}</h3>
          <h4 className="text-xl text-primary-600">{experience.company}</h4>
          <p className="text-xs text-foreground-500">
            {experience.startDate} - {experience.endDate}
          </p>
          <hr />
          <div className="flex text-wrap mt-2">{experience.experience}</div>
        </Snippet>
      ))}
    </div>
  );
}
