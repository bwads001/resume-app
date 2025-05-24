import { Job } from "@/data/experience"
import Link from "next/link"

interface ExperienceProps {
  jobs: Job[]
}

export function Experience({ jobs }: ExperienceProps) {
  return (
    <div id="experience" className="bg-primary/15 py-16 md:py-28 lg:py-36">
      <div className="container mx-auto px-4">
        <h2 className="text-5xl font-semibold tracking-tight mb-12 pb-12">
          Experience
        </h2>
        <div className="space-y-12">
          {jobs.map((job, index) => (
            <div key={index} className="flex flex-col md:flex-row gap-4 md:gap-8">
              <div className="md:w-1/6">
                <p className="text-sm text-foreground/80 pt-5">{job.period}</p>
              </div>
              <div className="md:w-5/6">
                <h3 className="text-xl font-bold mb-1 text-primary dark:text-primary">{job.title}</h3>
                <p className="text-sm text-muted-foreground mb-1">
                  {job.url ? (
                    <Link 
                      href={job.url} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="text-muted-foreground hover:text-foreground transition-colors duration-200 hover:underline font-medium dark:text-muted-foreground dark:hover:text-white"
                    >
                      {job.company}
                    </Link>
                  ) : (
                    job.company
                  )}
                </p>
                <ul className="list-disc list-inside space-y-2 mt-4">
                  {job.description.map((item, i) => (
                    <li key={i} className="text-sm">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

