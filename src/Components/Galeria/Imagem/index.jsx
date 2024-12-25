
import styled from "styled-components"
import { FaExpandAlt } from "react-icons/fa";
import { MdOutlineFavorite } from "react-icons/md";



const FigureStyled = styled.figure`
    
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    width: 100%;
    max-width:400px;
    background: rgba(6, 28, 56, 0.3);
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    border-radius: 20px;
    border: 1px solid #f6f6f6;
    box-shadow: 0px 0px 10px rgba(6, 28, 56, 0.8);
 
    
`

const ImgStyled = styled.img`
    width: 100%;
    max-height: 226px;
    border-radius: 20px 20px 0 0;
    margin-bottom:0;
    padding: 0;

`
const FigureCaptionStyled = styled.figcaption`
    display: flex;
    flex-direction: column;
    justify-content:center;       

`
const TituloStyled = styled.h3`
    color: #f6f6f6;
    font-family: 'GandhiSansBold';
    font-size: 24px;
    padding: 0;
    margin-left: 16px;
    margin-bottom: 5px;
`
const PStyled = styled.p`
    margin: 0;
    font-size: 16px;
    font-family: 'AlegreyaSans';
    color: #f6f6f6;
    
    
`

const FooterStyled = styled.footer`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0;
    margin-left: 16px;
    margin-right: 16px;
    margin-bottom: 10px;

`
const ContainerButton = styled.div`
    display: flex;
    gap: 10px;
    color: #f6f6f6;
    background-color: transparent;
    border: none;   
`

const ButonStyled = styled.button`
    background-color: transparent;	
    border: none;
    color: #f6f6f6;
`


const Imagem = ({ foto, titulo, fonte, aoZoomSolicitado }) => {
    return (
        <FigureStyled>
            <ImgStyled
                alt={titulo}
                src={foto}
            />



            <FigureCaptionStyled>
                <TituloStyled>{titulo}</TituloStyled>
                <FooterStyled>
                    <PStyled>
                        {fonte}
                    </PStyled>
                    <ContainerButton>
                        <ButonStyled ><MdOutlineFavorite cursor={"pointer"} /></ButonStyled>
                        <ButonStyled >
                            <FaExpandAlt
                                cursor={"pointer"}
                                onClick={() => aoZoomSolicitado(foto)}  
                            />
                        </ButonStyled>
                    </ContainerButton>

                </FooterStyled>

            </FigureCaptionStyled>


        </FigureStyled>
    )
}

export default Imagem