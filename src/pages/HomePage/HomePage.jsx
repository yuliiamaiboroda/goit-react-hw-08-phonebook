import { Main, H2, Img, P , Div} from "./HomePage.styled"
import { Fade } from 'react-slideshow-image';
import "react-slideshow-image/dist/styles.css";
import { fadeImages } from "constantes/constantes";

export default function HomePage (){
    return(
        <Main>
        <H2>Keep in touch</H2>
        <div className="slide-container">
        <Fade>
            {fadeImages.map((fadeImage, index)=>(
                <Div key={index} className="each-fade">
                    <Img src={fadeImage.url} alt={fadeImage.alt} loading="lazy"/>
                    <P>{fadeImage.caption}</P>
                </Div>
            ))}
        </Fade>   
        </div>
        </Main>
    )
}