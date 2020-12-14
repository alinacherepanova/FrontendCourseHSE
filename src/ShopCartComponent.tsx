import React from "react";
import Container from "react-bootstrap/cjs/Container";
import Row from "react-bootstrap/cjs/Row";
import {CartItem} from "./Cart";
import {dataService} from "./DataService";
import {ShopItem} from "./ShopItem";

interface ShopCartComponentState {
    cart: CartItem[];
    cartItemMapping: Map<number, ShopItem>;
}

export class ShopCartComponent extends React.Component<{}, ShopCartComponentState>{


    constructor(props: Readonly<{}> | {}) {
        super(props);

        this.state = {
            cart: [],
            cartItemMapping: new Map<number, ShopItem>()
        };

        dataService.getCart().then(async value => {
            this.setState({
                ...this.state,
                cart: value
            });

            let mapping: Map<number, ShopItem> = new Map<number, ShopItem>();

            value.forEach(async cartItem => {
                let shopItem = await dataService.getById(cartItem.itemId);

                if (shopItem != null) {
                    mapping.set(cartItem.itemId, shopItem);
                }

                this.setState({
                    ...this.state,
                    cartItemMapping: mapping
                });
            })

        });
    }

    render() {
        return (
            <Container fluid>
                {
                    this.state.cart.length > 0 && this.state.cart.map(value => {
                        return (
                            <Row>
                                <span className={"h3"}>{this.state.cartItemMapping.get(value.itemId)?.title}</span>
                                <span className={"ml-3 h3"}>Количество: {value.quantity}</span>
                            </Row>
                        );
                    })
                }

                {
                    this.state.cart.length === 0 && (<>Корзина пуста</>)
                }
            </Container>
        );
    }


}
