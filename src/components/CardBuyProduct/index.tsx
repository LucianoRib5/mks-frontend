import { Container, Title, Description, Name, Price  } from "./styles";

interface Props {
    photo: string;
    name: string;
    description: string;
    price: string;
}

const CardBuyProduct: React.FC<Props> = props => {

    const { photo, name, description, price } = props;
    
    return (
        <Container>
            <img src={photo} alt={name}/>
            <Title>
                <Name>{name}</Name>
                <Price>{price}</Price>
            </Title>
            <Description>{description}</Description>
            <button>COMPRAR</button>
        </Container>
    );
};

export default CardBuyProduct;