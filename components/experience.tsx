import { Job } from "@/data/experience"
import Link from "next/link"

interface ExperienceProps {
  jobs: Job[]
}

export function Experience({ jobs }: ExperienceProps) {
  return (
    <div className="bg-primary/5 dark:bg-primary/10 py-16 md:py-30 lg:py-36">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-semibold tracking-tight mb-12">
          Experience
        </h2>
        <div className="space-y-12">
          {jobs.map((job, index) => (
            <div key={index} className="flex flex-col md:flex-row gap-4 md:gap-8">
              <div className="md:w-1/4">
                <p className="text-sm text-muted-foreground">{job.period}</p>
              </div>
              <div className="md:w-3/4">
                <h3 className="text-xl font-semibold mb-1 text-primary dark:text-primary">{job.title}</h3>
                <p className="text-sm text-muted-foreground mb-1">
                  {job.url ? (
                    <Link 
                      href={job.url} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="text-muted-foreground hover:text-white transition-colors duration-200 hover:underline font-medium dark:text-muted-foreground dark:hover:text-white"
                    >
                      {job.company}
                    </Link>
                  ) : (
                    job.company
                  )}
                </p>
                <ul className="list-disc list-inside space-y-2 mt-4">
                  {job.description.map((item, i) => (
                    <li key={i} className="text-sm text-muted-foreground">
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

