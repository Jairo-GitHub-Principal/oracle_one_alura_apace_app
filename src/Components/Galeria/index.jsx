import styled from "styled-components"
import Titulo from "../Titulo"
import Tags from "./Tags"
import Populares from "./Populares"
import Imagem from "./Imagem"

const GaleriaContainer = styled.div`
    display: flex;
    border: 1px solid #f6f6f6;
    width: 100%;
    max-width: 1146px;
    `
const SectionFluid = styled.section`
    display: flex;
    flex-direction: column;
    flex-grow: 1;

    `

    const CardStyled = styled.div`
        display: flex;
        flex-wrap: wrap;
        gap: 24px;
        `
const Galeria = ({ fotos = [], aoFotoSelecionada }) => {
    return (
        <>

            <Tags />
            <GaleriaContainer>
                <SectionFluid>
                    <Titulo $alinhamento="left">Navegue pela galeria</Titulo>
                    <CardStyled>
                        {fotos.map(
                            foto => 
                                <Imagem
                                    key={foto.id}
                                    foto={foto.path} 
                                    titulo={foto.titulo}
                                    fonte={foto.fonte}
                                    aoZoomSolicitado={aoFotoSelecionada}
                                    
                                    />
                            )}
                        </CardStyled>
                    
                </SectionFluid>
                <Populares />
            </GaleriaContainer>
        </>
    )
}

export default Galeria