# Resume Data Configuration

This directory contains the data files that populate your dynamic resume.

## Files Overview

- `contact.ts` - Your personal contact information
- `experience.ts` - Your work experience and job history
- `skills.ts` - Your technical skills organized by category

## Customizing Your Contact Information

Edit `contact.ts` to update your personal information:

```typescript
export const contact = {
  name: "Your Full Name",
  jobTitle: "Your Professional Title",
  email: "your.email@example.com",
  location: "City, State" or "Remote",
  linkedin: "linkedin.com/in/your-profile",
  website: "yourportfolio.com" or "github.com/yourusername",
}
```

## Adding Work Experience

Edit `experience.ts` to add or modify your job history. Each job should follow this structure:

```typescript
{
  title: "Job Title",
  company: "Company Name",
  period: "MM/YYYY - MM/YYYY" or "MM/YYYY - Present",
  description: [
    "Achievement or responsibility bullet point",
    "Another achievement with specific metrics if possible",
    "Focus on impact and results"
  ],
  url: "https://company-website.com" // Optional
}
```

## Managing Skills

Edit `skills.ts` to organize your technical skills by category. The current categories are:

- Programming Languages & Frameworks
- Frontend Development
- Backend Development
- Mobile Development
- Game Development
- Databases & Data Management
- Cloud Platforms & Infrastructure
- DevOps & Platform Engineering
- Server & System Administration
- Data Storage & File Management
- SaaS Platforms & Integrations
- AI & Machine Learning

Feel free to add, remove, or modify categories based on your expertise.

## PDF Generation

The resume PDF is generated dynamically from this data using `@react-pdf/renderer`. Any changes you make to these files will automatically be reflected in the generated PDF.

## Education Section

Currently, there's no education section since you mentioned not having a college degree. If you want to add certifications, online courses, or other educational achievements, you can:

1. Create an `education.ts` file
2. Add the education section to the PDF component
3. Include relevant certifications, bootcamps, or professional development 