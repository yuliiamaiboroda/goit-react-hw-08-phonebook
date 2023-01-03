import styled from 'styled-components';

export const Ul = styled.ul`
margin: 0 ;
margin-top: 50px;
padding: 0;
list-style: none;
display: flex;
gap: 40px;
flex-wrap: wrap;
@media (max-width: 768px) {
    justify-content: center;
}

`
export const Li = styled.li`
position: relative;
padding: 7px 11px;
display: flex;
justify-content: space-between;
gap: 20px;
width: 350px;
color: #8d5524;
font-family: 'Abel', sans-serif;
align-items: center;
background-color: #FFF;
border-radius: 13px;
font-weight: 400;
font-size: 20px;
border: 1px #f95d9b solid;
@media (max-width: 768px) {
width: 300px;
}
`

export const Div = styled.div`
margin-left: auto;
display: flex;
flex-direction: column;
gap: 2px;
`

export const Button = styled.button`
padding: 2px 10px ;
font-size: 20px;
font-family: 'Abel', sans-serif;
background-color: #C0B1EC;;
color: #000000;
border: none;
border-radius: 13px;
&:hover{
    background-color: #9C40E3 ;
    color: white;
}
@media (max-width: 768px) {
    padding: 2px 5px ;
    font-size: 15px;
}
`
