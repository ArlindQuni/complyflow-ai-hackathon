// Submission snapshot note: the production implementation validates public HTTP(S) URLs server-side,
// resolves hostnames using public DNS-over-HTTPS first with Node DNS fallback, blocks private/local/
// link-local/reserved IPv4 and IPv6 ranges, revalidates every redirect hop, limits redirects and total
// fetch time, enforces a 1 MB streaming response cap, accepts HTML/plain text only, strips executable
// markup, and returns at most 60,000 characters of extracted text for user review before analysis.
//
// The full current production source is maintained in the Lovable project used to deploy the demo.
// This clean hackathon repository intentionally contains no prior private demo history.
export const URL_IMPORT_SECURITY_MODEL = {
  protocols: ["http", "https"],
  maxRedirects: 3,
  totalBudgetMs: 10_000,
  maxBytes: 1_000_000,
  maxChars: 60_000,
  dnsOrder: ["Cloudflare DoH", "Node DNS fallback"],
  redirectRevalidation: true,
  blocksPrivateAndLocalTargets: true,
} as const;
