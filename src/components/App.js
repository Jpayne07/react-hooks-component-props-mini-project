import React from "react";
import blogData from "../data/blog";
import ArticleList from "./ArticleList";
import About from './About'
import Header from './Header'


function App() {
  return (
    <div className="App">
      <Header name = {blogData.name} />
      <About about = {blogData.about} image = {'https://via.placeholder.com/215'} />
      You're on your own from here! Follow the deliverables; test things out in
      the browser as you write your code; and good luck!
      <ArticleList posts = {blogData.posts} />
      
    </div>
  );
}

export default App;
