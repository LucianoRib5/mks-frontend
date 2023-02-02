import { IProductInShoppingCart } from "../../types/IProductInShoppingCart";
import CartProductCard from "../CartProductCard";
import { 
    Container, 
    CartHeader, 
    Content, 
    Checkout, 
    Title, 
    CloseButton, 
    Total 
} from "./styles";

interface Props {
    shoppingCart: IProductInShoppingCart[];
    setShoppingCart: React.Dispatch<React.SetStateAction<IProductInShoppingCart[]>>
    isOpen: boolean
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
}

const ShoppingCart: React.FC<Props> = props => {

    const { shoppingCart, setShoppingCart, isOpen, setIsOpen } = props;

    const total = shoppingCart
        .reduce((acc, prod) => acc + parseFloat(prod.price) * prod.qty, 0)

    return (
        <Container isOpen={isOpen}>
            <CartHeader>
                <Title>Carrinho de compras</Title>
                <CloseButton onClick={() => setIsOpen(false)}>X</CloseButton>
            </CartHeader>
            <Content>
                {
                    shoppingCart.map(prod => 
                        <CartProductCard 
                            product={prod} 
                            state={shoppingCart} 
                            setState={setShoppingCart}
                        /> 
                    )
                }

            </Content>
                <Total>
                    <div>Total</div>
                    <div>{`R$${total}`}</div>
                </Total>    
            <Checkout>Finalizar compra</Checkout>
        </Container>
    );
};

export default ShoppingCart;