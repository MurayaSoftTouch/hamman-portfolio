import type { ExpertiseArea } from '../types/portfolio'

export const expertise: readonly ExpertiseArea[] = [
  {
    title: 'Distributed Systems',
    summary:
      'Service boundaries and failure handling for systems where duplicated or lost work is expensive.',
    points: [
      'Idempotent commands and request fingerprinting',
      'Row locking and lease-based work claiming',
      'Fail-closed integration between services',
      'Invariants enforced in the database',
    ],
  },
  {
    title: 'Backend & APIs',
    summary:
      'Versioned, backwards-compatible APIs, payment integrations and secure persistence for regulated domains.',
    points: [
      'REST and GraphQL API design',
      'OAuth2/JWT and service-to-service authentication',
      'API security reviews (BOLA, IDOR, injection)',
      'PostgreSQL schema design and migrations',
    ],
  },
  {
    title: 'Cloud & Platform',
    summary: 'The infrastructure, delivery pipelines and observability needed to run services.',
    points: [
      'Terraform and CloudFormation',
      'Docker, Kubernetes and CI/CD',
      'Prometheus, Grafana and ELK',
      'Secrets management and least-privilege access',
    ],
  },
  {
    title: 'AI Systems',
    summary:
      'ML services and model evaluation held to the same engineering standard as any service.',
    points: [
      'LLM evaluation, benchmarking and red-teaming',
      'RLHF and supervised fine-tuning data',
      'Reproducible, versioned model artifacts',
      'Uncertainty-aware predictions with human review',
    ],
  },
]
