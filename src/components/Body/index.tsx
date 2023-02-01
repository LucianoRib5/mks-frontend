import { Container } from "./styles";

interface Props {
    children: React.ReactNode;
}

const Body: React.FC<Props> = ({children}) => {
    return (
        <Container>
            {children}
        </Container>
    );
};

export default Body;