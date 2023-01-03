import styled from "styled-components";

export const Container = styled.div`
padding: 30px;
display: flex;
flex-direction: column;
justify-content: center;
@media (max-width: 768px) {
padding:20px;  
}
`
export const P = styled.p`
display: inline-block;
font-family: 'Abel', sans-serif;
font-style: normal;
font-weight: 400;
font-size: 25px;
`

export const Span = styled.span`
color: #f95d9b;
`
export const Button = styled.button`
margin: 0 auto ;
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
`