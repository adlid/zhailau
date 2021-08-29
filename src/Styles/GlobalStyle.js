import {createGlobalStyle} from 'styled-components';
import bg from '../Images/bbackground.png'
const GlobalStyle = createGlobalStyle`
.light-theme{
   
    
    
    --background-dark-color: #fff;
    --background-dark-grey: #152A3A;
    --user-alive-color-:#27AE60;
    --user-dead-color:#EB5757;
    --user-post-color:#0B1E2D;
    --user-origin-color:#828282;
    --main-color:#0B1E2D;
    --episod-name-color:#0B1E2D;
    --episod-seria-color: rgba(34, 162, 189, 0.87);
    --episod-date-color:rgba(110, 121, 140, 0.6);
    --second-color:#828282;
    --menu-active-color: #22A2BD;
    --btn-color: #22A2BD;
}
.dark-theme{
    --background-dark-color: #10121A;
    --background-dark-grey: #F2F2F2;
    --user-alive-color-:#27AE60;
    --user-dead-color:#EB5757;
    --user-post-color:#fff;
    --user-origin-color:#6E798C;
    --main-color:#fff;
    --episod-name-color:rgba(255, 255, 255, 0.87);
    --episod-seria-color: rgba(34, 162, 189, 0.87);
    --episod-date-color:rgba(110, 121, 140, 0.6);
    --second-color:#5B6975;
    --menu-active-color: #43D049;
    --btn-color: #22A2BD;
}
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    list-style: none;
    text-decoration: none;
    font-family: 'Nunito', sans-serif;
    font-size: 1.1rem;
    
}
body{    
    color: var(--font-light-color);
}



 
    
`;

export default GlobalStyle;