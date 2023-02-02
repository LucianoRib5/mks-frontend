interface Props {
    children: React.ReactNode;
}

const CartProductCard: React.FC<Props> = ({children}) => {
    return (
        <div>
            {children}
        </div>
    );
};

export default CartProductCard;