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

    console.log('products:', products);
    
    
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
                    {products.map(p => 
                        <CardBuyProduct 
                            key={p.id} 
                            name={p.name}
                            description={p.description} 
                            photo={p.photo}
                            price={p.price}
                        />
                    )}
                </ProductGrid>              
            </Main>
            <Footer/>
        </Body>
    );
};

export default Home;