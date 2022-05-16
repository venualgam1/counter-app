import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { addArticle } from "../features/Articles";
import { useSelector } from "react-redux";

function NewArticle() {
  const [title, setTitle] = useState();
  const [description, setDescription] = useState();
  const [catageory, setCatageory] = useState();

  const dispatch = useDispatch();
  const articleList = useSelector((state) => state.articles.value);

  return (
    <div>
      <Form>
        <Form.Group className="mb-3" controlId="title">
          <Form.Label>Title</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter title"
            onChange={(event) => {
              setTitle(event.target.value);
            }}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="description">
          <Form.Label>Description</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter description"
            onChange={(event) => {
              setDescription(event.target.value);
            }}
          />
        </Form.Group>
        <Form.Select
          onChange={(event) => {
            setCatageory(event.target.value);
          }}
          aria-label="Default select example"
        >
          <option>Select catageory</option>
          <option value="trending">Trending</option>
          <option value="health">Health</option>
          <option value="tech">Tech</option>
        </Form.Select>

        <Button
          variant="primary"
          type="submit"
          onClick={(event) => {
            event.preventDefault();
            dispatch(
              addArticle({
                id: articleList[articleList.length - 1].id + 1,
                title,
                description,
                catageory,
              })
            );
          }}
        >
          Submit
        </Button>
      </Form>
    </div>
  );
}

export default NewArticle;
