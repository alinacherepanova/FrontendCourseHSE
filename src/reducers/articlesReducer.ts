// @ts-ignore
import { HelpCenterStructure } from '../entities/helpCenterStructure';
// @ts-ignore
import { Reducer } from 'redux';
import { ActionTypeBase } from '../actions/actionTypes';
import {ADD_ARTICLE, LOAD_ARTICLE} from "../actions/helpCenterActions";
const initState: HelpCenterStructure = {
    articles: [],
    read: [],
    favorite: [],
    withComplains: []
};

export const helpCenterReducer: Reducer<any> = (state: HelpCenterStructure, action: ActionTypeBase) => {
    switch(action.type){
        case LOAD_ARTICLE:
            console.log('LOAD article (action in reducer');
            break;
        case ADD_ARTICLE:
            console.log('ADD article (action in reducer');
            break;
        default:
            return state;
    }
}

export default helpCenterReducer;
