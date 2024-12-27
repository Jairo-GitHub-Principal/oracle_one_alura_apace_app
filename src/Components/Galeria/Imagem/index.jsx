
import styled from "styled-components"
import { FaExpandAlt } from "react-icons/fa";
import { MdOutlineFavorite } from "react-icons/md";
import { LuHeart } from "react-icons/lu";




const FigureStyled = styled.figure`
    display: flex;
    flex-direction: column;
    width: ${props => props.$expandida  ? '90%' : '460px'};
    max-width: 100%;
    padding: 0;
    margin: 0;
    border-radius: 20px;
    box-shadow: 8px 8px 10px rgba(0, 0, 0, 0.45);
   
    
     
 
    
`

const ImgStyled = styled.img`
    width: 100%;
    border-radius: 20px 20px 0 0;
    
    margin-bottom:0;
    padding: 0;

`
const FigureCaptionStyled = styled.figcaption`
   background-color: #001634;
        border-radius: 0px 0px 20px 20px;
        color: white;
        box-sizing: border-box;
        padding: 12px;      

`
const TituloStyled = styled.h3`
    color: #f6f6f6;
    font-family: 'GandhiSansBold';
    padding: 4px 0;
    margin: 0;
   
`
const FonteStyled = styled.h4`
     font-family: 'GandhiSansBold';
     flex-grow: 1;
     margin: 0;
     font-size: 16px;
    
    
`

const FooterStyled = styled.footer`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0;
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
    color: #f6f6f6;
    margin-left: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: transparent;
    border: none;
    cursor: pointer;
    &:active{
  transform: scale(1.15); /* Efeito de "pressionado" */
}
`
const IconsFavorito = styled.img`
    /** usado para adicionar a imagem do favorito dentro do componente imagen */
`


const Imagem = ({ foto, aoZoomSolicitado, expandida = false, aoAlternarFavorito }) => {
    // console.log("ao clicar",expandida)

    const FavoritoIcon = foto.favorita ? "./icones/favorito-ativo.png" : "./icones/favorito.png"

    return (
        <FigureStyled $expandida={expandida} id={`foto-${foto.id}`} >
            <ImgStyled
                alt={foto.titulo}
                src={foto.path}
            />



            <FigureCaptionStyled>
                <TituloStyled>{foto.titulo}</TituloStyled>
                <FooterStyled>
                    <FonteStyled>
                        {foto.fonte}
                    </FonteStyled>
                    <ContainerButton>
                        
                        <ButonStyled   onClick={() => aoAlternarFavorito(foto)}>
                            <IconsFavorito src={FavoritoIcon}/>                  
                        </ButonStyled>


                        {!expandida &&
                            <ButonStyled  >
                                <FaExpandAlt
                                    size={24}
                                    cursor={"pointer"}
                                    aria-hidden={expandida}  
                                    onClick={() => aoZoomSolicitado(foto)}
                                   
                                />
                            </ButonStyled>
                        }


                    </ContainerButton>

                </FooterStyled>

            </FigureCaptionStyled>


        </FigureStyled>
    )
}

export default Imagem