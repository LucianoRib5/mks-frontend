import Home from "../pages/Home";
import { render, screen } from '@testing-library/react';

describe("Home tests", () => {

    test("checks if the quantity of products in the cart starts with zero (0).", () => {
        render(<Home/>);

        const botaoCarrinho = screen.getByRole('button', { name: "0"})
    
        expect(botaoCarrinho).toBeTruthy();
    })

});