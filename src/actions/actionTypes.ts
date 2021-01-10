import {ADD_ARTICLE, DELETE_ARTICLE, EDIT_ARTICLE, LOAD_ARTICLE} from "./helpCenterActions";
import {Article} from "../entities/Article";

export const loadArticle = (): HelpCenterActionType => {
    return {
         type: LOAD_ARTICLE
    }
}

export const addArticle = (article: Article): HelpCenterActionType => {
    return {
        type: ADD_ARTICLE,
        article
    }
}

export const deleteArticle = (id: string): HelpCenterActionType => {
    return {
        type: DELETE_ARTICLE,
        id
    }
}

export const editArticle = (article: Article): HelpCenterActionType => {
    return {
        type: EDIT_ARTICLE,
        article
    }
}


export interface ActionTypeBase {
    type: string;
}

export interface HelpCenterActionType extends ActionTypeBase {
    id?: string;
    article?: Article;
    comment?: string;
}
