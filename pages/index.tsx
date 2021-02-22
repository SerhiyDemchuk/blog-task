import Head from 'next/head';
import { postsAPI } from '../api/api';
import PostsContainer from '../components/Posts/PostsContainer';

function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <PostsContainer />
    </div>
  )
}

export async function getServerSideProps() {
  const response = await postsAPI.listPosts();
  return {
    props: { response }
  }
};

export default Home;