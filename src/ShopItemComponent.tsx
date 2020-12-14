import React from "react";
import { RouteComponentProps } from "react-router-dom";
import {ShopItem} from "./ShopItem";
import {dataService} from "./DataService";
import {Button} from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./ShopItemComponent.css";

interface RouteParams {
    id: string;
}

interface ShopItemComponentProps extends RouteComponentProps<RouteParams> {

}

interface ShopItemComponentState {
    item: ShopItem | null;
}

export class ShopItemComponent extends React.Component<ShopItemComponentProps, ShopItemComponentState>{

    constructor(props: Readonly<ShopItemComponentProps> | ShopItemComponentProps) {
        super(props);

        this.state = {
            item: null
        };

        dataService.getById(+this.props.match.params.id).then(value => {
           this.setState({
               ...this.state,
               item: value
           })
        });
    }

    private addToCart(value: ShopItem | null) {
        if (value) {
            dataService.addToCart(value);
        }
    }

    render() {
       return (
           <Container fluid>
               <Row>
                   <Col>
                       {
                           this.state.item && (
                               <>
                                   <p className="h1">{this.state.item.title}</p>
                                   <img className="item-image" src={this.state.item.image}/>
                                   <p className="h4">{this.state.item.description}</p>
                                   <Button variant={"success"} onClick={event => this.addToCart(this.state.item)}>Add to cart</Button>
                               </>
                           )
                       }
                   </Col>
               </Row>
           </Container>
       );
   }

}
