import { Helmet } from "react-helmet-async";

type SEOProps = {
  title: string;
  description: string;
  path: string;
  jsonLd?: Record<string, unknown> | Record<string, unknown>[];
};

const SEO = ({ title, description, path, jsonLd }: SEOProps) => (
  <Helmet>
    <title>{title}</title>
    <meta name="description" content={description} />
    <link rel="canonical" href={path} />
    <meta property="og:title" content={title} />
    <meta property="og:description" content={description} />
    <meta property="og:url" content={path} />
    <meta name="twitter:title" content={title} />
    <meta name="twitter:description" content={description} />
    {jsonLd && (
      <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
    )}
  </Helmet>
);

export default SEO;
