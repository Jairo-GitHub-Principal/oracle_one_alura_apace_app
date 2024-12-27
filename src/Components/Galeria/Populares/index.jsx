import Titulo from "../../Titulo"
import styled from "styled-components"



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
    cursor: pointer;
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
    &:active{
  transform: scale(0.95); /* Efeito de "pressionado" */
}
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


const Populares = ({ aoZoomSolicitado, fotosPopulares = [], fotoVejaMais = [], expandida = false }) => {

    return (
        <SectionsPopularesStyled>
            <Titulo $alinhamento="center">Populares</Titulo>
            <ColunaFotosStylezed $expandida={expandida}>
                {fotosPopulares.map(fotos =>
                    <ImagemPopulares
                        key={fotos.id}
                        src={fotos.path}
                        alt={fotos.alt}
                        onClick={() => aoZoomSolicitado(fotos)}
                    />)}
            </ColunaFotosStylezed>

            <Botao
                onClick={() => aoZoomSolicitado(fotoVejaMais)}
            > Veja mais
            </Botao>


        </SectionsPopularesStyled>


    )
}

export default Populares