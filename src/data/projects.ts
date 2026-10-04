import type { Project } from '../types/portfolio'

/**
 * Every highlight below was checked against the repository source code, not only its README.
 * Keep it that way: describe what is implemented, not what is on the roadmap.
 */
export const projects: readonly Project[] = [
  {
    slug: 'ledgercore',
    name: 'LedgerCore',
    category: 'Financial systems',
    status: 'stable',
    featured: true,
    problem:
      'A double-entry ledger and transaction-policy platform where financial correctness is enforced by the database, not only by application code.',
    stack: ['.NET / ASP.NET Core', 'Spring Boot', 'PostgreSQL', 'OpenAPI', 'Testcontainers'],
    highlights: [
      'Balanced postings, legal lifecycle transitions and immutable posted history enforced by PostgreSQL constraints and triggers; corrections happen only through mirrored reversals.',
      'Idempotent posting and reversal using a required Idempotency-Key, SHA-256 request fingerprints and a command claim the database must see committed, with row locks taken in a fixed order to avoid deadlocks.',
      'A separate Spring Boot policy service behind a versioned OpenAPI and JSON Schema contract, checked by provider and consumer tests. The ledger fails closed when the policy service is unavailable.',
    ],
    note: 'Design decisions are recorded in 16 ADRs. Tests run against real PostgreSQL via Testcontainers, with Toxiproxy for fault injection between services.',
    repoUrl: 'https://github.com/MurayaSoftTouch/LedgerCore',
  },
  {
    slug: 'incidentiq',
    name: 'IncidentIQ',
    category: 'AI systems',
    status: 'stable',
    problem:
      'Incident triage that classifies reports, flags uncertain predictions for human review and recommends a priority — without overstating what the model knows.',
    stack: ['Python', 'scikit-learn', 'FastAPI', 'Next.js', 'Docker'],
    highlights: [
      'A TF-IDF classifier selected on validation macro-F1 against baseline candidates, using splits grouped by time and near-duplicates and a single held-out test evaluation.',
      'Every prediction reports its top-class margin and is labelled uncalibrated; low-margin cases are routed to human review, and reviewer feedback is stored append-only.',
      'Versioned model artifacts verified by SHA-256 on load — the API refuses to serve a model that does not match its metadata.',
    ],
    note: 'Trained on synthetic data and documented in a model card. Priority comes from a transparent rule-based policy, not from the model.',
    repoUrl: 'https://github.com/MurayaSoftTouch/IncidentIQ',
  },
  {
    slug: 'pulsestream',
    name: 'PulseStream',
    category: 'Event processing',
    status: 'active-development',
    problem:
      'A Rust event-processing service built around durable admission, bounded concurrency and recovery from worker crashes.',
    stack: ['Rust', 'Tokio', 'axum', 'PostgreSQL', 'sqlx'],
    highlights: [
      'Events are accepted only after the PostgreSQL commit; idempotency keys are scoped per source, enforced by a unique constraint, and exact replays are detected by request fingerprint.',
      'Workers claim events with FOR UPDATE SKIP LOCKED under time-limited leases. Expired leases are reclaimed, giving at-least-once processing with owner-checked completion.',
      'Bounded worker concurrency and graceful shutdown on SIGINT and SIGTERM.',
    ],
    note: 'Retries, dead-lettering and metrics are planned for later milestones and are not implemented yet.',
    repoUrl: 'https://github.com/MurayaSoftTouch/PulseStream',
  },
]
