import styled from 'styled-components';

export const Backdrop = styled.div`
  overflow: auto;
position: fixed;
top: 0;
left: 0;
width: 100%;
height: 100%;
z-index: 10000;
` 
export const Div = styled.div`
padding: 10px;
width: 300px;
border: 1px #f95d9b solid;
border-radius: 15px;
background-color: white;
position: absolute;
top: 50%;
left: 50%;
transform: translateX(-50%) translateY(-50%);
z-index: 1;
`
export const ButtonClose = styled.button`
border-radius: 50%;
background-color: transparent;
border: 1px #f95d9b solid;
color: #f95d9b;
position: absolute;
right: 5px;
top: 5px;
`

export const Form = styled.form`
padding: 10px;
display: flex;
flex-direction: column;
gap: 10px;
@media (max-width: 768px) {
gap :   5px ;
}
`
export const Label =styled.label`
display: flex;
flex-direction: column;
font-family: 'Abel', sans-serif;
color:  #000000;
font-size: 15px;
margin: 0 auto;
@media (max-width: 768px) {
margin: 0;
}
`
export const Input = styled.input`
padding: 5px;
width: 200px;
border: 1px #39a0ca solid;
font-family: 'Abel', sans-serif;
font-size: 15px;
border-radius: 13px;
outline: none;
margin: 0 auto ;
background-color: #FFFFFF;
@media (max-width: 768px) {
width: auto;
margin: 0;
}
`

export const Button = styled.button`
margin: 0 auto ;
background-color: #f95d9b;
color: white;
cursor: pointer;
font-family: 'Abel', sans-serif;
border: 2px transparent solid;
border-radius: 13px;
font-size: 15px;
line-height: 25px;
&:hover{
   background-color: #9C40E3 ;
   color: white;
}
`
export const P = styled.p`
font-family: 'Abel', sans-serif;
color:  #000000;
font-size: 15px;
margin: 5px 20px;
`

export const Span = styled.span`
color: #f95d9b;
`