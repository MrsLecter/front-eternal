import Head from "next/head";

const HeadCommon: React.FC = () => {
  return (
    <Head>
      <title>Eternal AI</title>
      <link rel="icon" href="/favicon.ico" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta
        name="description"
        content="Discover Eternal AI, a cutting-edge platform where you can chat with humanity's greatest minds using advanced AI technology. Unleash your curiosity and learn from the legends who shaped our world."
      />
      <meta property="og:url" content="https://eternal.ai/" />
      <meta property="og:type" content="website" />
      <meta property="og:title" content="Eternal AI" />
      <meta
        property="og:description"
        content="Discover Eternal AI, a cutting-edge platform where you can chat with humanity's greatest minds using advanced AI technology. Unleash your curiosity and learn from the legends who shaped our world."
      />
    </Head>
  );
};

export default HeadCommon;
