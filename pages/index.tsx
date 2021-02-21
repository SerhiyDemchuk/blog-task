import Head from 'next/head';
import Header from '../components/Header';
import PostsContainer from '../components/Posts/PostsContainer';
import styles from '../styles/Home.module.css';
import Link from 'next/link';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <PostsContainer />
      <Link href="/posts/[id]">
        <a>Hello</a>
      </Link>
    </div>
  )
}
