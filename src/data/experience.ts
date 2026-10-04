import type { ExperienceEntry, ExperienceSummary } from '../types/portfolio'

/** Source: Haman's current CV. Metrics in the CV are deliberately not repeated here. */
export const experience: readonly ExperienceEntry[] = [
  {
    company: 'GEICO',
    role: 'Senior Software Engineer',
    start: 'Jul 2026',
    end: null,
    location: 'Remote, USA',
    points: [
      'Builds data-intensive backend services in Go, with a focus on throughput and resilience.',
      'Designs document-processing pipelines that turn complex engineering datasets into LLM evaluation corpora.',
    ],
  },
  {
    company: 'Etsy',
    role: 'Senior Full-Stack Engineer & AI Systems Specialist',
    start: 'Jan 2025',
    end: 'Jun 2026',
    location: 'Remote, USA',
    points: [
      'Led development and deployment of ML systems, including RLHF and supervised fine-tuning pipelines.',
      'Designed evaluation frameworks for model accuracy, safety and alignment.',
    ],
  },
  {
    company: 'Thumbtack',
    role: 'Senior Software Engineer',
    start: 'Jul 2024',
    end: 'Dec 2024',
    location: 'Remote, USA',
    points: [
      'Designed adversarial evaluations and benchmark datasets to stress-test LLM reasoning.',
    ],
  },
  {
    company: 'Shield Safety Group',
    role: 'Senior Backend Engineer',
    start: 'Jan 2024',
    end: 'Jun 2024',
    location: 'London, UK',
    points: [
      'Built fault-tolerant, low-latency backend services and versioned REST and GraphQL APIs secured with OAuth2/JWT.',
    ],
  },
  {
    company: 'Lloyds Banking Group',
    role: 'Senior Backend Engineer & Fintech Systems Architect',
    start: 'Sep 2023',
    end: 'Dec 2023',
    location: 'London, UK',
    points: [
      'Architected distributed banking services with secure APIs and payment-gateway integrations.',
      'Led the modernisation of legacy monoliths into service-oriented Elixir and Python services.',
    ],
  },
  {
    company: 'Capterra',
    role: 'Senior Product Engineer',
    start: 'Dec 2022',
    end: 'Jun 2023',
    location: 'Remote, USA',
    points: [
      'Delivered customer-facing payments and account-services features, working with compliance on PCI-DSS and internal risk controls.',
    ],
  },
]

export const earlierExperience: readonly ExperienceEntry[] = [
  {
    company: 'Wellfound',
    role: 'Senior Software Architect',
    start: 'Jul 2021',
    end: 'Nov 2022',
    points: ['API-gateway patterns, service-to-service authentication and security reviews.'],
  },
  {
    company: 'Quantcast',
    role: 'Senior DevOps Engineer',
    start: 'Apr 2020',
    end: 'Jun 2021',
    points: ['Terraform, CloudFormation, zero-trust networking and Prometheus/Grafana/ELK.'],
  },
  {
    company: 'Miles IT',
    role: 'Software Engineer',
    start: 'Apr 2017',
    end: 'Mar 2020',
    points: ['Multi-tenant web applications and OAuth2/JWT-secured REST and GraphQL APIs.'],
  },
]

export const aiContractWork: ExperienceSummary = {
  title: 'AI training & LLM evaluation',
  period: '2018 – 2026',
  organisations:
    'Part-time contracts alongside full-time engineering roles — Starling, Eigent AI, TELUS Digital AI, DataAnnotation.tech, Remotasks, Lionbridge AI',
  description:
    'LLM benchmarking and red-teaming, RLHF and SFT data, chain-of-thought reference solutions, reviews of AI-generated Python and TypeScript, and QA for multimodal annotation.',
}
