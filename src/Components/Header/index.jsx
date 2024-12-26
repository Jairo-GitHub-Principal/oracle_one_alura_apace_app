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

// const LogoAndImput = styled.div`
//              display: flex;
//              width: 100%;
//              box-sizing: border-box;
//              justify-content: space-between;
//              align-items: center;
//              flex-wrap: wrap;

// `




const Headers = () => {
    return (
        <HeaderStyles>
            {/* <LogoAndImput> */}
            <img src="../../../public/imagens/logo.png" alt="logo" /> {/* pra importar da pasta public*/}
            {/* <img src={img} alt="logo" /> * pra importar da pasta assets dentro do src */}
            <CampoTexto />

            {/* </LogoAndImput> */}
                     
      </HeaderStyles>

    )
}

export default Headers

