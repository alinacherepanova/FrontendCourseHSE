import React, { Component } from "react";
import { Article, FullArticle } from "../../entities/Article";
import './ArticleItem.css';
import history from '../../constants/hystory';


export interface IProps{
    item: Article;
}

export interface IState {
    isLoaded: boolean;
    fullArticle: FullArticle;
    error?: string;
}

export default class DetailedArticleItem extends Component<IProps, IState> {

    constructor(props: IProps, state: IState){
        super(props, state);
        this.state = {
            error: '',
            isLoaded: false,
            fullArticle: {id: '', content:''}
        };
    }

    componentDidMount(){
        this.getFullArticleById(history.location.pathname.split('/')[2]);
    }

    getFullArticleById(id: string){
        fetch("http://localhost:4000/fullArticles")
            .then(res => res.json())
            .then(
                (result) => {
                    const fullArticle = result.find((item: FullArticle) =>  item.id.toString() === id);
                    this.setState({
                        isLoaded: true,
                        fullArticle
                    });
                },
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    });
                }
            )
    }

    public render() {
        // @ts-ignore
        const article = history.location.state.article
        const localState: any = this.state;
        if (localState.error) {
            return <div>Error: {localState.error!.message}</div>;
        } else if (!localState.isLoaded) {
            return <div>Loading...</div>;
        } else {
            const fullArticle: FullArticle = this.state.fullArticle;
            if(fullArticle){
                return (
                    <div className="DetailedArticleContainer">
                        <div className="ArticleTitle">
                            <h2>{article.title}</h2>
                        </div>
                        <img src={"data:image/gif;base64,"} alt="Logo"/>
                        <div>{fullArticle.content}</div>
                    </div>
                );
            } else {
                return (
                    <div className="DetailedArticleContainer">
                        No content
                    </div>
                );
            }

        }
    }
}
