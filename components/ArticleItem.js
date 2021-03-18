import Link from 'next/link'

const ArticleItem = ({ article }) => {
    return (
        <Link href="/article/[id]" as={`/article/${article.id}`}>
            <div class="p-3 border-double border-8 border-green-200 rounded-2xl bg-red-100 transition duration-500 transform hover:scale-105 hover:bg-red-200 cursor-pointer">
                    <h3 class="text-center p-4 text-xl font-semibold hover:underline">{article.title}</h3>
                    <p class="p-1">{article.body}</p>
                    <p class="p-1">Number of seasons: {article.temporadas}</p>
            </div>
        </Link>
    )
}

export default ArticleItem