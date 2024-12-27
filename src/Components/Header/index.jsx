import {styled} from "styled-components"
import CampoTexto from "../CampoTexto"



const HeaderStyles = styled.header`

    padding: 60px ;
    display: flex;
    width: 100%;
    max-width: 1500px;
    justify-content: space-between;
    img {
        max-width: 212px;
    }
  `






const Headers = ( {FotoSearch}) => {
    return (
        <HeaderStyles>
            {/* <LogoAndImput> */}
            <img src="../../../public/imagens/logo.png" alt="logo" /> {/* pra importar da pasta public*/}
            {/* <img src={img} alt="logo" /> * pra importar da pasta assets dentro do src */}
            <CampoTexto  FotoSearch={FotoSearch} />

            {/* </LogoAndImput> */}
                     
      </HeaderStyles>

    )
}

export default Headers

