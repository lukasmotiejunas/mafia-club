export function JsonLd({ data }: { data: Record<string, unknown> }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "SportsClub",
  name: "Mafia Klubas",
  url: "https://mafia-klubas.lt",
  description:
    "Didžiausia mafijos žaidimo bendruomenė Lietuvoje — renginiai, komandos, abonementai.",
  logo: "https://mafia-klubas.lt/logo.png",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Vilnius",
    addressCountry: "LT",
  },
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+370 600 00000",
    email: "info@mafia-klubas.lt",
    contactType: "customer service",
    availableLanguage: ["Lithuanian", "English"],
  },
  sameAs: [
    "https://facebook.com/mafiaklubas",
    "https://instagram.com/mafiaklubas",
  ],
};
