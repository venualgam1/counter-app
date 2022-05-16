import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Trending from "./components/Trending";
import NavBar from "./components/NavBar";
import Health from "./components/Health";
import Tech from "./components/Tech";
import ErrorPage from "./components/ErrorPage";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import articleReducer from "./features/Articles";
import NewArticle from "./components/NewArticle";
import DetailedArticle from "./components/DetailedArticle";

const root = ReactDOM.createRoot(document.getElementById("root"));
const store = configureStore({
  reducer: { articles: articleReducer },
});

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<App />}></Route>
          <Route path="/home" element={<Home />}></Route>
          <Route path="/trending" element={<Trending />}>
            <Route path=":Id" element={<DetailedArticle />} />
          </Route>
          <Route path="/health" element={<Health />}></Route>
          <Route path="/tech" element={<Tech />}></Route>
          <Route path="/newArticle" element={<NewArticle />}></Route>
          <Route path="*" element={<ErrorPage />}></Route>
        </Routes>
      </Router>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
