import Imagem from "../Galeria/Imagem"
import styled from "styled-components"

const OverLay = styled.div`
    position: fixed;    
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: rgba(0,0,0,0.8);
    display: flex;
    justify-content: center;
    align-items: center;
`

const DialogStyled = styled.dialog`
position: absolute;
top: 294px;
    `
const ModalZoom = ({foto}) => {
    return (
        <>
        {foto &&<>
        <OverLay/>
            <DialogStyled open={!!foto}>
          <Imagem foto={foto} expandida = {true}/>
            <form method="dialog">
                <button onClick={() => window.location.reload()}>OK</button> {/** recarrega a página e fecha o modal */}
            </form>
        </DialogStyled>
        </> 
        }
        </>
        
    )
}

export default ModalZoom