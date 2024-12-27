import styled from "styled-components"
import Titulo from "../Titulo"
import Tags from "./Tags"
import Populares from "./Populares"
import Imagem from "./Imagem"

const GaleriaContainer = styled.div`
    display: flex;
    gap: 24px;
    padding:0;
    margin: 0;
    /* border: 1px solid #f6f6f6; */
    
    `
const SectionFluid = styled.section`
    flex-grow: 1;

    `

const ImagensContainer = styled.div`
        display: flex;
        flex-wrap: wrap;
        gap: 24px;
        `
const Galeria = ({ fotos = [], aoFotoSelecionada, aoAlternarFavorito, aoTagClicada,fotosPopulares,fotoVejaMais }) => {
    // console.log("Galeria", fotos)
    return (
        <>

            <Tags  aoTagClicada={aoTagClicada} />
            <GaleriaContainer>
                <SectionFluid>
                    <Titulo $alinhamento="left">Navegue pela galeria</Titulo>
                    <ImagensContainer>
                        {fotos.map(
                            foto => <Imagem
                                key={foto.id}
                                foto={foto}

                                aoZoomSolicitado={aoFotoSelecionada}
                                aoAlternarFavorito={aoAlternarFavorito}

                            />
                        )}
                    </ImagensContainer>

                </SectionFluid>
                <Populares
                    aoZoomSolicitado={aoFotoSelecionada}
                    fotosPopulares={fotosPopulares}
                    fotoVejaMais={fotoVejaMais}
                />
            </GaleriaContainer>
        </>
    )
}

export default Galeria