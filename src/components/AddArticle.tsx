import React, { useState, useCallback} from 'react'
import './AddArticle.css';
import {useDispatch } from 'react-redux';
import { addArticle } from '../store/actionCreators';


export const AddArticle:React.FC = () => {
    const dispatch = useDispatch();
    const [article , setArticle] = useState<IArticle | any >({
        title:'',
        content:''
    });



    const handleChange = (e: React.ChangeEvent<HTMLInputElement>)=>{
            setArticle({
                ...article,
                [e.target.name]:e.target.value
            })
    }

    const handleSubmit = useCallback((e:React.FormEvent)=>{
        e.preventDefault();
        dispatch(addArticle(article))
        setArticle({
            title:'',
            content:''
        });
    },[dispatch,article])



    return (
        <div className="addArticle">

        <form onSubmit={handleSubmit} autoComplete="off">
            <input type="text" value={article.title} 
            name="title" onChange={handleChange}
            placeholder="Titulo"
            />
            <input type="text" value={article.content}
            placeholder="Contenido"
            name="content" onChange={handleChange}/>

            <button type="submit">SAVE</button>
        </form>        
        </div>
    )
}
