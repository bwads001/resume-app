import React from 'react'
import { Document, Page, Text, View, StyleSheet, Image } from '@react-pdf/renderer'
import { skills } from '@/data/skills'
import { jobs, Job } from '@/data/experience'
import { projects, Project } from '@/data/projects'
import { contact } from '@/data/contact'

// Using built-in fonts for better reliability
const styles = StyleSheet.create({
  page: {
    fontFamily: 'Helvetica',
    fontSize: 10,
    lineHeight: 1.4,
    color: '#333333',
    padding: 35,
  },
  header: {
    marginBottom: 30,
    textAlign: 'center',
  },
  name: {
    fontSize: 24,
    fontFamily: 'Helvetica-Bold',
    color: '#000000',
    marginBottom: 8,
  },
  title: {
    fontSize: 14,
    color: '#666666',
    marginBottom: 15,
  },
  contact: {
    fontSize: 10,
    color: '#666666',
  },
  contactLine: {
    marginBottom: 3,
  },
  section: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 14,
    fontFamily: 'Helvetica-Bold',
    color: '#000000',
    marginBottom: 12,
    textTransform: 'uppercase',
    paddingBottom: 3,
    borderBottomWidth: 1,
    borderBottomColor: '#cccccc',
  },
  jobContainer: {
    marginBottom: 18,
  },
  jobHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 4,
  },
  jobTitle: {
    fontSize: 12,
    fontFamily: 'Helvetica-Bold',
    color: '#000000',
  },
  company: {
    fontSize: 10,
    color: '#666666',
    marginTop: 2,
  },
  period: {
    fontSize: 10,
    color: '#666666',
    textAlign: 'right',
  },
  description: {
    marginTop: 4,
  },
  bullet: {
    fontSize: 10,
    lineHeight: 1.3,
    marginBottom: 3,
    color: '#333333',
  },
  skillsPageContainer: {
    flexDirection: 'row',
  },
  skillsColumnLeft: {
    width: '50%',
    paddingRight: 10, // Creates a gutter between columns
  },
  skillsColumnRight: {
    width: '50%',
    paddingLeft: 10,  // Creates a gutter between columns
  },
  skillCategory: {
    marginBottom: 18, // Adjusted from 20 for slightly tighter vertical packing if needed
  },
  skillCategoryTitle: {
    fontSize: 11,
    fontFamily: 'Helvetica-Bold',
    color: '#000000',
    marginBottom: 7,
  },
  skillsTagContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 3,
  },
  skillTag: {
    fontSize: 9.5,
    fontFamily: 'Helvetica',
    color: '#1A365D',
    backgroundColor: '#EBF8FF',
    paddingHorizontal: 9,
    paddingTop: 5,
    paddingBottom: 3,
    borderRadius: 5,
    marginRight: 7,
    marginBottom: 7,
    borderWidth: 1,
    borderColor: '#BEE3F8',
    lineHeight: 1.05,
  },
  projectContainer: {
    marginBottom: 15,
    flexDirection: 'row',
    gap: 10,
  },
  projectImage: {
    width: 120,
    height: 80,
    borderRadius: 3,
    border: '1px solid #dddddd',
  },
  projectContent: {
    flex: 1,
  },
  projectTitle: {
    fontSize: 12,
    fontFamily: 'Helvetica-Bold',
    color: '#000000',
    marginBottom: 2,
  },
  projectDescription: {
    fontSize: 10,
    color: '#333333',
    marginBottom: 4,
    lineHeight: 1.3,
  },
  projectTech: {
    fontSize: 9,
    color: '#666666',
    fontFamily: 'Helvetica-Oblique',
  },
  projectUrl: {
    fontSize: 9,
    color: '#0077cc', // A blue color to suggest a link
    fontFamily: 'Helvetica-Oblique',
    marginTop: 3,
  },
})

interface ResumePDFProps {
  name?: string
  jobTitle?: string
  email?: string
  location?: string
  website?: string
}

export function ResumePDF({
  name = contact.name,
  jobTitle = contact.jobTitle,
  email = contact.email,
  location = contact.location,
  website = contact.website
}: ResumePDFProps): React.JSX.Element {
  const skillEntries = Object.entries(skills);
  const midpoint = Math.ceil(skillEntries.length / 2);
  const leftColumnSkills = skillEntries.slice(0, midpoint);
  const rightColumnSkills = skillEntries.slice(midpoint);

  return (
    <Document>
      <Page size="A4" style={styles.page}>
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.name}>{name}</Text>
          <Text style={styles.title}>{jobTitle}</Text>
          <View style={styles.contact}>
            <View style={styles.contactLine}>
              <Text>{[email, location].filter(Boolean).join(' • ')}</Text>
            </View>
            <View style={styles.contactLine}>
              <Text>{website}</Text>
            </View>
          </View>
        </View>

        {/* Experience Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Professional Experience</Text>
          {jobs.map((job: Job, index: number) => (
            <View key={index} style={styles.jobContainer} wrap={false}>
              <View style={styles.jobHeader}>
                <View>
                  <Text style={styles.jobTitle}>{job.title}</Text>
                  <Text style={styles.company}>{job.company}</Text>
                </View>
                <Text style={styles.period}>{job.period}</Text>
              </View>
              <View style={styles.description}>
                {job.description.map((bullet: string, bulletIndex: number) => (
                  <Text key={bulletIndex} style={styles.bullet}>
                    • {bullet}
                  </Text>
                ))}
              </View>
            </View>
          ))}
        </View>

        {/* Skills Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Technical Skills</Text>
          <View style={styles.skillsPageContainer}>
            <View style={styles.skillsColumnLeft}>
              {leftColumnSkills.map(([category, skillList]) => (
                <View key={category} style={styles.skillCategory} wrap={false}>
                  <Text style={styles.skillCategoryTitle}>{category}</Text>
                  <View style={styles.skillsTagContainer}>
                    {skillList.map((skill: string, skillIndex: number) => (
                      <Text key={skillIndex} style={styles.skillTag}>
                        {skill}
                      </Text>
                    ))}
                  </View>
                </View>
              ))}
            </View>
            <View style={styles.skillsColumnRight}>
              {rightColumnSkills.map(([category, skillList]) => (
                <View key={category} style={styles.skillCategory} wrap={false}>
                  <Text style={styles.skillCategoryTitle}>{category}</Text>
                  <View style={styles.skillsTagContainer}>
                    {skillList.map((skill: string, skillIndex: number) => (
                      <Text key={skillIndex} style={styles.skillTag}>
                        {skill}
                      </Text>
                    ))}
                  </View>
                </View>
              ))}
            </View>
          </View>
        </View>

        {/* Key Projects Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Key Projects</Text>
          {projects.slice(0, 2).map((project: Project, projectIndex: number) => (
            <View key={projectIndex} style={styles.projectContainer} wrap={false}>
              {project.image && (
                <Image style={styles.projectImage} src={project.image} />
              )}
              <View style={styles.projectContent}>
                <Text style={styles.projectTitle}>{project.title}</Text>
                <Text style={styles.projectDescription}>
                  {project.description}
                </Text>
                <Text style={styles.projectTech}>
                  Technologies: {project.technologies.slice(0, 5).join(', ')}
                </Text>
                {project.url && (
                  <Text style={styles.projectUrl}>
                    {project.url}
                  </Text>
                )}
              </View>
            </View>
          ))}
        </View>
      </Page>
    </Document>
  )
} 