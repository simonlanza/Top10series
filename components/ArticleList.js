import ArticleItem from './ArticleItem'

const ArticleList = ({ articles }) => {
    return(
        <div class="grid grid-cols-2 gap-10">
            {articles.map((article) => (
                <ArticleItem article={article} />
            ))}
        </div>
    )
}

export default ArticleList