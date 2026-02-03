---
title: "When Should a SaaS Switch to a Merchant of Record Model?"
description: "When Should a SaaS Switch to a Merchant of Record Model?"
pubDate: "2022-07-08"
tags: ["Merchant of Record", "Saas"]
heroImage: "https://framerusercontent.com/images/IjTEypdEwEIk3XUq5SnjnR1pknE.jpg?width=6000&height=4000"
authorName: "Joshua D'Costa"
authorImage: "https://framerusercontent.com/images/Q0BOBIY5urRlJq261mdmtlX6nYA.png?width=288&height=288"
authorDesignation: "Growth & Marketing"
---

Customers may abandon carts due to surprise taxes or unavailable payment methods, and your engineers end up buried in compliance tasks. Selling internationally means dealing with different tax rules, payment methods, currencies, and regulations in every market.

This creates operational drag and high costs that steal engineering time from your core product. An MoR (Merchant of Record) solution can offload these headaches: it handles taxes, compliance, fraud checks and more, letting you focus on growth instead of global billing.

## When to Consider a Merchant of Record (MoR) for Your SaaS

A SaaS business should consider a dedicated MoR model when international sales and complexity start to overwhelm in-house operations. In situations like:

- **Heavy international sales:** Less than 20–50% of revenue comes from markets outside your HQ.

- **No local entity in key markets:** High traffic or revenue from a country where you lack a legal presence. An MoR provides local seller status so you can accept payments and comply with local rules immediately.

- **Tax complexity across regions:** You're manually registering, collecting, and filing VAT/GST/sales tax in multiple jurisdictions.

- **High chargebacks or fraud losses:** Cross-border sales are generating frequent disputes and financial losses.

- **Limited payments or ops resources:** Small finance/dev teams struggling to manage gateways, PCI, and reconciliation.

- **Need for rapid market entry:** You must support local payment methods and currencies fast. An MoR has pre built integrations and local tax coverage which helps you launch in new markets within days, not months.

- **Complex settlement and FX headaches:** Multiple merchant accounts, currency conversions, and bank relationships add reconciliation work.

- **When ops outweigh product work:** If tax filings, payout issues, audits, and refund disputes consume more time than feature development.

## What Is a Merchant of Record (MoR)?

A Merchant of Record (MoR) collects payment and issues the invoice to the customer. They calculate and remit all local taxes (VAT/GST/sales tax) on your behalf. Manage compliance and liability, meaning they handle refunds, fraud checks, and chargebacks for that transaction.

For example, if you sell via a payment processor like Paypal, you are the MoR. You are responsible for registering for VAT in Europe, handling refunds, and paying any sales tax. But if you sell via Dodo Payments, Paddle, Lemon Squeezy or a similar platform, they become the Merchant of Record.

<img src="https://framerusercontent.com/images/9IwR5iejciSe7zlJfGUd4vntEo.png" alt="Merchant of Record (MoR) vs Payment Processor" width="600" height="400">

## Merchant of Record (MoR) vs Payment Processor

A key decision is whether to remain your own MoR (using a payment processor) or hire a third-party MoR. The differences include:

| Aspect                   | Payment Processor                                                                                             | Third-party Merchant of Record (MoR)                                                                                               |
| ------------------------ | ------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- |
| Taxes & compliance       | You register, calculate, file and remit VAT/GST/sales tax per jurisdiction; manage tax invoices and audits.   | Vendor calculates, registers, files and remits taxes; issues legally compliant invoices on your behalf.                            |
| Legal ownership          | Your company is the seller on receipts/statements; you retain legal and financial liability.                  | MoR is the legal seller; checkout can be branded while invoices show MoR.                                                          |
| Risk & chargebacks       | You absorb fraud losses; handle disputes, evidence and representation internally.                             | MoR runs fraud screening, handles disputes and often covers fraudulent chargebacks per contract.                                   |
| Integration & complexity | Basic payment flow only; you add tax logic, local payment rails, PCI scope and multiple gateway integrations. | Pre-integrated global payment methods, PCI/compliance handled, fewer engineering changes to sell in new markets.                   |
| Cost & fees              | Lower card fees (e.g., ~2.9% + $0.30) but hidden costs: tax filings, legal, engineering, and time-to-market.  | Higher bundled fees (commonly 5–10%) that cover taxes, compliance and ops; may include payout schedules or holdbacks.              |
| Control & data access    | Full control of customer billing data, invoices and revenue recognition.                                      | Less direct control of legal invoices; must verify transaction-level data & export options before signing.                         |
| Best fit                 | Startups wanting full control, simple local sales, low fee sensitivity.                                       | SaaS scaling internationally, limited payments team, or needing fast time-to-market (examples: Dodo Payments, Paddle, FastSpring). |

## Why SaaS Founders Struggle with Payments

Even before talking MoR, it's worth understanding why payments are so hard for SaaS teams. Common pain points include:

##### 1. Founders hate payments because they're a different business.

You build products; payments require law, tax, banking, fraud and customer support all at once.

##### 2. VAT, GST, sales tax:

They arrive overnight when you sell across borders. One minute you're onboarding users; the next you're registering for VAT, filing returns, answering audits. Small teams burn cycles on compliance instead of features.

##### 3. Customers expect local payment options:

Alipay, iDEAL, Boleto each needs a gateway, an agreement, testing, reconciliation. Miss one popular method and conversion drops; add them all and your backlog explodes.

##### 4. Payouts and FX add another headache:

Multiple merchant accounts, currency conversions, slow settlements, bank paperwork. Reconciliation becomes a weekly firefight that hides real customer signals.

##### 5. Time-to-market suffers:

Building legal entities, tax flows, and local checkouts takes months. An MoR can flip that, sell in new countries within days, not quarters.

##### 6. Engineering and ops get hollowed out:

PCI audits, fraud tuning, dispute paperwork, tax law changes, constant noise. Teams would rather ship features than babysit payment pipelines.

#### Merchant of Record Benefits

Partnering with an MoR unlocks several major advantages for SaaS companies:

##### Full Tax/Compliance Automation:

The biggest gain is offloading taxes and legal compliance. An MoR automatically registers and remits consumption taxes (VAT, GST, sales tax) in all markets where you sell. You no longer need accountants or lawyers in every jurisdiction. This not only avoids fines, but also lets you produce legally compliant invoices that large international customers trust.

##### Faster Global Launches:

The MoR already supports local payment networks and currencies, so you can start selling in new regions without building local entities.

For example, once integrated, the currency conversion, local wallets, and checkout flow can be customized per market immediately. This accelerates your go-to-market timeline from months to weeks or even days.

##### Reduced Fraud and Chargeback Operations:

MoR providers invest heavily in fraud prevention. They often assume liability for approved fraudulent transactions, meaning if a fraud passes screening and triggers a chargeback, you're not on the hook.

##### Simpler Accounting:

Instead of reconciling multiple PSP statements and tax filings, you typically get one consolidated payout from the MoR. They hold funds briefly to file taxes, but many offer clear reporting dashboards and CSV exports.

For example, Dodo Payments provides a unified dashboard to monitor revenue, refunds, and tax reports in one place. This unified reporting (and potentially daily or weekly payouts) streamlines bookkeeping.

#### Engineering & Ops Efficiency:

Because the MoR handles the end-to-end payment flow, your developers and ops team can focus on product features instead of payment problems. The MoR's platform is effectively a low-code solution for subscriptions and checkout.

#### Enhanced Customer Experience:

A good MoR lets you localize the checkout experience (local languages, currencies) and supports consumers with 24/7 payments support in multiple languages. Proper VAT invoices and support can increase trust with corporate buyers.

#### How to Evaluate MoR Vendors

When you've decided an MoR might be right, evaluate potential vendors on:

- **Supported Countries/Regions:** Ensure the vendor operates in all the markets you sell to. They should handle local regulations, currency conversion, and have the necessary tax registrations. For example, Dodo Payments emphasizes covering 200+ countries and territories with automatic tax calculations.

- **Tax Filing and Compliance:** Verify that the MoR will register, file, and remit VAT/GST/sales tax for you in each jurisdiction. Do they support the specific tax requirements you need?

- **Payment Methods:** Check if they offer the payment methods your customers use. Top MoRs list globally accepted credit cards, major wallets, and key local schemes.

- **Fraud & Chargeback Policy:** Read their agreement on fraud. Some MoRs advertise "zero fraud chargeback liability". Others may simply process the chargeback but still hold you ultimately responsible. Choose based on how much risk you need them to absorb.

- **Payout Schedule:** How often and how reliably will you get paid? Many MoRs pay monthly to accumulate taxes, but some offer daily or weekly payouts.

- **Reporting & Data Access:** You should have access to transaction-level data (e.g. via API or downloads) and analytics. Ideally the vendor provides a dashboard for revenue, refunds, taxes, etc.. This makes it easy to do your own accounting and forecasting.

- **Compliance Certifications:** The vendor must be PCI-DSS certified and comply with relevant data/privacy regulations. Ask if they have audits or certificates. They should also meet financial and VAT authority requirements.

- **Integration Options:** Look at their developer tools; do they have APIs, webhooks, SDKs, or plugins that fit your platform? Good documentation and easy checkout integration (hosted or embedded) will reduce engineering work.

- **Pricing & Fees:** Understand all costs: transaction fees, platform fees, setup costs, chargeback fees, foreign exchange margins, etc.

- **Exit/Portability Terms:** Finally, consider how easy it is to move off the vendor if needed. Can you export customer invoices and data? Some contracts lock funds or data, so check for any restrictive clauses.

#### Conclusion

Switching to a Merchant of Record model is a big decision with tradeoffs. In-house processing gives you control, but at the cost of heavy compliance burdens and slower expansion. On the other hand, an MoR offloads legal and operational work so your team can focus on building your SaaS.
