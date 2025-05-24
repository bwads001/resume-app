import { projects } from '@/data/projects'
import { Button } from '@/components/ui/button'
import { ExternalLink, Github } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Projects | Bryan Wadsworth',
  description: 'Explore my portfolio of web development, platform engineering, and AI integration projects.',
}

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-20">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl mb-4">
            Projects
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A collection of projects I&apos;ve built, ranging from enterprise solutions to personal experiments.
          </p>
        </div>

        {/* Subtle separator */}
        <div className="border-t border-border/50 mx-6"></div>

        {/* Projects Grid */}
        <div className="grid gap-8 md:gap-12">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="group relative bg-card border rounded-lg overflow-hidden hover:shadow-lg transition-all duration-300"
            >
              {/* Centered Project Title and Meta */}
              <div className="text-center p-6 pb-4">
                <h2 className="text-2xl font-bold mb-3">{project.title}</h2>
                <div className="flex items-center justify-center gap-4 text-sm text-muted-foreground mb-4">
                  <span className="bg-primary/10 text-primary px-2 py-1 rounded-md">
                    {project.category}
                  </span>
                  <span className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300 px-2 py-1 rounded-md">
                    {project.status}
                  </span>
                </div>
                <p className="text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                  {project.longDescription || project.description}
                </p>
              </div>

              {/* Subtle separator */}
              <div className="border-t border-border/50 mx-6"></div>

              <div className="flex flex-col lg:flex-row px-6 pb-6 gap-8 lg:gap-12 pt-6">
                {/* Project Image */}
                {project.image && (
                  <div className="lg:w-1/2">
                    <div className="aspect-video relative">
                      <Image
                        src={project.image}
                        alt={`${project.title} screenshot`}
                        fill
                        className="object-cover rounded-lg border-2 border-border shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.01] cursor-pointer"
                      />
                    </div>
                  </div>
                )}
                
                {/* Project Details */}
                <div className="lg:w-1/2 space-y-6">
                  {/* Highlights */}
                  <div>
                    <h3 className="font-semibold mb-3">Key Highlights:</h3>
                    <ul className="space-y-2">
                      {project.highlights.map((highlight, highlightIndex) => (
                        <li key={highlightIndex} className="flex items-start">
                          <span className="text-primary mr-2">•</span>
                          <span className="text-sm text-muted-foreground">{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Technologies */}
                  <div>
                    <h3 className="font-semibold mb-3">Technologies:</h3>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <span 
                          key={techIndex}
                          className="bg-secondary text-secondary-foreground px-3 py-1 rounded-md text-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Links */}
                  <div className="flex gap-4">
                    {project.url && (
                      <Button asChild>
                        <Link href={project.url} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="mr-2 h-4 w-4" />
                          View Live
                        </Link>
                      </Button>
                    )}
                    {project.github && (
                      <Button variant="outline" asChild>
                        <Link href={project.github} target="_blank" rel="noopener noreferrer">
                          <Github className="mr-2 h-4 w-4" />
                          View Code
                        </Link>
                      </Button>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16 p-8 bg-card border rounded-lg">
          <h2 className="text-2xl font-bold mb-4">Interested in Working Together?</h2>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            I&apos;m always open to discussing new opportunities and interesting projects.
          </p>
          <Button size="lg" asChild>
            <Link href="mailto:wadsworth.bryan@gmail.com">
              Get In Touch
            </Link>
          </Button>
        </div>
      </div>
    </div>
  )
} 