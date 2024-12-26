export interface Job {
  title: string
  company: string
  period: string
  description: string[]
  url?: string
}

export const jobs: Job[] = [
  {
    title: "Director of Technology",
    company: "Bespoke Tech Solutions",
    period: "08/2023 - Present",
    description: [
      "Guiding software development processes in a startup environment, leveraging extensive experience in platform engineering.",
      "Implementing CI/CD pipelines to streamline development and deployment workflows.",
      "Crafting solutions using modern tech stacks for diverse projects, including business apps, mobile apps, websites, and games.",
      "Managing platform engineering while expanding responsibilities to encompass broader technology strategy and implementation."
    ],
    url: "https://mybts.io/"
  },
  {
    title: "SaaS Platform Systems Engineer",
    company: "GoDaddy.com",
    period: "09/2019 - 08/2023",
    description: [
      "Utilized Jira Service Desk API and workflow automations to streamline processes, enhance efficiency, and integrate seamlessly with product development teams.",
      "Ensured seamless integration for services and support fulfillment.",
      "Engineered applications using Node.js and Python to integrate with Jira Service Desk."
    ],
    url: "https://www.godaddy.com/"
  },
  {
    title: "System Analyst II",
    company: "GoDaddy.com",
    period: "12/2018 - 09/2019",
    description: [
      "Led migration efforts to transition from outdated proprietary ticketing systems to Jira Service Desk for all customer service and support teams.",
      "Partnered with leaders to develop product workflows and establish dashboards and analytics for active tickets.",
      "Orchestrated the successful launch of new DIFY service products.",
      "Oversaw the migration of NPS systems to Qualtrics and implemented custom integrations with Jira."
    ],
    url: "https://www.godaddy.com/"
  },
  {
    title: "Professional Web Services - Design Support Team",
    company: "GoDaddy.com",
    period: "08/2016 - 12/2018",
    description: [
      "Built a custom hosting solution for internal tools and resources using Nginx, MySQL, and PHP.",
      "Created internal tools and resources for agent and customer onboarding and reference.",
      "Designed resources for sales teams to educate potential customers on web design and service offerings."
    ],
    url: "https://www.godaddy.com/"
  },
  {
    title: "Advanced Hosting Support",
    company: "GoDaddy.com",
    period: "09/2013 - 08/2014",
    description: [
      "Provided technical support for Linux and Windows hosting products.",
      "Assisted customers with website migrations, DNS configuration, and email setup.",
      "Resolved complex hosting issues and provided guidance on best practices."
    ],
    url: "https://www.godaddy.com/"
  }
]

