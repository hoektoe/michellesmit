import ErrorPage from 'next/error';
import Head from 'next/head';
import { useRouter } from 'next/router';

import Container from '../../components/container';
import Header from '../../components/header';
import Layout from '../../components/layout';
import MoreStories from '../../components/more-stories';
import PostBody from '../../components/post-body';
import PostHeader from '../../components/post-header';
import PostTitle from '../../components/post-title';
import SectionSeparator from '../../components/section-separator';
import { getAllPostsWithSlug, getPostAndMorePosts } from '../../lib/api';
import { SITE_TITLE } from '../../lib/constants';

export default function Post({ post, morePosts, preview }) {
    const router = useRouter();
    if (!router.isFallback && !post?.slug) {
        return <ErrorPage statusCode={404} />;
    }
    return (
        <Layout preview={preview}>
            <Container>
                <Header />
                {router.isFallback ? (
                    <PostTitle>Loading…</PostTitle>
                ) : (
                    <>
                        <article>
                            <Head>
                                <title>
                                    {post.title} | Next.js Blog Example with {SITE_TITLE}
                                </title>
                                {/* <meta property="og:image" content={post.ogImage.url} /> */}
                            </Head>
                            <PostHeader
                                title={post.title}
                                coverImage={post.coverImage}
                                date={post.date}
                                author={post.author}
                            />
                            <PostBody content={post.content} />
                        </article>
                        <SectionSeparator />
                        {morePosts.length > 0 && <MoreStories posts={morePosts} />}
                    </>
                )}
            </Container>
        </Layout>
    );
}

export async function getStaticProps({ params, preview = false }) {
    const data = await getPostAndMorePosts(params.slug, preview);
    return {
        props: {
            preview,
            post: data?.post || null,
            morePosts: data?.morePosts || null
        }
    };
}

export async function getStaticPaths() {
    const allPosts = await getAllPostsWithSlug();
    return {
        paths:
            allPosts?.map((post) => ({
                params: {
                    slug: post.slug
                }
            })) || [],
        fallback: true
    };
}
