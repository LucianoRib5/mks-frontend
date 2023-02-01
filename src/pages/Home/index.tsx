import { useEffect, useState } from "react";
import Body from "../../components/Body";
import CardBuyProduct from "../../components/CardBuyProduct";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Main from "../../components/Main";
import ProductGrid from "../../components/ProductGrid";
import { get } from "../../services/api"
import { IProduct } from "../../types/IProduct";

const Home: React.FC = () => {
    const [products, setProducts] = useState<IProduct[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    
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
            <Header/>
            <Main>
                <ProductGrid>
                    {products.map(p => <CardBuyProduct/>)}
                </ProductGrid>              
            </Main>
            <Footer/>
        </Body>
    );
};

export default Home;