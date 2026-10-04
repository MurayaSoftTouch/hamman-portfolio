import type { SkillGroup } from '../types/portfolio'

export const skills: readonly SkillGroup[] = [
  {
    title: 'Languages',
    items: ['Go', 'Python', 'TypeScript', 'Java', 'Kotlin', 'Elixir', 'Rust', 'C#', 'SQL'],
  },
  {
    title: 'Backend & Data',
    items: [
      'Spring Boot',
      'ASP.NET Core',
      'FastAPI',
      'Django',
      'Flask',
      'Node.js',
      'PostgreSQL',
      'Redis',
      'REST',
      'GraphQL',
      'OAuth2 / JWT',
    ],
  },
  {
    title: 'Cloud & Platform',
    items: [
      'AWS',
      'Google Cloud',
      'Azure',
      'Docker',
      'Kubernetes',
      'Terraform',
      'CloudFormation',
      'CI/CD',
    ],
  },
  {
    title: 'Reliability & Security',
    items: ['Prometheus', 'Grafana', 'ELK', 'OWASP API security', 'Zero-trust networking'],
  },
  {
    title: 'AI / ML',
    items: [
      'LLM evaluation',
      'Benchmark design',
      'Red-teaming',
      'RLHF',
      'SFT',
      'scikit-learn',
      'MLOps',
    ],
  },
]
