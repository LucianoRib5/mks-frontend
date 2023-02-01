interface Props {
    children: React.ReactNode;
}

const ShoppingCart: React.FC<Props> = ({children}) => {
    return (
        <div>
            {children}
        </div>
    );
};

export default ShoppingCart;