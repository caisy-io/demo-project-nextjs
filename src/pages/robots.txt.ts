const Robots = () => {
  return null;
};

export const getServerSideProps = async ({ res }) => {
  const baseUrl =
    `${process.env.NEXT_PUBLIC_BASE_URL}` ||
    "https://demo-project-47.vercel.app";

  const robots = `# *
User-agent: *
Allow: /

# Host
Host: ${baseUrl}

# Sitemaps
Sitemap: ${baseUrl}/sitemap.xml
`;

  res.setHeader("Content-Type", "text/plain");
  res.setHeader("Cache-Control", `max-age=${60 * 60 * 1}`); // 1 hour cache
  res.write(robots);
  res.end();

  return {
    props: {},
  };
};

export default Robots;
