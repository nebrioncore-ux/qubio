export const services = [
  { id: "ng-business", name: "Business notifications", country: "Nigeria", flag: "🇳🇬", code: "NG", description: "Keep customers updated on deliveries and important account activity.", priceKobo: 450, category: "Transactional", icon: "↗" },
  { id: "ng-otp", name: "Account verification", country: "Nigeria", flag: "🇳🇬", code: "NG", description: "A preview of consent-based verification messages for your own customers.", priceKobo: 600, category: "Verification", icon: "✓" },
  { id: "gh-business", name: "Business notifications", country: "Ghana", flag: "🇬🇭", code: "GH", description: "Explore transactional messaging for your customers in Ghana.", priceKobo: 850, category: "Transactional", icon: "↗" },
  { id: "ke-alerts", name: "Service alerts", country: "Kenya", flag: "🇰🇪", code: "KE", description: "Preview timely, permission-based service updates for customers.", priceKobo: 950, category: "Transactional", icon: "◎" }
] as const;
export const formatNaira = (kobo: number) =>
  new Intl.NumberFormat("en-NG", { style: "currency", currency: "NGN" }).format(kobo / 100);
export const demoOrders = [
  { id: "DEMO-1042", service: "Business notifications", country: "Nigeria", status: "Delivered", amountKobo: 45000, date: "Sample order · 6 Nov 2026" },
  { id: "DEMO-1041", service: "Service alerts", country: "Kenya", status: "Refunded", amountKobo: 19000, date: "Sample order · 5 Nov 2026" }
];
