import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    *, body {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        background: #000;
    }

    html {
        min-height: 100%;
    }

    *, button, input {
        font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji;
        cursor: pointer;
        transition: color .2s ease-out;
    }

    input {
        background: #30363d;
        border: none;
    }

    button {
        background: #4B0082;
    }

    strong, p, label, span, input, button  {
        color: #fff
    }

    ul {
        list-style: none;
    }

    a {
        text-decoration: none;
    }

    body::-webkit-scrollbar {
        width: 10px;           
    }   

    body::-webkit-scrollbar-track {
        background: var(--header);     
    }

    body::-webkit-scrollbar-thumb {
        background-color: var(--search);   
        border-radius: 20px;     
        border: 3px solid  var(--header); 
    }
`;
