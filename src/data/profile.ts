import type { Profile } from '../types/portfolio'

export const profile: Profile = {
  name: 'Haman Muraya',
  role: 'Senior Software Engineer',
  headline: 'I build backend and distributed systems that stay correct when things fail.',
  intro:
    'Backend, fintech and platform engineering across banking, payments, insurance and e-commerce — plus production ML and LLM evaluation. My recent work covers transactional ledgers, durable event processing and ML services with human review built in.',
  about: [
    'I’m a senior software engineer with more than nine years of experience building backend services for fintech, banking, insurance and e-commerce platforms. Most of that work sits where correctness matters: payment integrations, versioned APIs that other teams depend on, service-to-service authentication, and moving legacy monoliths onto service-oriented architectures.',
    'I have also worked on the platform side — infrastructure as code, least-privilege access, and observability with Prometheus, Grafana and ELK — and I review systems for API security risks such as broken object-level authorization and injection.',
    'Alongside that, I have long experience evaluating and training ML and large language models: benchmarks, adversarial evaluations, scoring rubrics and reviews of AI-generated code. I treat model quality as an engineering problem, held to the same standard as the services around it.',
  ],
  email: 'hamanmuraya009@gmail.com',
  siteUrl: 'https://hamman-portfolio.vercel.app/',
  github: { label: 'GitHub', href: 'https://github.com/MurayaSoftTouch' },
  linkedin: { label: 'LinkedIn', href: 'https://linkedin.com/in/haman-mur' },
}
