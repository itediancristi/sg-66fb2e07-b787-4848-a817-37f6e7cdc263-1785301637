import Head from 'next/head';

interface SEOProps {
  title?: string;
  description?: string;
  image?: string;
  url?: string;
  language?: "ro" | "en";
}

// SEO elements that can be used in _document.tsx (returns JSX without Head wrapper)
export function SEOElements({
  title = "Open Trial | Football Trials, Player Profiles & Club Opportunities",
  description = "Open Trial is a football recruitment platform connecting players with clubs, scouts, and football opportunities worldwide. Create a professional player profile, showcase highlight videos, share performance statistics, and increase your visibility in the football market. Designed for amateur, semi-professional, professional players, academy graduates, and free agents seeking trials, contracts, and career opportunities. Discover talent. Analyze performance. Connect with clubs.",
  image = "/og-image.png",
  url,
  language = "ro",
}: SEOProps) {
  return (
    <>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="icon" href="/favicon.ico" />
      <html lang={language} />

      {/* Hreflang tags */}
      <link rel="alternate" hrefLang="ro" href={url || "https://opentrial.ro"} />
      <link rel="alternate" hrefLang="en" href={url || "https://opentrial.ro"} />
      <link rel="alternate" hrefLang="x-default" href={url || "https://opentrial.ro"} />

      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:locale" content={language === "ro" ? "ro_RO" : "en_US"} />
      <meta property="og:locale:alternate" content={language === "ro" ? "en_US" : "ro_RO"} />
      {image && <meta property="og:image" content={image} />}
      {url && <meta property="og:url" content={url} />}
      <meta property="og:type" content="website" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      {image && <meta name="twitter:image" content={image} />}
    </>
  );
}

// SEO component for use in pages/_app.tsx or individual pages (uses next/head)
export function SEO({
  title = "Hello World",
  description = "Welcome to my app",
  image = "/og-image.png",
  url,
  language = "ro",
}: SEOProps) {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="icon" href="/favicon.ico" />
      <html lang={language} />

      {/* Hreflang tags */}
      <link rel="alternate" hrefLang="ro" href={url || "https://opentrial.ro"} />
      <link rel="alternate" hrefLang="en" href={url || "https://opentrial.ro"} />
      <link rel="alternate" hrefLang="x-default" href={url || "https://opentrial.ro"} />

      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:locale" content={language === "ro" ? "ro_RO" : "en_US"} />
      <meta property="og:locale:alternate" content={language === "ro" ? "en_US" : "ro_RO"} />
      {image && <meta property="og:image" content={image} />}
      {url && <meta property="og:url" content={url} />}
      <meta property="og:type" content="website" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      {image && <meta name="twitter:image" content={image} />}
    </Head>
  );
}
