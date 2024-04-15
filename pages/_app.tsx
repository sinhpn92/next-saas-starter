import 'swiper/css';
import 'swiper/css/bundle';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';

import { AppProps } from 'next/dist/shared/lib/router/router';
import dynamic from 'next/dynamic';
import Head from 'next/head';
import { ColorModeScript } from 'nextjs-color-mode';
import React, { PropsWithChildren } from 'react';
import { TinaEditProvider } from 'tinacms/dist/edit-state';

import Footer from 'components/Footer';
import { GlobalStyle } from 'components/GlobalStyles';
import Navbar from 'components/Navbar';
import NavigationDrawer from 'components/NavigationDrawer';
import NewsletterModal from 'components/NewsletterModal';
import WaveCta from 'components/WaveCta';
import { NewsletterModalContextProvider, useNewsletterModalContext } from 'contexts/newsletter-modal.context';
import { NavItems } from 'types';
// import schema from '/.tina/schema';
import { defineSchema } from 'tinacms';

const schema = defineSchema({
  collections: [
    {
      label: 'Blog Posts',
      name: 'posts',
      path: 'posts',
      fields: [
        {
          type: 'string',
          label: 'Title',
          name: 'title',
        },
        {
          type: 'string',
          label: 'Description',
          name: 'description',
        },
        {
          type: 'string',
          label: 'Date',
          name: 'date',
        },
        {
          type: 'string',
          label: 'Tags',
          name: 'tags',
        },
        {
          type: 'string',
          label: 'Image URL',
          name: 'imageUrl',
        },
        {
          type: 'rich-text',
          label: 'Blog Post Body',
          name: 'body',
          isBody: true,
          templates: [
            {
              name: 'Quote',
              label: 'Quote',
              fields: [
                {
                  type: 'string',
                  name: 'content',
                  label: 'Content',
                },
                {
                  type: 'string',
                  name: 'author',
                  label: 'Author',
                },
                {
                  type: 'string',
                  name: 'cite',
                  label: 'Cite',
                },
              ],
            },
            {
              name: 'ArticleImage',
              label: 'ArticleImage',
              fields: [
                {
                  type: 'string',
                  name: 'src',
                  label: 'Src',
                },
                {
                  type: 'string',
                  name: 'caption',
                  label: 'Caption',
                },
              ],
            },
            {
              name: 'Code',
              label: 'Code',
              fields: [
                {
                  type: 'string',
                  name: 'code',
                  label: 'Code',
                },
                {
                  type: 'string',
                  name: 'language',
                  label: 'Language',
                },
                {
                  type: 'string',
                  name: 'selectedLines',
                  label: 'Selected Lines',
                },
                {
                  type: 'boolean',
                  name: 'withCopyButton',
                  label: 'With Copy Button',
                },
                {
                  type: 'boolean',
                  name: 'withLineNumbers',
                  label: 'With Line Numbers',
                },
                {
                  type: 'string',
                  name: 'caption',
                  label: 'Caption',
                },
              ],
            },
            {
              name: 'h2',
              label: 'H2',
              inline: true,
              fields: [],
            },
            {
              name: 'h3',
              label: 'H3',
              inline: true,
              fields: [],
            },
            {
              name: 'br',
              label: 'BR',
              inline: true,
              fields: [],
            },
            {
              name: 'p',
              label: 'P',
              inline: true,
              fields: [],
            },
          ],
        },
      ],
    },
  ],
});


const navItems: NavItems = [
  // { title: 'Awesome SaaS Features', href: '/features' },
  { title: 'Pricing', href: '/pricing' },
  { title: 'Contact', href: '/contact' },
  { title: 'Sign up', href: '/sign-up', outlined: true },
];

const TinaCMS = dynamic(() => import('tinacms'), { ssr: false });

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link rel="icon" type="image/png" href="/favicon.png" />
        {/* <link rel="alternate" type="application/rss+xml" href={EnvVars.URL + 'rss'} title="RSS 2.0" /> */}
        {/* <script
          dangerouslySetInnerHTML={{
            __html: `window.ga=window.ga||function(){(ga.q=ga.q||[]).push(arguments)};ga.l=+new Date;
          ga('create', 'UA-117119829-1', 'auto');
          ga('send', 'pageview');`,
          }}
        /> */}
        {/* <script async src="https://www.google-analytics.com/analytics.js"></script> */}
      </Head>
      {/* <ColorModeScript /> */}
      <GlobalStyle />

      <Providers>
        <Modals />
        <Navbar items={navItems} />
        <TinaEditProvider
          editMode={
            <TinaCMS
              schema={schema}
              query={pageProps.query}
              variables={pageProps.variables}
              data={pageProps.data}
              isLocalClient={!process.env.NEXT_PUBLIC_TINA_CLIENT_ID}
              branch={process.env.NEXT_PUBLIC_EDIT_BRANCH}
              clientId={process.env.NEXT_PUBLIC_TINA_CLIENT_ID}
              {...pageProps}
            >
              {(livePageProps: any) => <Component {...livePageProps} />}
            </TinaCMS>
           }
        >
          <Component {...pageProps} />
        </TinaEditProvider> 
        {/* <Component {...pageProps} /> */}
        <WaveCta />
        <Footer />
      </Providers>
    </>
  );
}

function Providers<T>({ children }: PropsWithChildren<T>) {
  return (
    <NewsletterModalContextProvider>
      <NavigationDrawer items={navItems}>{children}</NavigationDrawer>
    </NewsletterModalContextProvider>
  );
}

function Modals() {
  const { isModalOpened, setIsModalOpened } = useNewsletterModalContext();
  if (!isModalOpened) {
    return null;
  }
  return <NewsletterModal onClose={() => setIsModalOpened(false)} />;
}

export default MyApp;