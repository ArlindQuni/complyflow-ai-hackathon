# ComplyFlow AI — Devpost submission

## Tagline
The regulatory change operations copilot: turn incoming change into evidence-backed execution.

## Problem
Regulated companies do not have a summarisation problem; they have a change-execution problem. Notices, guidance updates, vendor amendments and internal policy revisions must be read, dated, split into obligations, assigned, implemented and evidenced. A hallucinated deadline or invented obligation is worse than no answer.

## What it does
ComplyFlow AI turns incoming regulatory change into a reviewable workflow: organisation context → compliance inbox → evidence-backed analysis → human review → tasks/handoff → audit trail. It supports pasted text, .txt/.md files and public URL import. Each extracted obligation includes a verbatim source excerpt. Unsupported dates are removed before storage. Summaries, risk scores, owner suggestions and plans remain drafts for human review.

The demo includes a real public legal source: Article 5 of Commission Delegated Regulation (EU) 2025/301, supplementing DORA, with its relative incident-reporting clocks. Internal owners, tasks, risk score and workflow are illustrative and are not prescribed by the regulation.

## How it was built
TanStack Start, React 19, TypeScript strict mode, Vite, Tailwind CSS, shadcn/ui and Zod. Hosted analysis uses the Lovable AI gateway when configured; a deterministic browser engine provides a no-key fallback with the same output shape. A grounding pass mechanically checks obligation evidence against the submitted source and removes unsupported dates. Public URL import validates public HTTP(S) targets, revalidates redirects, blocks private/local/reserved addresses and caps time/body/text size.

## Challenges
The hardest problem was hallucinated dates. Prompting alone was insufficient, so grounding deletes dates that cannot be verified in the source. A second challenge was making hosted and deterministic engines emit the same schema so the downstream workflow is mode-agnostic. The third was keeping prototype/roadmap claims explicit.

## Accomplishments
Evidence can be verified on screen by pinning an obligation to its source excerpt. The product degrades to an offline deterministic mode. It covers intake through review, tasks, exports and audit-style history rather than stopping at summarisation.

## What we learned
Trust in an AI workflow product is an engineering property. The most valuable safeguards are the ones that delete unsupported model output rather than merely warning about it.

## What's next
Multi-user persisted workspaces; SSO/RBAC; production connectors for email, RSS/web monitoring, Jira and ServiceNow; PDF/DOCX ingestion; document-version diffing; and an evaluation harness for grounding precision/recall.

## Truth boundaries
Prototype today: browser-local workspace, public URL/file/text ingestion, hosted analysis when configured, deterministic offline engine, evidence grounding, human review and JSON/CSV handoff. Not implemented today: authentication, shared database, live Jira/ServiceNow/Teams/Slack integrations, Cloud/Private deployment, SSO/RBAC, private connectors or customer-controlled model/storage. ComplyFlow is not legal advice and does not imply EU/regulator endorsement.

## Links
Live app: https://complyflow-copilot.lovable.app
Judge demo: https://complyflow-copilot.lovable.app/judge-demo
