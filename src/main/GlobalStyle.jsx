import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
    :root {
        --color-sidebar: #214365;
        --color-sidebar-hover: #00635F;
        --color-background: #f8f8f8;
        --color-background-card: #ffffff;
        --color-background-title-bar: #f8f8f8;
        --color-background-footer: #f8f8f8;
        --color-background-input: #f2fafd;
        --color-background-report-card: #f2fafd;
        --color-font: #214365;
        --color-icons: #00635F;
        --color-white: #FFFFFF;
        --color-grey: #d3cede;
        --color-blue: #0180c3;
        --color-green: #00635F;
        --color-orange: #E85D04;
        --color-red: #F55859;
        --color-yellow: #f4d464;
    }
    * {
        box-sizing: border-box;
    }
    body {
        font-family: Arial, Helvetica, sans-serif;
        margin: 0;
		padding: 0;
        background-color: var(--color-background);
        color: var(--color-font);
    }
    h1, h2, h3, h4, h5, h6, p {
        margin: 0;
    }
`
export default GlobalStyle