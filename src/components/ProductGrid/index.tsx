import { Container } from "./styles";

interface Props {
    children: React.ReactNode;
}

const ProductGrid: React.FC<Props> = ({children}) => {
    return (
        <Container>
            {children}
        </Container>
    );
};

export default ProductGrid;