import { InferGetStaticPropsType } from 'next';
import Head from 'next/head';
import styled from 'styled-components';
import BasicSection from 'components/BasicSection';
import Link from 'components/Link';
import { EnvVars } from 'env';
import { getAllPosts } from 'utils/postsFetcher';
import Cta from 'views/HomePage/Cta';
import Features from 'views/HomePage/Features';
import FeaturesGallery from 'views/HomePage/FeaturesGallery';
import Hero from 'views/HomePage/Hero';
import Partners from 'views/HomePage/Partners';
import ScrollableBlogPosts from 'views/HomePage/ScrollableBlogPosts';
import Testimonials from 'views/HomePage/Testimonials';

export default function Homepage({ posts }: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <>
      <Head>
        <title>{EnvVars.SITE_NAME}</title>
        <meta
          name="description"
          content="Blitzbuild is a powerful low-code platform with a robust workflow engine, empowering developers to effortlessly create ERP, CRM, and other management systems for enterprises and SMBs."
        />
      </Head>
      <HomepageWrapper>
        <WhiteBackgroundContainer>
          <Hero />
          <Partners />
          <BasicSection
            imageUrl="/SaaS-challenge-2-transformed.png"
            title="Streamline Your Business Processes with Blitzbuild"
            overTitle="Intuitive Workflow Management"
          >
            <p>
              Blitzbuild revolutionizes the way you build and manage business applications. Our intuitive low-code platform enables
              developers to effortlessly create powerful ERP, CRM, and other management systems tailored to the unique needs of enterprises
              and SMBs. 
              {/* <Link href="/features">Discover the power of Blitzbuild today.</Link> */}
            </p>
          </BasicSection>
          <BasicSection
            imageUrl="/SaaS-challenge-1-transformed.png"
            title="Unleash Your Productivity with Blitzbuild"
            overTitle="Low-Code Development"
            reversed
          >
            <p>
              With Blitzbuild, you can rapidly develop and deploy sophisticated business applications without the complexity of traditional
              coding. Our drag-and-drop interface and pre-built components <strong>accelerate your development process</strong>, allowing
              you to focus on delivering value to your organization.
            </p>
            <ul>
              <li>Intuitive visual development environment</li>
              <li>Seamless integration with existing systems</li>
              <li>Robust security and scalability features</li>
            </ul>
          </BasicSection>
        </WhiteBackgroundContainer>
        {/* <DarkerBackgroundContainer> */}
          {/* <Cta /> */}
          {/* <FeaturesGallery /> */}
          {/* <Features /> */}
          {/* <Testimonials /> */}
          {/* <ScrollableBlogPosts posts={posts} /> */}
        {/* </DarkerBackgroundContainer> */}
      </HomepageWrapper>
    </>
  );
}

const HomepageWrapper = styled.div`
  & > :last-child {
    margin-bottom: 15rem;
  }
`;

const DarkerBackgroundContainer = styled.div`
  background: rgb(var(--background));

  & > *:not(:first-child) {
    margin-top: 15rem;
  }
`;

const WhiteBackgroundContainer = styled.div`
  background: rgb(var(--secondBackground));

  & > :last-child {
    padding-bottom: 15rem;
  }

  & > *:not(:first-child) {
    margin-top: 15rem;
  }
`;

export async function getStaticProps() {
  return {
    props: {
      posts: await getAllPosts(),
    },
  };
}
