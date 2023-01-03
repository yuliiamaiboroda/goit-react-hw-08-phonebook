import styled from "styled-components";

export const Main = styled.main`
padding: 20px;`

export const H2 = styled.h2`
font-family: 'Abel', sans-serif;
font-style: normal;
font-weight: 400;
font-size: 45px;
text-align: center;
`
export const Img = styled.img`
display: block;
margin-left: auto;
margin-right: auto;
height: 500px;
width: 700px;
object-fit: cover;
border-radius: 18px;
@media (max-width: 768px) {
    height: 300px;
    width: 250px;
  }
`
export const P = styled.p`
font-family: 'Abel', sans-serif;
font-style: normal;
font-weight: 400;
font-size: 25px;
text-align: end;
`
export const Div = styled.div`
margin: 0 auto;
width: fit-content;
`