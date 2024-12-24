import { useFetch } from "../../hooks/UseFetch"
import { NavLink } from "react-router-dom";

function Article() {

    const { data: articles, isPending, error } = useFetch('http://localhost:3000/articles');

    return (
        <div>
            {isPending && <p className="text-red text-5xl">Loading...</p>}
            {error && <p>{error}</p>}
            {articles && articles.map((article) => {
                return (
                    <li key={article.id}>
                        <p className="text-3xl">{article.title}</p>
                        <p>{article.author}</p>
                        <NavLink to=''>Read more</NavLink>
                    </li>
                )
            })}
        </div>
    )
}

export default Article