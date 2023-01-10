import React from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import DOMPurify from "dompurify";

function DetailedArticle() {
  const { Id } = useParams();

  const article = useSelector((state) => state.articles.value).filter(
    (article) => article.id === parseInt(Id)
  )[0];

  return (
    <div className="detailed--article">
      <h1 className="article--title">{article.title}</h1>
      <h6 className="article--catageory">{article.catageory}</h6>
      <p
        dangerouslySetInnerHTML={{
          __html: DOMPurify.sanitize(article.description),
        }}
        className="article-description"
      ></p>
      {/* <div>
        <img className="article--image" src={imgSrc} alt="article" />
        <video width="320" height="240" controls />
      </div> */}
    </div>
  );
}

export default DetailedArticle;
