import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
    ${reset}
    *{
        box-sizing:border-box;
    }
    a{
        color:inherit;
        text-decoration:none;
    }
    body{
        background-color:rgba(20,20,20,1);
        font-size:14px;
        font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        color:white;
        padding-top:50px;
    }
`;

export default GlobalStyle;
