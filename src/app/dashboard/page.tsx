import Link from "next/link";
import { demoOrders, formatNaira } from "@/lib/mock-data";
export const metadata = { title: "Customer dashboard preview" };
export default function Dashboard() {
  return <div className="shell section"><div className="page-intro"><p className="eyebrow">CUSTOMER WORKSPACE · DEMO</p><h1>Your connections,<br/>in one place.</h1><p>A preview of your future dashboard. You are viewing a fictional account, not signed in to a real account.</p></div>
    <div className="notice">Preview only: account creation, wallet funding, purchases, and refund requests are not enabled.</div>
    <div className="stats"><div className="stat"><p>Sample wallet balance</p><strong>{formatNaira(2500000)}</strong></div><div className="stat"><p>Sample orders</p><strong>2</strong></div><div className="stat"><p>Real transactions processed</p><strong>0</strong></div></div>
    <h2 style={{fontSize:26}}>Sample order history</h2><div className="table-scroll"><table><caption className="sr-only">Fictional orders for the dashboard preview</caption><thead><tr><th scope="col">Order</th><th scope="col">Service</th><th scope="col">Country</th><th scope="col">Status</th><th scope="col">Sample amount</th></tr></thead><tbody>{demoOrders.map(order => <tr key={order.id}><td>{order.id}<br/><small>{order.date}</small></td><td>{order.service}</td><td>{order.country}</td><td>{order.status}</td><td>{formatNaira(order.amountKobo)}</td></tr>)}</tbody></table></div>
    <p className="catalog-note">These fictional orders illustrate the layout. They are not delivery or refund records.</p><div className="hero-actions" style={{marginTop:28}}><Link className="button" href="/#services">Browse sample services ↗</Link><Link className="text-link" href="/refund-policy">Read draft refund rules →</Link></div></div>;
}
