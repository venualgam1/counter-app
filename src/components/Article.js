import React from "react";
import { Card } from "react-bootstrap";

function Article({ article }) {
  const variant = "Light";
  return (
    <div>
      <Card
        bg={variant.toLowerCase()}
        key={variant}
        text={variant.toLowerCase() === "light" ? "dark" : "white"}
        style={{ width: "18rem" }}
        className="mb-2"
      >
        <Card.Header>{article.catageory}</Card.Header>
        <Card.Body>
          <Card.Title>
            {variant} {article.title}
          </Card.Title>
          <Card.Text>{article.description}</Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
}

export default Article;
