import { IProductInShoppingCart } from "../../types/IProductInShoppingCart";
import CartProductCard from "../CartProductCard";
import { Container, CartHeader, Content, Checkout } from "./styles";

interface Props {
    shoppingCart: IProductInShoppingCart[];
    setState: React.Dispatch<React.SetStateAction<IProductInShoppingCart[]>>
}

const ShoppingCart: React.FC<Props> = props => {

    const { shoppingCart, setState } = props;

    const total = shoppingCart
        .reduce((acc, prod) => acc + parseFloat(prod.price) * prod.qty, 0)

    return (
        <Container>
            <CartHeader>Carrinho de compras</CartHeader>
            <Content>
                {
                    shoppingCart.map(prod => 
                        <CartProductCard 
                            product={prod} 
                            state={shoppingCart} 
                            setState={setState}
                        /> 
                    )
                }

                <div>
                    <div>Total</div>
                    <div>{`R$${total}`}</div>
                </div>    
            </Content>
            <Checkout>Finalizar compra</Checkout>
        </Container>
    );
};

export default ShoppingCart;