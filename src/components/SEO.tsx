import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
  canonical?: string;
  ogImage?: string;
}

const SEO = ({ title, description, keywords, canonical, ogImage }: SEOProps) => {
  const fullTitle = `${title} | CyberNexora - Leading Cybersecurity Company in Gujarat`;
  const defaultKeywords = "CyberNexora, Cybersecurity Services, Cyber Company in Gujarat, Cybersecurity in Surat, Best Cyber Company in India, Cyber Defense Solutions, Cybersecurity Provider, Digital Protection Services, Network Security Experts";
  const finalKeywords = keywords ? `${keywords}, ${defaultKeywords}` : defaultKeywords;
  const canonicalUrl = canonical || 'https://www.cybernexora.com/';
  const imageUrl = ogImage || 'https://www.cybernexora.com/og-image.jpg';

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={finalKeywords} />
      <link rel="canonical" href={canonicalUrl} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={imageUrl} />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={canonicalUrl} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={imageUrl} />
    </Helmet>
  );
};

export default SEO;
