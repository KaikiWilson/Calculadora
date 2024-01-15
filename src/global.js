import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    body {
        background: rgb(2,0,36);
        background: linear-gradient(300deg, rgba(2,0,36,1) 0%, rgba(9,32,121,1) 20%, rgba(0,142,255,1) 100%);
    }

    *, body {
        margin: 0;
        padding: 0;
        font-family: tahoma;
        color: ${props => (props.darkMode ? 'white' : 'black')}
    }
`