import { createGlobalStyle } from "styled-components";
import hei from './img/hei.svg';


const Global = createGlobalStyle`

  * {
    margin: 0;
    padding: 0;
    font-family: 'poppins', sans-serif;
  }
  
  body {
    height: 100vh;
    display: flex;
    /* align-items:center; */
    justify-content: center;
    background:url("${hei}");
    background-size:cover;
    animation: move 15s linear alternate infinite;
    @keyframes move {
    50%{background-position:50%;}
}
  }
`;

export default Global;