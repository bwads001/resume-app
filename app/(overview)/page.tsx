import { subtitle, title } from "@/app/components/primitives";
import { WorkExperience } from "@/app/components/work-experience";
import { userInfo } from "@/app/lib/data";

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
    </section>
  );
}
