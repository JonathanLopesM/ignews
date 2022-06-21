import { GetServerSideProps } from "next";
import { getSession } from "next-auth/client";
import Head from "next/head";
import { RichText } from "prismic-dom";
import getPrismicClient from "../../../services/prismic";
import styles from './post.module.scss';

interface PostProps {
  post: {
    slug: string;
    title: string;
    content: string;
    updatedAt: string;
  }
}

<<<<<<< Updated upstream
export default function PostPreview({ post }: PostPreviewProps) {
  const [session] = useSession()
  const router = useRouter()

  useEffect(() => {
      if(session?.activeSubscription){
        router.push(`/posts/${post.slug}`)
      }
  }, [session])

  return(
    <>
      <Head>
          <title>{post.title} | Ignews</title>
      </Head>
      
      <main className={styles.container}>
        <article className={styles.post}>
          <h1>{post.title}</h1>
          <time>{post.updatedAt}</time>
          <div 
            className={`${styles.postContent} ${styles.previewContent}`}
            dangerouslySetInnerHTML={{__html: post.content }}
          />
          <div className={styles.continueReading}>
            Wanna continue reading?
            <Link href="/">
                <a> Subscribe now 🤗</a>
            </Link>
          </div>
        </article>
      </main>
=======
export default function Post({post}: PostProps) {
  return (
    <>
    
    <Head>
      <title>{post.title} | Hnews</title>
    </Head>

    <main className={styles.container}>
      <article className={styles.post}>
        <h1>{post.title}</h1>
        <time>{post.updatedAt}</time>
        <div
          className={styles.postContent}
          dangerouslySetInnerHTML={{ __html: post.content }}
        />  
      </article>  
    </main> 
    
>>>>>>> Stashed changes
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async ({ req, params }) => {
  const session = await getSession({ req });
  const { slug } = params;

  if (!session?.activeSubscription) {
    return {
      redirect: { 
        destination: '/',
        permanent: false,
      }
    }
  }

  const prismic = getPrismicClient(req);

<<<<<<< Updated upstream
  const response = await prismic.getByUID('posts', String(slug), {})

  const post = {
    slug,
    title: response.data.title,
    content: RichText.asHtml(response.data.content.splice(0, 3)),
=======
  const response = await prismic.getByUID<any>('posts', String(slug), {});

  const post = {
    slug, 
    title: RichText.asText(response.data.title),
    content: RichText.asHtml(response.data.content),
>>>>>>> Stashed changes
    updatedAt: new Date(response.last_publication_date).toLocaleDateString('pt-BR', {
      day: '2-digit',
      month: 'long',
      year: 'numeric'
    })
  };

  return {
    props: { 
      post,
<<<<<<< Updated upstream
    },
    redirect: 60 * 30, //tempo para revalidado 30min
=======
    }
>>>>>>> Stashed changes
  }

}