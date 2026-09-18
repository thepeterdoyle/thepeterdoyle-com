import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://thepeterdoyle.com"),
  title: {
    default: "Peter Doyle | Data & AI Decision Systems",
    template: "%s | Peter Doyle",
  },
  description:
    "Peter Doyle turns ambiguous business problems, complex data, and emerging technology into measurable decision systems using analytics, data engineering, BI, and applied AI.",
  keywords: [
    "Peter Doyle",
    "data analytics",
    "decision systems",
    "applied AI",
    "SQL",
    "data engineering",
    "business intelligence",
    "Tableau",
    "Power BI",
  ],
  authors: [{ name: "Peter Doyle", url: "https://thepeterdoyle.com" }],
  creator: "Peter Doyle",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: "https://thepeterdoyle.com",
    title: "Peter Doyle | Data & AI Decision Systems",
    description:
      "Start with the decision. Peter Doyle turns complex data and emerging technology into measurable systems for better business decisions.",
    siteName: "Peter Doyle",
  },
  twitter: {
    card: "summary_large_image",
    title: "Peter Doyle | Data & AI Decision Systems",
    description:
      "Data. AI. Decision Systems. Start with the decision.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Peter Doyle",
    url: "https://thepeterdoyle.com",
    jobTitle: "Senior Data & Analytics Professional",
    homeLocation: {
      "@type": "Place",
      name: "Atlanta, Georgia, United States",
    },
    knowsAbout: [
      "Data Analytics",
      "Decision Systems",
      "Applied AI",
      "SQL",
      "Data Engineering",
      "Business Intelligence",
      "Data Visualization",
    ],
    sameAs: [
      "https://www.linkedin.com/in/thepeterdoyle",
      "https://github.com/thepeterdoyle",
    ],
  };

  return (
    <html lang="en">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
        {children}
      </body>
    </html>
  );
}
