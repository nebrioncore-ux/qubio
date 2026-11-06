"use client";
import { useState } from "react";
import Link from "next/link";
import { services, formatNaira } from "@/lib/mock-data";

export function ServiceCatalog() {
  const [country, setCountry] = useState("All countries");
  const [query, setQuery] = useState("");
  const visible = services.filter(service => (country === "All countries" || service.country === country) &&
    (service.name + service.description + service.country).toLowerCase().includes(query.toLowerCase()));
  return <section id="services" className="catalog shell section">
    <div className="section-heading"><div><p className="eyebrow">THE MARKETPLACE</p><h2>A world of connections.<br/>One place to start.</h2></div><p>Find the right messaging service for your business.<br/>Every listing below is an illustrative example.</p></div>
    <div className="filters"><label className="search"><span aria-hidden="true">⌕</span><span className="sr-only">Search sample services</span><input value={query} onChange={event => setQuery(event.target.value)} placeholder="Search services or countries…"/></label><label className="country-label"><span className="sr-only">Filter by country</span><select value={country} onChange={event => setCountry(event.target.value)}>{["All countries", "Nigeria", "Ghana", "Kenya"].map(name => <option key={name}>{name}</option>)}</select></label><span className="result-count" aria-live="polite">{visible.length} sample services</span></div>
    <div className="service-grid">{visible.map(service => <article className="service-card" key={service.id}><div className="card-top"><span className="service-icon" aria-hidden="true">{service.icon}</span><span className="tag">{service.category}</span></div><p className="country"><span aria-hidden="true">{service.flag}</span> {service.country}</p><h3>{service.name}</h3><p className="description">{service.description}</p><div className="card-bottom"><div><small>Sample price / message</small><strong>{formatNaira(service.priceKobo)}</strong></div><Link href="/dashboard" className="card-arrow" aria-label={`Preview ${service.name} in ${service.country}`}>↗</Link></div></article>)}</div>
    {visible.length === 0 && <p className="empty-state">No sample services match. Try another country or search term.</p>}
    <p className="catalog-note">Sample prices are in Nigerian naira. Availability and supplier terms will be confirmed before launch.</p>
  </section>;
}
