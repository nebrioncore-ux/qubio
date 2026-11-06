# Qubio

Qubio is an SMS services marketplace foundation built with Next.js App Router, TypeScript, Tailwind CSS, and Prisma for Neon PostgreSQL.

**This is a mock preview.** No accounts, payments, SMS messages, real wallets, or refunds are processed. Nothing is deployed. The public administrator page is a design preview, not an authenticated management tool.

## Run on your computer

1. Install Node.js 22 LTS and open a terminal in this project.
2. Run `npm install`. This downloads dependencies and creates package-lock.json; commit that lockfile after verifying the installation.
3. Run `npm run dev`.
4. Open http://localhost:3000.

No database password or environment file is needed to view the mock pages. For a production-style local check, run `npm run build`, then `npm start`. Run `npm run typecheck` after building.

## Explore

- `/`: responsive homepage, searchable services, country filter.
- `/dashboard`: fictional customer balance and order history.
- `/admin`: public administrator design preview; no management controls.
- `/developers`: planned API capabilities.
- `/refund-policy`: draft rules requiring owner review.
- `/api`: intentionally returns HTTP 503 because the business API is disabled.

Mock data lives in `src/lib/mock-data.ts`. Page layouts live in `src/app`. The reusable catalog lives in `src/components`.

## Database preparation — not connected

`prisma/schema.prisma` sketches users, wallets, services, orders, ledger entries, refund requests, and business API key metadata. Prices use integer kobo to avoid rounding errors. There is no password table: a future authentication provider will own sign-in.

`src/lib/db.ts` is server-only and creates the Prisma client only when explicitly called. The preview never calls it. No Neon resources or migrations have been created.

After owner approval for live database work:
1. Choose the authentication provider and review the schema.
2. Set `DATABASE_URL` (Neon pooled connection) and `DIRECT_URL` (direct migration connection) in a local ignored `.env` file or hosting secret store. Never paste passwords into chat, browser code, or GitHub.
3. Run `npm run db:validate` and review a generated migration before applying it.
4. Add database constraints for nonnegative wallet balances, positive quantities/prices, signed ledger entries, and ownership consistency. Add transactional debit/refund operations, concurrency controls, and audit records before enabling purchases.

The schema is a starting point, not a complete financial system. Never edit a balance directly from a browser.

## Required before live launch

Owner approval is required before major features or external integrations:
- Real sign-in, session handling, server-side ownership and administrator-role checks.
- Database migrations and transaction/ledger integrity tests.
- Nigerian payment-provider selection, verified signed callbacks, amount/currency checks, replay protection, and reconciliation.
- Supplier authorization, consent controls, delivery callbacks, and clear approved service/refund terms.
- Hashed API keys, scopes, rate limits, audit logs, secret handling, and abuse controls.

There are deliberately no live provider SDKs, sign-in forms, funding buttons, or API key creation tools.

## Verification status

Dependency installation and build were blocked in the authoring environment by its unavailable network proxy. No successful build or browser test is claimed. Run the commands above when network access is restored.

Manual checks after installation:
- Search for "alerts"; confirm only the Kenya example appears.
- Select Nigeria; confirm only Nigerian examples appear.
- Search for an unknown word; confirm the empty state appears.
- Clear search and filters; confirm all four examples return.
- Open every navigation/footer link and check mobile layout and keyboard focus.
- Confirm the dashboard explicitly identifies fictional data.
- Confirm `/api` returns 503 and no database credentials are requested.
