import Head from 'next/head';
import Image from 'next/image';

import Headline from '../components/headline';
import AboutIntro from '../components/about-intro';

import Container from '../components/container';
import Header from '../components/header';
import HeroBanner from '../components/hero-banner';
import HeroPost from '../components/hero-post';
import Layout from '../components/layout';
import MoreStories from '../components/more-stories';
import ServicesBlocks from '../components/services-blocks';

import { getAllPostsForHome } from '../lib/api';
import { SITE_TITLE } from '../lib/constants';

export default function Index({ allPosts, preview }) {
    const heroPost = allPosts[0];
    const morePosts = allPosts.slice(1);
    return (
        <>
            <Layout preview={preview}>
                <Head>
                    <title>{SITE_TITLE}</title>
                </Head>
                <Header />
                <HeroBanner />

                <Headline />
                <AboutIntro />
                <ServicesBlocks />
                {/* <Container>
                    {heroPost && (
                        <HeroPost
                            title={heroPost.title}
                            coverImage={heroPost.coverImage}
                            date={heroPost.date}
                            author={heroPost.author}
                            slug={heroPost.slug}
                            excerpt={heroPost.excerpt}
                        />
                    )}
                    {morePosts.length > 0 && <MoreStories posts={morePosts} />}
                </Container> */}
            </Layout>
        </>
    );
}

export async function getStaticProps({ preview = false }) {
    const allPosts = await getAllPostsForHome(preview);
    return {
        props: { allPosts, preview }
    };
}
