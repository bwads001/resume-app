import { Badge } from "@/components/ui/badge"

const skills = {
    "Frontend Development": [
        "Next.js",
        "React",
        "TypeScript",
        "Tailwind CSS",
    ],
    "Mobile Development": [ 
        "React Native",
        "Expo",
        "Flutter",
    ],
    "Backend Development": [
        "Node.js",
        "Python",
        "PHP",
        "C#",
    ],
    "Game Development": [
        "Unity",
        "Unreal Engine",
    ],
    "Databases, Caching & Messaging": [
        "MySQL",
        "MongoDB",
        "PostgreSQL",
        "Redis",
        "Memcached",
        "RabbitMQ",
    ],
    "DevOps, Cloud & Platform Engineering": [
        "Docker",
        "Kubernetes",
        "OpenStack",
        "GitHub Actions",
    ],
    "Platform Engineering and API Integration": [
        "Jira",
        "Jira Service Desk",
        "Confluence",
        "ServiceNow",
        "Salesforce",
        "HubSpot",
        "Qualtrics",
        "Slack",
    ],
    "Web Hosting & Server Management": [
        "cPanel",
        "Apache",
        "Nginx",
        "AlmaLinux",
        "Debian",
    ],
}

export function Skills() {
  return (
    <div className="py-24 pb-40 md:py-32 md:pb-56 lg:py-40 lg:pb-64 relative">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-semibold mb-12 text-center">Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {Object.entries(skills).map(([category, skillList]) => (
            <div key={category} className="space-y-6">
              <h3 className="text-2xl font-medium mb-4">{category}</h3>
              <div className="flex flex-wrap gap-2">
                {skillList.map((skill) => (
                  <Badge key={skill} variant="outline" className="text-sm border-primary text-primary hover:bg-primary hover:text-primary-foreground dark:border-primary dark:text-primary dark:hover:bg-primary dark:hover:text-primary-foreground">
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div 
        className="absolute bottom-0 left-0 right-0 h-16 md:h-24 lg:h-32 bg-primary/5 dark:bg-primary/10" 
        style={{ clipPath: 'polygon(0 100%, 100% 0, 100% 100%, 0% 100%)' }}
      ></div>
    </div>
  )
}

