import { IProductInShoppingCart } from "../../types/IProductInShoppingCart";
import { Title } from "../CardBuyProduct/styles";
import { Container, Name, Price, Qty, TitleQty, QtyControl, RemoveButton } from "./styles";
import { MdRemove, MdAdd } from 'react-icons/md';

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
            <Name>
                <p>{product.name}</p>
            </Name>
            <Qty>
                <TitleQty>
                    <p>Qtd:</p>
                </TitleQty>
                <QtyControl>
                    <button disabled={product.qty === 1 && true} onClick={() => quantityDown(product)}> <MdRemove/> </button>
                    <div>{product.qty}</div>
                    <button onClick={() => quantityUp(product)}> <MdAdd/> </button>
                </QtyControl>
            </Qty>
            <Price>{product.price}</Price>
            <RemoveButton onClick={() => removeProduct(product)}>X</RemoveButton>
        </Container>
    );
};

export default CartProductCard;
