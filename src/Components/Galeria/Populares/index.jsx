import Titulo from "../../Titulo"
import styled from "styled-components"
import fotos from "./fotos-populares.json"
import { FaArrowsToEye } from "react-icons/fa6"



const SectionsPopularesStyled = styled.figure`
/* border: 1px solid #f6f6f6; */
width: 80%;
margin: 0 auto;
padding: 0;
    
`
const ColunaFotosStylezed = styled.section`
    display: flex;
    flex-direction: column;
    gap: 24px;
`

 const ImagemPopulares = styled.img`
    width: 212px;
    height: 158px;
    max-width: 100%;

    border-radius: 20px;
    `

const Botao = styled.button`
    background-color: transparent;
    color: #fff;
    border: 2px solid;
    border-color: #C98CF1;
    padding: 12px 20px;
    font-size: 20px;
    border-radius: 10px;
    cursor: pointer;
    width: 100%;
    margin-top: 16px;
`;


const Populares = () => {
    return (
        <SectionsPopularesStyled>
             <Titulo $alinhamento="center">Populares</Titulo>
             <ColunaFotosStylezed>
                    {fotos.map(fotos => 
                    <ImagemPopulares 
                        key={fotos.id} 
                        src={fotos.path }
                        alt={fotos.alt

                        }/>  )}
             </ColunaFotosStylezed>

             <Botao>Ver mais</Botao>

        </SectionsPopularesStyled>

      
    )
}

export default Populares