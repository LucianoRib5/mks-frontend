import { IProduct } from "../../types/IProduct";
import { IProductInShoppingCart } from "../../types/IProductInShoppingCart";
import { RiShoppingBag3Line } from 'react-icons/ri';
import { 
    Container, 
    Content, 
    Title, 
    Description, 
    Name, 
    Price, 
    BuyButton  
} from "./styles";
interface Props {
    product: IProduct;
    state: IProductInShoppingCart[];
    setState: React.Dispatch<React.SetStateAction<IProductInShoppingCart[]>>
}

const CardBuyProduct: React.FC<Props> = props => {

    const { product, state, setState } = props;

    const addProductToCart = (product: IProduct) => {
        const { id, name, photo, price} = product;
        
        let newProduct: IProductInShoppingCart = { 
            id, 
            name, 
            photo, 
            price, 
            qty: 0
        };

        let shoppingCart: IProductInShoppingCart[] = [...state];

        const index = shoppingCart.findIndex(prod => prod.id === product.id);

        if (index >= 0) {
            newProduct = shoppingCart[index];
            newProduct.qty += 1;
            shoppingCart[index] = newProduct;
        } else {
            newProduct.qty = 1;
            shoppingCart.push(newProduct);
        };

        setState(shoppingCart);        
    }
    
    return (
        <Container>
            <Content>
                <img src={product.photo} alt={product.name}/>
                <Title>
                    <Name>{product.name}</Name>
                    <Price>{product.price}</Price>
                </Title>
                <Description>{product.description}</Description>
            </Content>
            <BuyButton onClick={() => addProductToCart(product)}><RiShoppingBag3Line fontSize={'18px'}/>COMPRAR</BuyButton>
        </Container>
    );
};

export default CardBuyProduct;