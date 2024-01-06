import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle<{ $whiteColor?: boolean; }>`
    body {
        
        color: ${props => (props.$whiteColor ? 'white' : 'black')};
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-size: 22px;
        font-family: inherit;
        letter-spacing: 0.3px;
    }
    
`
export default GlobalStyle
