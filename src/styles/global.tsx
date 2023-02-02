import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    :root {
        /* =================== colors =================== */
        --primary-color: #0F52BA;
        --secondary-color: #EEEEEE;
    };

    * {
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
        font-family: 'Montserrat', sans-serif;

        ::-webkit-scrollbar {
            display: none;
        };
    };
`;