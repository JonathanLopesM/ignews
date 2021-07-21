import { GetStaticProps } from 'next';
import Head from 'next/head';
import styles from './styles.module.scss';

export default function Posts(){
  return (
    <>
    <Head>
      <title>Posts | Ignews</title>
    </Head>

    <main className = {styles.container}>
      <div className = {styles.posts}>
        <a href="#">
          <time>12 Março de 2012</time>
          <strong>Creating a Monerepo With Lerna & Yarn Wokspaces</strong>
          <p>In this guide, you will learn how to create a monorepo to manage multiple packages with a shared</p>
        </a>
        <a href="#">
          <time>12 Março de 2012</time>
          <strong>Creating a Monerepo With Lerna & Yarn Wokspaces</strong>
          <p>In this guide, you will learn how to create a monorepo to manage multiple packages with a shared</p>
        </a>
        <a href="#">
          <time>12 Março de 2012</time>
          <strong>Creating a Monerepo With Lerna & Yarn Wokspaces</strong>
          <p>In this guide, you will learn how to create a monorepo to manage multiple packages with a shared</p>
        </a>
      </div>
    </main>
    </>

  );
}

export const getStaticProps: GetStaticProps = async () => {
  
}