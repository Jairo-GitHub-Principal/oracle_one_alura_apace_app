import {styled} from "styled-components"
import CampoTexto from "../CampoTexto"



const HeaderStyles = styled.header`

    padding: 60px 0;
    display: flex;
    flex-direction: column;
    
  `

const LogoAndImput = styled.div`
             display: flex;
             justify-content: space-between;
             align-items: center;

`




const Headers = () => {
    return (
        <HeaderStyles>
            <LogoAndImput>
            <img src="../../../public/imagens/logo.png" alt="logo" /> {/* pra importar da pasta public*/}
            {/* <img src={img} alt="logo" /> * pra importar da pasta assets dentro do src */}
            <CampoTexto />

            </LogoAndImput>
                     
      </HeaderStyles>

    )
}

export default Headers

