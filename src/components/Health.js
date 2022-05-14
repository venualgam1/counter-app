import React from "react";
import { useNavigate } from "react-router-dom";
import Article from "./Article";
import { useSelector } from "react-redux";

function Health() {
  let navigate = useNavigate();
  const articleList = useSelector((state) => state.articles.value);

  const articles = articleList
    .filter((article) => article.catageory === "health")
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

export default Health;
