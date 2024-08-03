import { Link } from "@nextui-org/link";
import { Snippet } from "@nextui-org/snippet";
import { button as buttonStyles } from "@nextui-org/theme";

import { GithubIcon } from "@/components/icons";
import { subtitle, title } from "@/components/primitives";
import { siteConfig } from "@/config/site";
import { experienceList, userInfo } from "@/lib/data";

export default async function Home() {
  const user = await userInfo("Bryan Wadsworth");
  const experiences = await experienceList();

  return (
    <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
      <div className="inline-block max-w-lg text-center justify-center">
        <h1 className={title()}>{user.name}</h1>
        <h2 className={subtitle({ class: "mt-4" })}>{user.about}</h2>
      </div>

      <div className="flex flex-col gap-4 max-w-7xl">
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
      <div className="flex gap-3">
        <Link
          isExternal
          className={buttonStyles({ variant: "bordered", radius: "full" })}
          href={siteConfig.links.github}
        >
          <GithubIcon size={24} />
          GitHub
        </Link>
      </div>
    </section>
  );
}
