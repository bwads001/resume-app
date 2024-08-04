import { Link } from "@nextui-org/link";
import { button as buttonStyles } from "@nextui-org/theme";

import { userInfo } from "@/app/lib/data";
import { GithubIcon } from "@/components/icons";
import { subtitle, title } from "@/components/primitives";
import { WorkExperience } from "@/components/work-experience";
import { siteConfig } from "@/config/site";

export default async function Home() {
  const user = await userInfo("Bryan Wadsworth");

  return (
    <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
      <div className="inline-block max-w-lg text-center justify-center">
        <h1 className={title()}>{user.name}</h1>
        <h2 className={subtitle({ class: "mt-4" })}>{user.about}</h2>
      </div>
      <div className="flex flex-col gap-4 max-w-7xl">
        <WorkExperience />
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
