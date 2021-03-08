import React   from 'react';
import './App.css';
import { AddArticle } from './components/AddArticle';
import { Article } from './components/Article';
import { shallowEqual, useSelector } from 'react-redux';
import {removeArticle } from './store/actionCreators';



export const App:React.FC = () => {
  
  const articles:IArticle[] = useSelector((state:ArticleState) => state.articles, shallowEqual )



  console.log(articles)
  return (
    <div className="app">
      <h1>Typescript con React y su amigo Redux</h1>
      <AddArticle />

      {articles.map((article)=> (
        <Article key={article.id} 
        article={article}
        removeArticle ={removeArticle}
        
        />
      ) )}
    </div>
  )
}

