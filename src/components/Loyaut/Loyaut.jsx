import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import NavBar from "components/NavBar/NavBar";
import { Container } from "./Loyaut.styled";
export default function Loyaut(){
    return(
       <>
        <NavBar/> 
        <Container>
        <Suspense fallback={null}>
            <Outlet/>
        </Suspense>
        </Container>
        </>
    )
}