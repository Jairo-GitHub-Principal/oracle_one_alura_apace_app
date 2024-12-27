import Imagem from "../Galeria/Imagem"
import styled from "styled-components"
import { IoCloseOutline } from "react-icons/io5";


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
    background: transparent;
    padding: 0;
    border: 0;
    width: 1156px;
    display: flex;
    justify-content: center;
    form {
        button {
            position: relative;
            top: 20px;
            right: 60px;
            cursor: pointer;
            &:active{
  transform: scale(1.25); /* Efeito de "pressionado" */
}
           
        }
    }
    `
const  ModalZoom = ({ foto,aoAlternarFavorito,aoFechar }) => {
     console.log("ModalZoom", foto)
    return (
        <>
            {foto && <>
                <OverLay />
                <DialogStyled open={!!foto} onClose={aoFechar}>{/**passo o a props ao fechar onde foi atribuida uma função que sera o estado do state fotoSelecionada para nulo,   */}
                    <Imagem foto={foto} expandida={true} aoAlternarFavorito={aoAlternarFavorito} />
                    <form method="dialog">
                        <button style={{border: "none", background: "transparent"}} >
                        <IoCloseOutline color="#f6f6f6" size={35} />
                        </button> {/** recarrega a página e fecha o modal */}
                    </form>
                </DialogStyled>
            </>
            }
        </>

    )
}

export default ModalZoom