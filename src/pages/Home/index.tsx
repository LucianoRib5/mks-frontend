import { useEffect, useState } from "react";
import Body from "../../components/Body";
import CardBuyProduct from "../../components/CardBuyProduct";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Main from "../../components/Main";
import ProductGrid from "../../components/ProductGrid";
import ShoppingCart from "../../components/ShoppingCart";
import { get } from "../../services/api"
import { IProduct } from "../../types/IProduct";
import { IProductInShoppingCart } from "../../types/IProductInShoppingCart";
import Skeleton from '@mui/material/Skeleton';

const Home: React.FC = () => {
    const [products, setProducts] = useState<IProduct[]>([]);
    const [shoppingCart, setShoppingCart] = useState<IProductInShoppingCart[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(false);   
    const [isOpen, setIsOpen] = useState<boolean>(false);   
    
    useEffect(() => {
        const fetchData = async () => {
            const path = "/products?page=1&rows=10&sortBy=id&orderBy=DESC";

            try {
                const res = await get(path);
                setProducts(res.data.products);
                setIsLoading(true);                
            } catch (err: any) {
                console.log(err.response.data);                
            };            
        };

        fetchData();
    }, []);

    return (
        <Body>
            <Header setIsOpen={setIsOpen} qtyProducts={shoppingCart.length}/>
            <Main>
                <ProductGrid>
                    {products.map(prod => 
                        <>
                            {
                                isLoading ? 
                                    <CardBuyProduct 
                                        key={prod.id}
                                        state={shoppingCart}
                                        setState={setShoppingCart}
                                        product={prod}
                                    /> :
                                    <Skeleton variant="rounded" width={217} height={285} />
                            }
                        </>

                    )}
                </ProductGrid>            
                <ShoppingCart 
                    shoppingCart={shoppingCart} 
                    setShoppingCart={setShoppingCart}
                    isOpen={isOpen}
                    setIsOpen={setIsOpen}
                />
            </Main>
            <Footer/>
        </Body>
    );
};

export default Home;