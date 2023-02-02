import { Container, Logo, Text1, Text2, ButtonCart } from "./styles";
import { IoMdCart } from 'react-icons/io';

interface Props {
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
    qtyProducts: number; 
}

const Header: React.FC<Props> = props => {

    const { setIsOpen, qtyProducts } = props;
    return (
        <Container>
            <Logo>
                <Text1>MKS</Text1>
                <Text2>Sistemas</Text2>
            </Logo>
            <ButtonCart onClick={() => setIsOpen(true)}>
                <IoMdCart fontSize={'18px'}/>
                {qtyProducts || 0}
            </ButtonCart>
        </Container>
    );
};

export default Header;