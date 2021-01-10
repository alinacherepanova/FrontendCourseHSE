import { Article } from "./Article";

export interface HelpCenterStructure {
    articles: Article[];
    read: Article[];
    favorite: Article[];
    withComplains: Article[];
}