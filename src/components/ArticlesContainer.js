// import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useState } from "react";
import ReactPaginate from "react-paginate";
import Article from "./Article";

export default function Trending({ catageory }) {
  //   let navigate = useNavigate();
  const [pageNumber, setPageNUmber] = useState(0);
  const [searchTerm, setSearchTerm] = useState("");

  const articleList = useSelector((state) => state.articles.value).filter(
    (article) => article.catageory === catageory
  );

  const articles = articleList
    .filter((val) => {
      if (searchTerm === "") {
        return val;
      } else if (
        val.description.toLowerCase().includes(searchTerm.toLowerCase())
      ) {
        return val;
      }
    })
    .map((article) => {
      return <Article key={article.id} article={article} />;
    });

  const articlesPerPage = 2;
  const pageCount = Math.ceil(articles.length / articlesPerPage);
  const pagesVisited = pageNumber * articlesPerPage;

  const displayArticles = articles.slice(
    pagesVisited,
    pagesVisited + articlesPerPage
  );

  const changePage = ({ selected }) => {
    setPageNUmber(selected);
  };

  return (
    <div className="flex--center">
      <input
        className="search--box"
        type="text"
        placeholder="Search..."
        onChange={(event) => {
          setSearchTerm(event.target.value);
        }}
      />
      {displayArticles}
      {pageCount > 1 && (
        <ReactPaginate
          previousLabel={"Previous"}
          nextLabel={"Next"}
          pageCount={pageCount}
          onPageChange={changePage}
          containerClassName={"paginationBtns"}
          previousLinkClassName={"previousBtn"}
          nextLinkClassName={"nextBtn"}
          disabledClassName={"paginationDisabled"}
          activeClassName={"paginationActive"}
        />
      )}
      {/* <button onClick={() => navigate("/home")}>Back</button> */}
    </div>
  );
}
