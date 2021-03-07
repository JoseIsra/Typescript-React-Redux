import * as actionTypes from './actionTypes';

const initialState:ArticleState= {
    articles:[]
}

const reducer =(
    state:ArticleState = initialState, 
    action:ArticleAction):ArticleState =>{
        switch(action.type){
            case actionTypes.ADD_ARTICLE :
                const newArticle:IArticle ={
                    id:Math.random(),
                    title:action.article.title,
                    content:action.article.content
                }
                return {
                    ...state,
                    articles:[...state.articles, newArticle]
                }

            case actionTypes.REMOVE_ARTICLE:
                let updatedArticles:IArticle[] = state.articles.filter(article => article.id !== action.article.id);
                return{
                    ...state,
                    articles:updatedArticles
                }
            
        default: return state
        }
}

export default reducer;