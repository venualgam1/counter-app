import { useNavigate } from "react-router-dom";
import Article from "./Article";
import { useSelector } from "react-redux";

export default function Trending() {
  let navigate = useNavigate();
  const articleList = useSelector((state) => state.articles.value);

  const articles = articleList
    .filter((article) => article.catageory === "trending")
    .map((article) => {
      return <Article key={article.id} article={article} />;
    });

  return (
    <>
      {articles}
      <button onClick={() => navigate("/home")}>Back</button>
    </>
  );
}
