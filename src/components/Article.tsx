
import React,{ useCallback } from 'react'
import { Dispatch } from 'redux';
import { useDispatch } from 'react-redux';

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
            <h6>{article.title}</h6>
            <h1>{article.content}</h1>
            <button onClick={()=>dispatch(deleteArticle(article))}>Delete</button>
        </div>
    )
}
