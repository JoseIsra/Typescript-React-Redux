
import React,{ useCallback } from 'react'
import { Dispatch } from 'redux';
import { useDispatch } from 'react-redux';

import './Article.css';

type Props = {
    article:IArticle,
    removeArticle: (article:IArticle) => void
}


export const Article:React.FC<Props> = ({article, removeArticle}) => {

    const dispatch:Dispatch<any> = useDispatch();

    const deleteArticle = useCallback((article:IArticle)=>dispatch(removeArticle(article))
        ,[dispatch, removeArticle])

    


    return (
        <div className ="article">
            <div className="article__content">
            <h1>{article.title}</h1>
            <p>{article.content}</p>
            <button onClick={()=>dispatch(deleteArticle(article))}>Delete</button>
            </div>
            
        </div>
    )
}
