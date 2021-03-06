import { GetStaticProps } from 'next';
import Head from 'next/head';
import Prismic from '@prismicio/client';
import { RichText } from 'prismic-dom'

import getPrismicClient from '../../services/prismic';

import styles from './styles.module.scss';
import Link from 'next/link';

type Post = {
  slug: string;
  title: string;
  excerpt: string;
  updatedAt: string;
}

interface PostsProps {
  posts: Post[]
}
export default function Posts({ posts }){
  return (
    <>
    <Head>
      <title>Posts | Ignews</title>
    </Head>
    <main className = {styles.container}>
      <div className = {styles.posts}>
        { posts.map(post => (
<<<<<<< Updated upstream
          <Link href={`/posts/${post.slug}`}  key={post.slug} >
=======
          <Link key={post.slug} href={`/posts/${post.slug}`}>
>>>>>>> Stashed changes
            <a>
              <time>{post.updatedAt}</time>
              <strong>{post.title}</strong>
              <p>{post.excerpt}</p>
            </a>
          </Link>
        )) }
      </div>
    </main>
    </>

  );
}

export const getStaticProps: GetStaticProps = async () => {
  const prismic = getPrismicClient()

  const response = await prismic.query<any>([
    
    Prismic.predicates.at('document.type', 'posts')
  ], {
    fetch: ['posts.title', 'posts.content'],
    pageSize: 100, 
  })
<<<<<<< Updated upstream
console.log(response)
=======
  //console.log(response.results)

>>>>>>> Stashed changes
  const posts = response.results.map( post => {
    return {//yarn prismic-dom
      slug: post.uid,
      title: post.data.title,
      excerpt: post.data.content.find(content => content.type === 'paragraph')?.text ?? '',
      updatedAt: new Date(post.last_publication_date).toLocaleDateString('pt-BR', {
        day: '2-digit',
        month: 'long',
        year: 'numeric'
      })
    }
  })

  return {
    props: {
       posts,
    }
  }
  
}