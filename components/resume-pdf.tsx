import React from 'react'
import { Document, Page, Text, View, StyleSheet, Font } from '@react-pdf/renderer'
import { skills } from '@/data/skills'
import { jobs, Job } from '@/data/experience'
import { contact } from '@/data/contact'

// Register fonts for better typography
Font.register({
  family: 'Inter',
  fonts: [
    { src: 'https://fonts.gstatic.com/s/inter/v13/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuLyfAZ9hiJ-Ek-_EeA.woff2' },
    { src: 'https://fonts.gstatic.com/s/inter/v13/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuGKYAZ9hiJ-Ek-_EeA.woff2', fontWeight: 'bold' },
  ],
})

const styles = StyleSheet.create({
  page: {
    fontFamily: 'Inter',
    fontSize: 10,
    lineHeight: 1.4,
    color: '#1f2937',
    padding: 40,
  },
  header: {
    marginBottom: 30,
    textAlign: 'center',
  },
  name: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#111827',
    marginBottom: 8,
  },
  title: {
    fontSize: 16,
    color: '#6b7280',
    marginBottom: 4,
  },
  contact: {
    fontSize: 10,
    color: '#6b7280',
    marginTop: 8,
  },
  section: {
    marginBottom: 25,
  },
  sectionTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#111827',
    marginBottom: 12,
    borderBottom: '1px solid #e5e7eb',
    paddingBottom: 4,
  },
  jobContainer: {
    marginBottom: 20,
  },
  jobHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 6,
  },
  jobTitle: {
    fontSize: 11,
    fontWeight: 'bold',
    color: '#111827',
  },
  company: {
    fontSize: 10,
    color: '#374151',
    marginTop: 2,
  },
  period: {
    fontSize: 9,
    color: '#6b7280',
    textAlign: 'right',
  },
  description: {
    marginTop: 6,
  },
  bullet: {
    fontSize: 9,
    lineHeight: 1.5,
    marginBottom: 3,
    color: '#374151',
  },
  skillsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 15,
  },
  skillCategory: {
    width: '48%',
    marginBottom: 12,
  },
  skillCategoryTitle: {
    fontSize: 10,
    fontWeight: 'bold',
    color: '#111827',
    marginBottom: 6,
  },
  skillsList: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 4,
  },
  skill: {
    fontSize: 8,
    backgroundColor: '#f3f4f6',
    color: '#374151',
    padding: '3 6',
    borderRadius: 3,
    marginBottom: 3,
  },
})

interface ResumePDFProps {
  name?: string
  jobTitle?: string
  email?: string
  location?: string
  linkedin?: string
  website?: string
}

export function ResumePDF({
  name = contact.name,
  jobTitle = contact.jobTitle,
  email = contact.email,
  location = contact.location,
  linkedin = contact.linkedin,
  website = contact.website
}: ResumePDFProps): React.JSX.Element {
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.name}>{name}</Text>
          <Text style={styles.title}>{jobTitle}</Text>
          <View style={styles.contact}>
            <Text>
              {[email, location].filter(Boolean).join(' • ')}
            </Text>
            <Text>
              {[linkedin, website].filter(Boolean).join(' • ')}
            </Text>
          </View>
        </View>

        {/* Experience Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Professional Experience</Text>
          {jobs.map((job: Job, index: number) => (
            <View key={index} style={styles.jobContainer}>
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
          <View style={styles.skillsGrid}>
            {Object.entries(skills).map(([category, skillList]) => (
              <View key={category} style={styles.skillCategory}>
                <Text style={styles.skillCategoryTitle}>{category}</Text>
                <View style={styles.skillsList}>
                  {skillList.map((skill: string, index: number) => (
                    <Text key={index} style={styles.skill}>
                      {skill}
                    </Text>
                  ))}
                </View>
              </View>
            ))}
          </View>
        </View>
      </Page>
    </Document>
  )
} 