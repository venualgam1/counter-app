import Hero from "./Hero";
import { addArticle } from "../features/Articles";
import { useState } from "react";
import { useDispatch } from "react-redux";

export default function Home() {
  const dispatch = useDispatch();

  const [title, setTitle] = useState();
  const [description, setDescription] = useState();
  const [catageory, setCatageory] = useState();

  return (
    <>
      <Hero />
      <div>
        <input
          type="text"
          onChange={(event) => setTitle(event.target.value)}
          placeholder="Title..."
        ></input>
        <input
          type="text"
          onChange={(event) => setDescription(event.target.value)}
          placeholder="Description..."
        ></input>
        <input
          type="text"
          onChange={(event) => setCatageory(event.target.value)}
          placeholder="Catageory..."
        ></input>
        <button
          onClick={() => {
            dispatch(
              addArticle({
                id: 4,
                title,
                description,
                catageory,
              })
            );
          }}
        >
          Add article
        </button>
      </div>
    </>
  );
}
