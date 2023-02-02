import { IProductInShoppingCart } from "../../types/IProductInShoppingCart";
import { Container, QtyControl } from "./styles";

interface Props {
    product: IProductInShoppingCart;
    state: IProductInShoppingCart[];
    setState: React.Dispatch<React.SetStateAction<IProductInShoppingCart[]>>
}

const CartProductCard: React.FC<Props> = props => {

    const { product, state, setState } = props;

    const quantityUp = (product: IProductInShoppingCart) => {
        let shoppingCart: IProductInShoppingCart[] = [...state];

        shoppingCart.forEach(prod => {
            if (prod.id === product.id) {
                prod.qty += 1;
            }
        });

        setState(shoppingCart); 
    }

    const quantityDown = (product: IProductInShoppingCart) => {
        let shoppingCart: IProductInShoppingCart[] = [...state];

        shoppingCart.forEach(prod => {
            if (prod.id === product.id) {
                prod.qty -= 1;
            }
        });

        setState(shoppingCart); 
    }

    const removeProduct = (product: IProductInShoppingCart) => {
        const shoppingCart: IProductInShoppingCart[] = [...state];

        const remainingProducts = shoppingCart.filter(prod => prod.id !== product.id);

        setState(remainingProducts); 
    }

    return (
        <Container>
            <img src={product.photo} alt={product.name}/>
            <div>{product.name}</div>
            <div>
            <div>Qtd:</div>
            <QtyControl>
                <button disabled={product.qty === 1 && true} onClick={() => quantityDown(product)}> - </button>
                <div>{product.qty}</div>
                <button onClick={() => quantityUp(product)}> + </button>
            </QtyControl>
            </div>
            <div>{product.price}</div>
            <button onClick={() => removeProduct(product)}>X</button>
        </Container>
    );
};

export default CartProductCard;