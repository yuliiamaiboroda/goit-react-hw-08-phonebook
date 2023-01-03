import styled from 'styled-components';

export const Label =styled.label`
display: flex;
flex-direction: column;
font-family: 'Abel', sans-serif;
color:  #000000;
font-size: 20px;
@media (max-width: 768px) {
margin: 0;
}
`
export const Input = styled.input`
padding: 10px 20px;
width: 300px;
border: 1px #39a0ca solid;
font-family: 'Abel', sans-serif;
font-size: 20px;
border-radius: 13px;
outline: none;

background-color: #FFFFFF;
@media (max-width: 768px) {
width: auto;
margin: 0;
}`