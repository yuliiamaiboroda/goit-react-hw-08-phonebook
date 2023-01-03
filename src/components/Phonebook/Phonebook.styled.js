import styled from 'styled-components';

export const Form = styled.form`
display: flex;
gap: 20px;
padding-bottom: 20px;
@media (max-width: 768px) {
gap :15px ;
flex-direction: column;
}
`
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
margin: 0 auto ;
background-color: #FFFFFF;
@media (max-width: 768px) {
width: auto;
margin: 0;
}
`

export const Button = styled.button`
margin: auto 0 0 0 ;

background-color: #f95d9b;;
color: white;
cursor: pointer;
font-family: 'Abel', sans-serif;
padding: 10px 20px;
border: 2px transparent solid;
border-radius: 13px;
font-size: 20px;
line-height: 25px;
width: 200px;
&:hover{
   background-color: #9C40E3 ;
   color: white;
}
@media (max-width: 768px) {
   margin: 0 auto ;
}
`

export const Div = styled.div`
:after{
  content: "";
  display: block;
  width: 100%;
  height: 1px;
  background: #001F54;
  left: 0;
  position: absolute;
       } 
`