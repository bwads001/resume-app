import { Badge } from "@/components/ui/badge"
import { skills } from "@/data/skills";

export function Skills() {
  return (
    <div id="skills" className="py-14 pb-28 md:py-20 md:pb-40 lg:py-28 lg:pb-56 relative">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-semibold mb-12 text-center">Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {Object.entries(skills).map(([category, skillList]) => (
            <div key={category} className="space-y-6">
              <h3 className="text-2xl font-medium mb-4">{category}</h3>
              <div className="flex flex-wrap gap-2">
                {skillList.map((skill) => (
                  <Badge key={skill} variant="skill">
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div 
        className="absolute bottom-0 left-0 right-0 h-16 md:h-24 lg:h-32 bg-primary/15" 
        style={{ clipPath: 'polygon(0 100%, 100% 0, 100% 100%, 0% 100%)' }}
      ></div>
    </div>
  )
}

