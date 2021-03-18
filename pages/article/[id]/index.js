import {server} from '../../../config'
import Link from 'next/link'


const article = ({article}) => {
    const mystyle = {
        
        maxHeight: "300px",
        width: "700px",
    }
    return(
        <> 
            <div>
                <h1>{article.title}</h1>
                <p>{article.body}</p>
                <p>{article.synopsis}</p>
                <p><img style={mystyle} src={article.background}/></p>
            </div>
            <footer>
                <Link href="/">Go Back</Link>
                <a href={article.imdb} target="_blank">IMDB site</a>
            </footer>
        </>    
    )
}

export const getStaticProps = async (context) => {
    const res = await fetch(`${server}/api/articles/${context.params.id}`)

    const article = await res.json()

    return {
        props: {
            article,
        },
    }
}

export const getStaticPaths = async () => {
    const res = await fetch (`${server}/api/articles`)

    const articles = await res.json()

    const ids = articles.map((article) => article.id)

    const paths = ids.map((id => ({params: {id: id.toString() } })))

    return {
        paths,
        fallback: false,
    }
}

export default article