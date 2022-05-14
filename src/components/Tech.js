import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import Article from "./Article";

function Tech() {
  let navigate = useNavigate();
  const articleList = useSelector((state) => state.articles.value);

  const articles = articleList
    .filter((article) => article.catageory === "tech")
    .map((article) => {
      return <Article key={article.id} article={article} />;
    });

  return (
    <div>
      {articles}
      <button onClick={() => navigate("/home")}>Back</button>
    </div>
  );
}

export default Tech;
