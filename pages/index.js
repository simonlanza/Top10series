import {server} from '../config'
import ArticleList from '../components/ArticleList'

export default function Home({ articles }) {
  return (
    <div class="grid grid-cols-1 gap-5 justify-items-center font-serif p-5 bg-red-50">
      <h1 class="col-span-2 text-4xl font-bold text-blue-500 py-10">
        Simon's Top 10 Tv Shows
      </h1>
      <p class="col-span-2 text-xl pb-3">
        This are 10 tv show I really liked, if you want to know more just click one of them.
      </p>
      <div class="col-span-1">
        <ArticleList articles={articles} />
      </div>
    </div>
  )
}

export const getStaticProps = async () => {
  const res = await fetch(`${server}/api/articles`)
  const articles = await res.json()

  return {
    props: {
      articles
    }
  }
}