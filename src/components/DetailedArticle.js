import React from "react";
import { useParams } from "react-router-dom";

function DetailedArticle() {
  const { Id } = useParams();
  return <div>DetailedArticle : {Id}</div>;
}

export default DetailedArticle;
