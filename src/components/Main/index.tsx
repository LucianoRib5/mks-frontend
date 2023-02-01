import { Container } from "./styles";

interface Props {
    children: React.ReactNode;
}

const Main: React.FC<Props> = ({children}) => {
    return (
        <Container>
            {children}
        </Container>
    );
};

export default Main;