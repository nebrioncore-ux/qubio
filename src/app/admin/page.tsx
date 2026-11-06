export const metadata = { title: "Administrator preview" };
export default function Admin() {
 return <div className="shell section"><div className="page-intro"><p className="eyebrow">ADMINISTRATOR WORKSPACE · DEMO</p><h1>A clear view<br/>behind the scenes.</h1><p>This is a public design preview. It has no administrator permissions, private customer information, or working management actions.</p></div><div className="notice">Live administration will require server-side sign-in and role checks before any real data is accessible.</div><div className="status-list">{[
 ["Service catalog","Future administrators will manage approved suppliers, countries, availability, and pricing."],
 ["Wallet oversight","Future wallet changes must use an audited ledger and verified payment events."],
 ["Refund review","Future requests will follow published eligibility rules and review decisions."],
 ["Business API access","Future API keys will be scoped, revocable, rate-limited, and stored as hashes."]
 ].map(([title,description])=><article className="status-card" key={title}><p className="eyebrow">PLANNED · NOT CONNECTED</p><h2>{title}</h2><p>{description}</p></article>)}</div></div>;
}
