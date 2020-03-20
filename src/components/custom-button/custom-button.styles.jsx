import styled,{css} from 'styled-components'

export const buttonStyles = css`
    background-color: black;
    color: white;
    border: none;
    &:hover {
      background-color: white;
      color: black;
      border: 1px solid black;
    }

`
const getProps = props => {
    if(props.isGoogleSignIn) {
        return GoogleSignIn;
    }
    return props.inverted ? InvertedButton : buttonStyles;
    
}
export const CustomButtonContainer = styled.button`
    min-width: 165px;
    width: auto;
    height: 50px;
    letter-spacing: 0.5px;
    line-height: 50px;
    padding: 0 35px 0 35px;
    font-size: 15px;
    text-transform: uppercase;
    font-family: 'Open Sans Condensed';
    font-weight: bolder;
    cursor: pointer;
    margin:10px;
    display: flex;
    justify-content: center;
    ${getProps}
`



export const InvertedButton = css`
    &.inverted {
      background-color: white;
      color: black;
      border: 1px solid black;

      &:hover {
        background-color: black;
        color: white;
        border: none;
      }
    }
`

export const GoogleSignIn = css`
      background-color: #4285f4;
        color:white;
        &:hover {
          background-color: #357ae8;
          border: none;
        }
`