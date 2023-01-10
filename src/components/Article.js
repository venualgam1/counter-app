import React from "react";
import { Card, Button } from "react-bootstrap";
import { deleteArticle } from "../features/Articles";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

function Article({ article }) {
  const dispatch = useDispatch();

  return (
    <div className="flex--center">
      <Card className="article--card m-2">
        <Card.Body>
          <Card.Title>{article.title}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">
            {article.catageory}
          </Card.Subtitle>
          <Card.Text>{article.description}</Card.Text>
          <div className="flex">
            <Button
              onClick={() => {
                dispatch(deleteArticle({ id: article.id }));
              }}
              variant="primary"
            >
              Delete
            </Button>

            <Link
              to={`detailedArticle/${article.id}`}
              className="more--details"
            >
              More Details...
            </Link>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
}

export default Article;
