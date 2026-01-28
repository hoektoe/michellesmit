import Head from "next/head";

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://www.batterypromaitland.co.za/#localbusiness",
  name: "Battery Pro Maitland",
  description:
    "Battery Pro Maitland supplies and fits quality MAXIM batteries for cars, trucks, motorcycles, and more. All batteries carry a 2-year no-fuss warranty.",
  url: "https://www.batterypromaitland.co.za",
  telephone: "+27826228400",
  email: "maitland@batterypro.co.za",
  image: "https://a.storyblok.com/f/125509/1000x1000/7a44af034c/bg.png",
  priceRange: "$$",
  address: {
    "@type": "PostalAddress",
    streetAddress: "1 Maitland Ave",
    addressLocality: "Maitland",
    addressRegion: "Western Cape",
    postalCode: "7405",
    addressCountry: "ZA",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: -33.9275,
    longitude: 18.5025,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      opens: "07:30",
      closes: "18:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Sunday",
      opens: "09:00",
      closes: "16:00",
    },
  ],
  sameAs: ["https://www.facebook.com/BatteryProMaitland"],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What warranty do your batteries come with?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "All of our MAXIM batteries carry a 2-year no-fuss warranty.",
      },
    },
    {
      "@type": "Question",
      name: "What are your opening hours?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We are open Monday to Saturday from 07:30 to 18:00, Sundays from 09:00 to 16:00, and public holidays from 09:00 to 16:00.",
      },
    },
    {
      "@type": "Question",
      name: "Do you offer battery testing?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, we offer free battery testing. It is best practice to have your car, truck or motorcycle battery checked at least twice a year, and especially before embarking on a long journey.",
      },
    },
    {
      "@type": "Question",
      name: "What types of batteries do you supply?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We supply batteries for cars, trucks, motorcycles, boats, golf carts, alarm systems, and loadshedding/inverter setups.",
      },
    },
  ],
};

const SchemaMarkup = () => (
  <Head>
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(localBusinessSchema),
      }}
    />
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(faqSchema),
      }}
    />
  </Head>
);

export default SchemaMarkup;
