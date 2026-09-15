# ComplyFlow AI

**Turn incoming regulatory change into evidence-backed execution.**

ComplyFlow AI is a regulatory change operations copilot prototype. It helps teams ingest regulatory and policy change, assess relevance against organisation context, extract source-backed obligations, keep judgement-based outputs under human review, track implementation, and export structured handoff data.

## Live demo

https://complyflow-copilot.lovable.app

Recommended judge path: Organisation Profile → Compliance Inbox → DORA hero analysis → obligation/source evidence → risk/owners/checklist → audit trail → Review & Handoff → How It Works.

## Trust boundary

Every extracted obligation that survives grounding is backed by a verbatim excerpt from the submitted source. Unsupported calendar dates are removed. Summaries, risk scores, owner suggestions and implementation plans remain drafts for human review.

## Prototype scope

Working now: browser workspace; public URL, text/Markdown file and pasted-text ingestion; hosted structured analysis; deterministic browser-based offline engine; evidence grounding; human review; checklist/audit-style tracking; JSON/CSV handoff.

Not claimed as current functionality: live Jira/ServiceNow/SharePoint/email integrations, authentication/RBAC, shared persistent database, customer-VPC deployment. Managed Cloud and customer-controlled Private deployment are production-roadmap directions.

Workspace state is browser-local. Hosted analysis may send submitted document text to the configured AI gateway. Only the offline engine guarantees that no analysis request leaves the browser.

## Stack

TanStack Start, React 19, Vite, TypeScript, Tailwind CSS, shadcn/ui, Zod.

## Demo source

The hero workflow uses a real public EU source: Commission Delegated Regulation (EU) 2025/301. Internal owners, tasks and workflow suggestions are illustrative demo content. Other seeded vendor/policy/network examples are fictional.

## Disclaimer

Prototype for demonstration purposes. Not legal advice.