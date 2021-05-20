import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`  
    body {
    background: ${({ theme }) => theme.background};
    color: ${({ theme }) => theme.text};  
  }
  
`
export default GlobalStyle
